const { execSync } = require('child_process');
const path = require('path');

const zipFile = path.join(process.cwd(), 'my-ai-fitness-coach-main.zip');
const outputDir = process.cwd();

try {
  execSync(`unzip -o "${zipFile}" -d "${outputDir}"`, { stdio: 'inherit' });
  console.log('Extraction complete');
} catch (error) {
  console.error('Error:', error.message);
}
