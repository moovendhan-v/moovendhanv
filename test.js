const fs = require('fs');

function increaseRemValues(inputString) {
  const regex = /(\d*\.?\d+)rem/g;

  const result = inputString.replace(regex, (match, p1) => {
    const originalValue = parseFloat(p1);
    const increasedValue = originalValue * 0.625; // decresit 
    return `${increasedValue.toFixed(2)}rem`;
  });

  return result;
}

function readAndIncreaseCSSFile(filePath) {
  try {
    // Read the CSS file
    const cssContent = fs.readFileSync(filePath, 'utf8');

    // Increase the rem values
    const increasedCSS = increaseRemValues(cssContent);

    // Print the result
    console.log('Original CSS Content:\n', cssContent);
    console.log('\nIncreased CSS Content:\n', increasedCSS);

    return increasedCSS;
  } catch (err) {
    console.error('Error reading CSS file:', err);
    return null;
  }
}

// Example usage:
const cssFilePath = 'final.css';
const increasedCSS = readAndIncreaseCSSFile(cssFilePath);

// Optionally, write the increased content back to the file
if (increasedCSS !== null) {
  const outputFilePath = 'file.css';
  fs.writeFileSync(outputFilePath, increasedCSS, 'utf8');
  console.log('\nIncreased CSS content written to', outputFilePath);
}
