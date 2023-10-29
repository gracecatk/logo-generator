export function generateSVG({ text, textColor, shape, shapeColor }) {
  // Generate the SVG content here based on user inputs
  const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${shapeColor}" />
    <text x="50%" y="50%" font-size="48" text-anchor="middle" dy=".3em" fill="${textColor}">${text}</text>
  </svg>`;

  return svg;
}