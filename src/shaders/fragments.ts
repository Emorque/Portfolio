//Fragment Shader copied from my shaderToy code, except for uniform/varying variables, and void main()
    
export const fragmentShader = 
`
    #include <common>
    uniform vec3 iResolution;
    uniform float iTime;
    varying vec2 vUv;

    uniform float scale;
    uniform float speed;
    uniform float iterations;

    
    vec3 palette(in float t)
    {

        vec3 a = vec3(0.5,0.5,0.5);
        vec3 b = vec3(0.5,0.75,0.5);
        vec3 c = vec3(1.0,0.7,0.4);
        vec3 d = vec3(0.0,0.15,0.20);
        return a + b*cos( 6.283185*(c*t+d) );
    }

    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
        vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;  
        
        vec2 uv0 = uv; // Get origin before manipulating uv
        
        vec3 finalColor = vec3(0.0);
        
        for (float i = 0.0; i <iterations; i++) { // For each iteration, it increases the number of additinal layers in finalColor, and finer details
            uv = fract(scale * uv) - 0.5;
            float d = length(uv) * exp(-length(uv0)); // d represents the local distance relative to the center of each repeition / fract
            vec3 col = palette(length(uv0) + (i * .2) + (iTime * speed)); // Multiplying iTime by a fraction reduces the speed of gradient

            d = sin(d * 16. + iTime)/8.;
            d = abs(d);
            d = pow(0.01/d, 1.5);

            finalColor += col* d;
        }

        fragColor = vec4(finalColor, 1.0);
    }

    void main() {
        mainImage(gl_FragColor, vUv * iResolution.xy);
    }
`;