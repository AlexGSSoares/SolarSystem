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

// Abstract values
export const ABSTRACT_VALUES = {
  orbitRadius: [10, 15, 20, 25, 35, 45, 55, 65],
  planetSizes: [0.7, 0.8, 0.9, 0.7, 1.5, 1.3, 1.0, 0.9],
  planetSpeeds: [0.01, 0.008, 0.006, 0.004, 0.003, 0.002, 0.0015, 0.001]
};

// Realistic Values 
export const REALISTIC_VALUES = {
  orbitRadius: [12.75, 17.78, 21.92, 29.75, 87.81, 150.26, 294.66, 457.26], // (Average radius in KM of routes from the sun / 10,000,000) + (sun radius / 100,000)
  planetSizes: [0.0244, 0.06052, 0.06378, 0.033895, 0.6991, 0.5823, 0.25362, 0.24622], // Radius of planets in km / 100,000 (using the same scale used for the sun)
  planetSpeeds: [0.0417, 0.0161, 0.01, 0.0053, 0.00084, 0.00034, 0.00012, 0.00006] // Translational speed = (1 / orbital period in years) / 100
};

export function createPlanets(scene) {
  // Define textures for planets 
  const textures = {
      mercury: './textures/mercury.jpg',
      venus: './textures/venus.jpg',
      earth: './textures/earthday.jpg',
      moon: './textures/moon.jpg',
      mars: './textures/mars.jpg',
      jupiter: './textures/jupiter.jpg',
      saturn: './textures/saturn.jpg',
      saturnRings: './textures/saturn_rings.jpg',
      uranus: './textures/uranus.jpg',
      neptune: './textures/neptune.jpg',
      sun: './textures/sun.jpg'
  };
  const planetTextures = [
    textures.mercury,
    textures.venus,
    textures.earth,
    textures.mars,
    textures.jupiter,
    textures.saturn,
    textures.uranus,
    textures.neptune
  ];

  // Planets
  const mode = ABSTRACT_VALUES; 
  const planets = [];
  const orbits = [];

  // Create planets and their orbits
  mode.orbitRadius.forEach((radius, index) => {
    const planetGeometry = new THREE.SphereGeometry(mode.planetSizes[index], 32, 32);
    const planetTexture = new THREE.TextureLoader().load(planetTextures[index]);
    const planetMaterial = new THREE.MeshLambertMaterial({ map: planetTexture }); 
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.userData = {
        radius,
        speed: mode.planetSpeeds[index],
        angle: 0
    };
    planets.push(planet);
    scene.add(planet);

    // Create orbital rings
    const orbitGeometry = new THREE.RingGeometry(radius - 0.1, radius + 0.1, 64);
    const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbit.rotation.x = Math.PI / 2;
    orbits.push(orbit);
    scene.add(orbit);
  });

   // Create the Sun
  const sunGeometry = new THREE.SphereGeometry(6.96, 32, 32); // Radius for the sun / 100.000 (scaled)
  const sunTexture = new THREE.TextureLoader().load(textures.sun);
  const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  scene.add(sun);

  // Saturn rings
  const saturnRingsGeometry = new THREE.RingGeometry(1.8, 2.5, 64);
  const saturnRingsTexture = new THREE.TextureLoader().load(textures.saturnRings);
  const saturnRingsMaterial = new THREE.MeshBasicMaterial({ map: saturnRingsTexture, side: THREE.DoubleSide });
  const saturnRings = new THREE.Mesh(saturnRingsGeometry, saturnRingsMaterial);
  saturnRings.rotation.x = 0.466; // Inclination on X-axis
  planets[5].add(saturnRings); // Attach rings to Saturn

  // Earth moon
  const moonGeometry = new THREE.SphereGeometry(0.27, 32, 32);
  const moonTexture = new THREE.TextureLoader().load(textures.moon);
  const moonMaterial = new THREE.MeshPhongMaterial({ map: moonTexture });
  const moon = new THREE.Mesh(moonGeometry, moonMaterial);
  moon.userData = {
      radius: 1.5,
      speed: 0.05,
      angle: 0
  };
  planets[2].add(moon); // Attach Moon to Earth

  return { planets, sun };
}
