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

import { THREE } from './main.js';

export function createCore() {
    // Create the main scene, camera and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // Antialias for smoother edges

    // Configure renderer settings
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    document.body.appendChild(renderer.domElement);

    // Position the camera
    camera.position.set(80, 40, 50);
    camera.lookAt(0, 0, 0); // Make the camera look at the center of the scene

    // Point light to the scene for realistic lighting
    const pointLight = new THREE.PointLight(0xffffff, 2, 1000);
    pointLight.position.set(0, 0, 0); 
    scene.add(pointLight);

    // Ambient light to illuminate the scene evenly
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
    scene.add(ambientLight);

    return { scene, camera, renderer };
}
