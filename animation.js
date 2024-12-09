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

export function animate(renderer, scene, camera, planets, stars, speedSlider, starSlider, sun) {
    function render() {
        // Rotate the Sun slowly on its Y-axis
        sun.rotation.y += 0.001;

        planets.forEach(planet => {
            // Update planet position along its orbital path
            planet.userData.angle += planet.userData.speed * (speedSlider.value / 5);
            planet.position.x = Math.cos(planet.userData.angle) * planet.userData.radius;
            planet.position.z = Math.sin(planet.userData.angle) * planet.userData.radius;

            // Animate moons and rings (children of the planet)
            if (planet.children.length > 0) {
                planet.children.forEach(child => {
                    // Animate moon movement along its orbit
                    if (child.userData && child.userData.angle !== undefined) {
                        child.userData.angle += child.userData.speed;
                        child.position.x = Math.cos(child.userData.angle) * child.userData.radius;
                        child.position.z = Math.sin(child.userData.angle) * child.userData.radius;
                        child.rotation.y = child.userData.angle;
                    }

                    // Rotate Saturn's rings smoothly
                    if (child.geometry && child.geometry.type === "RingGeometry") {
                        child.rotation.z += 0.01; // Adicione uma rotação suave
                    }
                });
            }
        });

        // Update the star field based on the starSlider value
        if (stars.geometry.attributes.position.array.length !== starSlider.value * 3) {
            const newStarPositions = new Float32Array(starSlider.value * 3);
            for (let i = 0; i < starSlider.value * 3; i++) {
                newStarPositions[i] = (Math.random() - 0.5) * 1000;
            }
            stars.geometry.setAttribute('position', new THREE.BufferAttribute(newStarPositions, 3));
        }

        // Render the scene from the camera's perspective
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    render();
}
