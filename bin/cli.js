#!/usr/bin/env node
import { execSync } from 'child_process"';
const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute${command}`, e);
    return false;
  }
  return true;
};
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Chysev/express-ejs-app ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm run build`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);
console.log(`Installing dependencies for ${repoName}`);
const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit(-1);

console.log("Congratulation! You are ready. Follow the instructions to start");
console.log(`cd ${repoName} && npm run build`);
console.log(`npm run dev`);
