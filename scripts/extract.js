const { execSync } = require('child_process');

const zipFile = '/vercel/share/v0-project/my-ai-fitness-coach-main.zip';
const outputDir = '/vercel/share/v0-project';

try {
  execSync(`unzip -o "${zipFile}" -d "${outputDir}"`, { stdio: 'inherit' });
  console.log('Extraction complete');
} catch (error) {
  console.error('Error:', error.message);
}
