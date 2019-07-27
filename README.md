# Squalvj Boilerplate
This project is built using create-react-app for the plain react setup with a tweak by myself

> Work smart, not work hard.

 - ✅ SCSS
 - ✅ Axios
 - ✅ Service Call Architecture (create from scratch by myself, fork here: [https://github.com/squalvj/frontendServiceArchitecture](https://github.com/squalvj/frontendServiceArchitecture))
 - ✅ Proptypes
 - ✅ Lodash
 - ✅ React Router
 - ✅ Enzyme
 - ✅ Infinite Scroll Pagination
 - ✅ Alias Import Abolute Path
 - ✅ .env production & development
 - ✅ Modern Grid Layout- ✅ Responsive
 - ✅ Newsletter will show after hit bototm of content grid

# Folder Structure
*Make the structrure even more tidy than your room*

The folder structure is really easy to manage and it has strong meaning for new developer that would maintain this project, it would fit you guys that have OCD :)
This kind of structure is being used in large scale apps on my experience and quite reliable.
```
project
│   README.md
│   package.json
│   .env.development -> environment dev
│   .env.production -> environment production
└───build -> Builded package...
└───src
|	└───service -> List api & generic service wrapper...
|	└───module -> Standard getter call and custom error handling...
|	└───styles -> Base & Generic css class...
|	└───mocks -> Offline response mock for testing...
|	└───utils -> Generic reusable function...
|	└───components -> Generic component...
|	└───container
|	|	└───[NAME_OF_CONTAINER] -> can be wrapper for connecting redux state
|	|	|	└───COMPONENT -> the component inside container & the style itself
|	|	App.js -> Wrapper root component place modal here...
```
# Feature
![enter image description here](https://i.kym-cdn.com/photos/images/newsfeed/001/206/382/b7a.gif)
- Newsletter will shown if you reach the bottom of Grid content height
- Cookies will slide up after click ok
- Responsive
- Cross browser Platform

## Wrapper Service Call
This is the things that i love, the wrapper built using **Axios** is has rich configuration, you can intercept before call, after call, you can validate if backend returning some special error code that need to show to the user, we can put the function in the generic interceptor in this file, and also we can dispatching (show/hide) generic loader in this file aswell if we use redux :)

# How to run
You might want to setup environment for development and production seperately, you can do this by:
- .env.development -> Setting variable for dev mode
- .env.production -> Setting variable for production mode

Running the project is easy like snapping your finger.

 1. install the dependencies by running 'yarn'
 2. run 'npm run start' to start development mode
 3. thats all...

## Test

 1. run 'npm run test'

## Build

 1. run 'npm run build'
 2. the compile file will be inside the folder **build**


Feel free to contact me if anything happen on squalvj@gmail.com
Medium: [https://medium.com/@squalvj](https://medium.com/@squalvj)
Github: [https://github.com/squalvj](https://github.com/squalvj)
Codepen: [https://codepen.io/squalvj/](https://codepen.io/squalvj/)