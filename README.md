# gcompr
## Based on [tpstart](https://github.com/Iranon/tpstart)

### A node.js script to generate your TypeScript project.

### TypeScript required! [ npm install -g typescript ]

#### - Usage: gcompr {ComponentName} {Flag}

##### You can run -> npx tpstart {ComponentName} {Flag}

It requires the project name as the first argument and accepts subsequent flags.

Admitted flags are:
* '-css': create component with css file
* '-scss':  create component with scss file
* '-tsx':  create component with tsx file
* '-jsx':  create component with jsx file
* '-i':  create files component inside current path

* default: create component with scss and tsx files in a dir with component name";

The output scaffolding has the following structure:

>NAME_COMPONENT/
>
>├── NAME_COMPONENT.(tsx | jsx)
>
>├── NAME_COMPONENT.(css | scss)

The project is configured in order to be compiled with webpack in a bundle.js file.
  
<sub>
  If you clone the repository run "npm i" to install dependencies.
</sub>
