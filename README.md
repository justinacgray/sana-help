This is an NPI Registry Healthcare application where users can find their nearest provider. The solo application was made with React.js. The API used was "https://clinicaltables.nlm.nih.gov/api/npi_idv/v3/search?terms&q=" FROM https://clinicaltables.nlm.nih.gov/apidoc/npi_org/v3/doc.html#params. This API was limited but will be replaced by "https://npiregistry.cms.hhs.gov/api/?version=2.0" FROM https://npiregistry.cms.hhs.gov/registry/help-api as soon as the CORS issued is resolved. One of the solutions I've heard that worked but I haven't got it to work properly for this project YET was creating a proxy with an express server. 

Code will be refactored with not only this API, but one of the bugs noticed was that once a user entered in data, unless manually refreshed, the data will not be cleared properly. The form appears to be cleared but if a user changes the same fields that were just entered data will not populate because the function thinks it still has the previous data entered. This may be the limitation of the API itself or more functionality must be added to not only clear the user fields but reset the function.  Also, this API automatically gives you default data and wanted that section to be cleared before the user enters in any data. These are just 3 bugs noticed with this project, but after more testing will see how to optimize more of the code itself. 

This project was a great challenge and really tested all my knowledge not only on React but real-life problem solving had to come into place too. For instance, my understanding of State and Props, where unidirectional-data-flow came into place, has increased tremendously. Without a firm understanding of those two concepts, this project would not have been possible. One major construct I will be researching is connecting my backend and frontend when I am not making an API from scratch. I realized that I relied a lot on doing a process one particular way and when I couldn't do that on this project it did cause hurdles and delays. I will learn more about how to work with public APIs and integrate them into my backend. 



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
