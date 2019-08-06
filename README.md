
🚀 React Native Boilerplate (V0.57)
=======================================

[![React Native](https://img.shields.io/badge/React%20Native-v0.57.8-blue.svg)](https://facebook.github.io/react-native/)
[![React Navigation V2](https://img.shields.io/badge/React%20Navigation-v2.18-blue.svg)](https://reactnavigation.org/)


React Native Boilerplate is a starting point for React Native application. This project is configured with redux, rematch 
and redux persist.


## Features
* [Redux](http://redux.js.org/)
* [Rematch](https://github.com/rematch/rematch)
* [Redux Persist](https://github.com/rt2zz/redux-persist/)
* [Redux Logger](https://github.com/LogRocket/redux-logger)
* [React Navigation](https://reactnavigation.org/) 
* [Jest](https://facebook.github.io/jest/)
* [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))


## Prerequisites
* [Node](https://nodejs.org) v8.10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* [Yarn](https://yarnpkg.com/)
* A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)


## Getting Started
1. Clone this repo, `git clone https://github.com/xchwarze/react-native-boilerplate.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder,  `rm -rf .git`
4. Open `package.json` and change the `name` property with your project name
5. Open `index.js` and replace `'ReactNativeBoilerPlate'` by your project name
6. Open `app.json` and replace `'ReactNativeBoilerPlate'` by your project name 
7. Run `yarn` or `npm install` to install dependencies
8. Run `react-native eject` to create iOS & Android Folders.
9. Run `react-native link`
10. Start the packager with `npm start`
11. Connect a mobile device to your development machine
12. Run the test application:
  * On Android:
    * Run `react-native run-android`
  * On iOS:
    * Open `ios/YourReactProject.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device
13. Enjoy!!!


## Contributing

PRs are welcome
