const generateSVG = require('./generateSVG');

test('generates SVG content with valid input', () => {
  const input = {
    text: 'ABC',
    textColor: 'red',
    shape: 'circle',
    shapeColor: '#00FF00',
  };

  const svg = generateSVG(input);

  expect(svg).toContain('<text x="50%" y="50%" font-size="48" text-anchor="middle" dy=".3em" fill="red">ABC</text>');
  expect(svg).toContain('<rect width="100%" height="100%" fill="#00FF00" />');
});

test('generates SVG content with valid input and limited text length', () => {
  const input = {
    text: 'ABCDE',
    textColor: 'blue',
    shape: 'triangle',
    shapeColor: 'yellow',
  };

  const svg = generateSVG(input);

  expect(svg).toContain('<text x="50%" y="50%" font-size="48" text-anchor="middle" dy=".3em" fill="blue">ABC</text>');
  expect(svg).toContain('<rect width="100%" height="100%" fill="yellow" />');
});