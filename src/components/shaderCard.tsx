import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { vertexShader } from '../shaders/vertex'
import { fragmentShader } from '../shaders/fragments'

interface ShaderCardProps {
    scale: number,
    speed: number,
    iterations: number
}

export const ShaderCard = ({scale, speed, iterations} : ShaderCardProps) => {
    const shaderRef = useRef<HTMLCanvasElement>(null)
    const shaderWrapperRef = useRef<HTMLDivElement>(null)
    const materialRef = useRef<THREE.ShaderMaterial>(null)

    useEffect(() => {

        if (!shaderRef.current || !shaderWrapperRef.current) return;
        let animationFrameId: number;

        const renderer = new THREE.WebGLRenderer({
            antialias: true, 
            canvas: shaderRef.current,
            alpha: true
        });
        renderer.autoClearColor = false;
        renderer.setSize(shaderWrapperRef.current.clientWidth, shaderWrapperRef.current.clientHeight);

        const camera = new THREE.OrthographicCamera(
            -1, // left
            1, // right
            1, // top
            -1, // bottom
            -1, // near,
            1, // far
        );
        const scene = new THREE.Scene();
        const plane = new THREE.PlaneGeometry(2, 2);
        materialRef.current = new THREE.ShaderMaterial({
            fragmentShader,
            vertexShader,
            uniforms : {
                iTime: { value: 0 },
                iResolution:  { value: new THREE.Vector3(1, 1, 1) }, //iResolution can be initialized as it won't change (uVu)
                scale: { value: 1.5},
                speed: {value: 0.4},
                iterations: {value: 3.0}
            }
        }); 

        scene.add(new THREE.Mesh(plane, materialRef.current));
        const render = (time : number) => {
            if (!materialRef.current) return;
            time *= 0.001;
            materialRef.current.uniforms.iTime.value = time;
            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(render);
        }

        animationFrameId = requestAnimationFrame(render);

        const callResize = () => {
            if (!shaderWrapperRef.current) return;
            renderer.setSize(shaderWrapperRef.current.clientWidth, shaderWrapperRef.current.clientHeight);
        }

        window.addEventListener('resize', callResize)

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', callResize)
        }
    }, [])

    useEffect(() => {
        if (!materialRef.current) return;
        materialRef.current.uniforms.scale.value = scale
        materialRef.current.uniforms.speed.value = speed
        materialRef.current.uniforms.iterations.value = iterations
    }, [scale, speed, iterations])
    
    return (
        <div id='shader' ref={shaderWrapperRef}>
            <canvas ref={shaderRef}></canvas>
        </div>
    )
}