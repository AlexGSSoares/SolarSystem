___________________________________________________

# Solar System 
This project is an interactive 3D representation of a solar system built with THREE.js. The application provides a dynamic and educational experience, allowing users to explore planets, orbits, and stars in a customizable environment. Users can adjust parameters like orbital speed, star density, and toggle between abstract and realistic modes of visualization.

____________________________________
## PREREQUISITES 

Before you start, you'll need the following tools installed:
- Code editor: VS Code
- Java Development Kit (JDK)
- OCaml
- Dune (for building OCaml projects)
- Prolog
- JPL7 library (Swi-prolog integration)

>[!NOTE]
> Make sure that Java, OCaml and Prolog are properly configured and accessible from the terminal or command prompt.
____________________________________
## Project Structure

The project is divided into modular files for better maintainability and scalability:

- **index.html**: Provides the base structure, including UI elements such as sliders and toggles.
- **style.css**: Styles the application, ensuring a visually appealing and responsive interface.
- **main.js**: The entry point, responsible for importing and initializing the core modules.
- **core.js**: Configures the 3D environment, including the camera, scene, renderer, and lighting.
- **background.js**: Handles the creation and animation of the starfield background.
- **planets.js**: Manages the creation of planets, moons, Saturn's rings, and the Sun, supporting both abstract and realistic modes.
- **controls.js**: Implements interactive controls, allowing users to modify parameters and toggle modes.
- **animation.js**: Manages the animation loop, updating planet positions and other dynamic elements in real-time.
___________________________________
## HOW TO RUN  

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/solar-system-interactive.git
   ```

2. Navigate to the project directory:
   ```bash
   cd solar-system-interactive
   ```

3. Open `index.html` in a browser to view the application.

> **Note:** No additional server or dependencies are required as the project uses only vanilla JavaScript and local files.


## Future Enhancements

- **Visual Improvements:**
  - Add dynamic shadows and atmospheric effects.
  - Improve textures and lighting for a more realistic appearance.

- **Educational Features:**
  - Include interactive tooltips with planetary facts.
  - Simulate astronomical events like eclipses or planetary alignments.

- **Compatibility:**
  - Optimize for mobile devices and lower-end hardware.
  - Integrate WebXR for VR exploration of the solar system.
---

Feel free to contribute or open issues to suggest new features or report bugs!


