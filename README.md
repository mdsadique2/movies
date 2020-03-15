This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information



### App is using AntDesign for components and axios for API calls 
### App is in dev mode  use "npm install; npm start" to run it
### .env files have apikey, apibase url etc


### filter panel is added and apply filter button returns selected filter values, API is not integrated yet

### search and top level menu works with api


### src/AntOverrides
    - to override ant configs
### src/App

- the main page to run app
- divided into header and content

### src/AppPath
 - config for allowed urls

### src/Genres.js
 - all genres data were downloaded and used from file rather than api call

### src/style
 - app level styles

### src/Component
    - reusable components to be used across pages

### src/Pages
    - pages of the app
    - all pages have its own html, page level css, actionDispatcher, actionCreator and reducer
    
### src/Router
    - Router configuration of app

### src/Store
    - Store configuration of app

### src/Utilities/ApiLayer.js
    - APILayer  for app to configure headers, keys auths etc
    - intercept request and response

### src/Utilities/ApiUrls.js
    - congiguration of available api urls

### src/Utilities/utils.js
    - Utils library function






