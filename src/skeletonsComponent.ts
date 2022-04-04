export const skeletonTs = (name: string, extensionStyle: string) => 
`import React, { FC } from 'react';
import "./${name}.${extensionStyle}";

interface ${`I` + name} {

}

const ${name}: FC<${`I` + name}> = () => {
return (
    <div>${name}</div>
)
};

export default ${name};`;

export const skeletonJs = (name: string, extensionStyle: string) => 
`import React from 'react';
import "./${name}.${extensionStyle}";

const ${name} = () => {
  return (
    <div>${name}</div>
  )
};

export default ${name};`;
