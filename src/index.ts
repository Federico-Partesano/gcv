#! /usr/bin/env node

import { stat, mkdir, writeFile } from "fs/promises";
import { exit } from "process";
import { helpMessage } from "./help";
import { generateComponent } from "./generateComponent";
import { hasContainSimbol, hasContainSpace } from "./regex";

//const args = process.argv.slice(2); // command line arguments start at position 2
let componentName = process.argv[2];
// let flags: string[] = process.argv.slice(3).filter(flag => /^[-][a-zA-Z]$/.test(flag));
let flags: string[] = process.argv.filter((str) => str[0] === "-");
const extensionStyle = `${
  flags.some((flag) => flag === "-css") ? "css" : "scss"
}`;
const extensionComponent: "tsx" | "jsx" = `${
  flags.some((flag) => flag === "-js") ? "jsx" : "tsx"
}`;

const createMkdir: boolean = !flags.some((flag) => flag === "-i");
const pathComponent =createMkdir ? `./${componentName}/${componentName}.${extensionComponent}`  :`./${componentName}.${extensionComponent}`
const pathComponentStyle =createMkdir ? `./${componentName}/${componentName}.${extensionStyle}`  :`./${componentName}.${extensionStyle}`

//- Scaffolding
//-----------------------------
// const buildFlag: string | undefined = flags.find((arg => arg === '-b'));
const generateScaffolding = async () => {
  if (componentName) {
    if(componentName[0] !== componentName[0].toUpperCase()){
      console.log("The first letter of the component name must be uppercase!");
      exit(1);
    } else
    if (hasContainSimbol(componentName)) {
      console.log("name file can't contain symbols!");
      exit(1);
    } else if (hasContainSpace(componentName)) {
      console.log("name file can't contain spaces!");
      exit(1);
    }
    //check if the directory exists (if not fs.stat throw an error and trigger the catch branch)
    try {
      await stat(`./${componentName}`);
      console.log("\nERROR: A directory with the same name already exists\n");
      exit(-1);
    } catch {
      //if the directory not exists yet
      try {
        //Source Directory
       createMkdir && await mkdir(`./${componentName}`, { recursive: true });
        await writeFile(
          pathComponent,
          generateComponent(extensionComponent, componentName, extensionStyle)
        );
        await writeFile(pathComponentStyle, "");

        //Output Directory
        // await writeFile(`./${projectName}/${srcDir}/${main.replace(/\.(js)($|\?)/, '.ts')}`, "");
        // console.log(`Created '${main}' file in '${srcDir}'`);
      } catch (err) {
        console.log(err);
        exit(-1);
      }
    }
  } else {
    console.log("\n" + helpMessage + "\n");
    exit(0);
  }
};

// Running
//---------
//if the help flag is called print help and exit

generateScaffolding()
  .then(
    // () => setJsons(`${process.cwd()}/${projectName}`, outDir, main)
    () => console.log("Component created!")
  )
  .catch((err) => console.log(err))

  .catch((err) => console.log(err));
