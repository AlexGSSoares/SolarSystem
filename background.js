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

export function createBackground(scene) {
  // Generate geometry for stars
  const starGeometry = new THREE.BufferGeometry();
  const starCount = 1000; // Number of stars
  const starPositions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 1000;  // Random positions in 3D space
  }
  starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

  // Create a circular texture for stars
  const starTexture = new THREE.CanvasTexture(generateStarTexture());
  starTexture.needsUpdate = true;

  // Create material for stars
  const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1, 
      sizeAttenuation: true,
      map: starTexture,
      transparent: true,
      alphaTest: 0.5 // Improve performance by ignoring invisible points
  });

  // Create star system and add to the scene
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  return stars;
}

// Function to generate a circular star texture
function generateStarTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  // Draw a circular gradient to represent the star
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Bright center
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)'); // Fade midway
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Transparent edges
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size); // Fill the canvas with the gradient

  return canvas;
}