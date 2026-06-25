const { execSync } = require('child_process');

console.log("===================================================");
console.log("  SentientWare Frontend Deployment Build Script");
console.log("===================================================\n");

try {
  console.log("[1/3] Installing dependencies...");
  execSync('npm install', { stdio: 'inherit' });

  console.log("\n[2/3] Building the Next.js frontend application...");
  execSync('npm run build', { stdio: 'inherit' });

  console.log("\n[3/3] Build completed successfully!\n");
  console.log("To start the production server, run the following command:");
  console.log("   npm run start\n");
} catch (error) {
  console.error("\n[!] An error occurred during the build process.");
  process.exit(1);
}
