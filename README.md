# AssetsDev Package

A free package tool with svg icons for your dev projects!

### Install

Install dependecies in your project

```
npm i assets-dev
```

### Usage

```
javascript 
const { listIcon, getIcon } = require('assets-dev'); 
 
// Create an instance of AssetsDev 
const assets = new AssetsDev(); 
 
// List all the SVG icon names 
const iconNames = assets.listIcon(); 
console.log(iconNames); 
 
// Get the SVG icon content by name 
const iconName = 'example-icon.svg'; 
const iconContent = assets.getIcon(iconName); 
console.log(iconContent);
```

In this example, we import the `listIcon` and `getIcon` methods from the `assets-dev` package, create an instance of `AssetsDev`, list all the SVG icon names, and get the SVG icon content by name. Feel free to adjust the code snippet and usage instructions according to your specific implementation and requirements.

Let me know if you need further assistance with the documentation or any other aspect of your project!