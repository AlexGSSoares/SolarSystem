    /*********************************************************
    ------------------ UNIVERSIDADE ABERTA -------------------
    **********************************************************
    ***************          EFOLIO B         ****************
    *************      Computação Gráfica       **************
    **********************************************************
    ************    Professor: António Araújo     ************
    ************    Professor: Pedro Pestana      ************
    ************     Aluno: Alexandre Soares      ************
    *************      Nr de Aluno: 2101521      *************
    *********************************************************/

// Import library for orbit controls for the camera 
import { OrbitControls } from 'https://unpkg.com/three@0.124.0/examples/jsm/controls/OrbitControls.js';
// Import module for abstract and realistc values
import { ABSTRACT_VALUES, REALISTIC_VALUES } from './planets.js';

export function createControls(camera, renderer, planets) {
    // Initialize orbit controls for the camera
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true; // Smooth camera movement
    controls.dampingFactor = 0.25; // Resistance factor for damping
    controls.zoomSpeed = 0.8; // Adjust zoom speed

    // Retrieve user interface elements for interaction
    const speedSlider = document.getElementById('speedSlider');
    const starSlider = document.getElementById('starSlider');
    const realisticToggle = document.getElementById('realisticToggle');

    // Function to toggle between realistic and abstract modes
    const updateRealismMode = (isRealistic) => {
        const mode = isRealistic ? REALISTIC_VALUES : ABSTRACT_VALUES;

        planets.forEach((planet, index) => {
            // Update planet size based on selected mode
            const size = mode.planetSizes[index];
            planet.scale.set(size, size, size);

            // Update orbital radius and speed
            planet.userData.radius = mode.orbitRadius[index];
            planet.userData.speed = mode.planetSpeeds[index];

            // Show or hide orbital rings based on mode
            planet.parent?.children.forEach(child => {
                if (child.geometry && child.geometry.type === 'RingGeometry') {
                    child.visible = !isRealistic;
                }
            });
        });
    };

    // Initialize realism mode based on the toggle's state
    updateRealismMode(realisticToggle.checked);

    // Listener for toggle changes
    realisticToggle.addEventListener('change', () => {
        updateRealismMode(realisticToggle.checked);
    });

    return { speedSlider, starSlider, realisticToggle };
}