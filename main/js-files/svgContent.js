function createLogo({ text, textColor, shape, shapeColor }) {
  
  const svgContent = `
    <svg width="100" height="100">
      <rect width="100%" height="100%" fill="${this.color}" />
      <text x="50%" y="50%" font-size="16" fill="white" text-anchor="middle" alignment-baseline="middle">
        ${this.text}
      </text>
    </svg>
  `;

  return svgContent;
  };

module.exports = createLogo;
