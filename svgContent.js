
const svgContent = function ({
text,
textColor,
shape,
shapeColor,
}) {
return `

${text}
${textColor}
${shape}
${shapeColor}

`;

};

module.exports = svgContent;