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

// - THREE.js library for 3D rendering
import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js';
window.THREE = THREE;
export { THREE };

// Importing necessary modules and libraries:
import { createCore } from './core.js';
import { createBackground } from './background.js';
import { createPlanets } from './planets.js';
import { createControls } from './controls.js';
import { animate } from './animation.js';

// Main configuration for initializing the scene, camera, and renderer
const { scene, camera, renderer } = createCore();

// Create the background stars and add them to the scene
const stars = createBackground(scene);

// Create planets and their orbits, adding them to the scene
const { planets, sun } = createPlanets(scene);

// Set up camera controls and link user inputs (e.g., sliders)
const controls = createControls(camera, renderer, planets);
const { speedSlider, starSlider } = controls;

// Start the animation loop to render the scene and handle interactions
animate(renderer, scene, camera, planets, stars, speedSlider, starSlider, sun);