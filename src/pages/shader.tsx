// import { useParams } from "react-router";
import { Header } from "../components/header";
import "./shader.css";
import { useState } from "react";
import { ShaderCard } from "../components/shaderCard";

export const Shader = () => {
    // let params = useParams();
    const [scale, setScale] = useState<number>(1.5)
    const [speed, setSpeed] = useState<number>(0.4)
    const [iterations, setIterations] = useState<number>(3)

    const custom1 = () => {
        setScale(5.0)
        setSpeed(0.4)
        setIterations(3.0)
    }

    const custom2 = () => {
        setScale(1.4)
        setSpeed(1.3)
        setIterations(5.0)
    }

    const custom3 = () => {
        setScale(3.4)
        setSpeed(0.9)
        setIterations(1.0)
    }

    return (
        <div id="shader_page">
            <Header/>
            <div id="shader_header">
                <h1>No.1</h1>
                <br/>
                <div>
                    <h3>Created at:</h3>
                    <h2>May 13th, 2025</h2>
                </div>
            </div>
            <div id="shader_content">
                <ShaderCard scale={scale} speed={speed} iterations={iterations} />
                <div id='panel'>
                    <div className='input_div'>
                    {/* <h1>Customize:</h1> */}
                    <label><span>SCALE:</span> {scale}</label>
                    <input
                    type='range'
                    className='slider'
                    min={1}
                    max={5}
                    step={0.1}
                    value={scale}
                    onChange={(e) => setScale(parseFloat(e.target.value))}
                    >
                    </input>
                    </div>

                    <div className='input_div'>
                    <label><span>SPEED:</span> {speed}</label>
                    <input
                    type='range'
                    className='slider'
                    min={0.1}
                    max={2.0}
                    step={0.1}
                    value={speed}
                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                    >
                    </input>
                    </div>

                    <div className='input_div'>
                    <label><span>ITERATIONS:</span> {iterations}</label>
                    <input
                    type='range'
                    className='slider'
                    min={1.0}
                    max={5.0}
                    step={1.0}
                    value={iterations}
                    onChange={(e) => setIterations(parseFloat(e.target.value))}
                    >
                    </input>
                    </div>
                    <div id="favorites">
                        <button onClick={custom1}>
                            Custom 1
                        </button>
                        <button onClick={custom2}>
                            Custom 2
                        </button>
                        <button onClick={custom3}>
                            Custom 3
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}