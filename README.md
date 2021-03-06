
<p align="center">
  <img style="shadow:none" width="100%" height="100%" src="https://github.com/chrisalexander0617/find_my_ride/blob/master/src/find_my_ride_logo.png?raw=true">
</p>

# Find My Ride

Find my ride is an app that allows users to report and recover their stolen/missing vehciles
in cities where law-enforcement may not be able to provide full assistnance.

Users will signup in order to make a report of a stolen vehicle that will be stored into a protected databse where
they can verify the status of the car only when the user types in a query using the VIN or license plate number to retrieve 
it. This allows only the owner to access the vehciles current location to prevent illegal towing and ransom to recover the stolen
vehicle, which will allow owners to quickly file insurance claims to help get them back on the road. 

Businesses who sell anti-theft devices and services will be given the option to advertise their products to visitors on the site for a monthly cost once enough users are on the platform.

## Prerequisites
Running `yarn install` or `npm install` will install the dependencies but doing them manually also works if you run into any issues
* Node.js v 16.13.1
* React v 17.0.2 or higher
* Firebase v9 or higher
* dot-env

### Firebase Setup
Create a firebase account and create a new app https://console.firebase.google.com/. Afterwards, create a web app and copy and paste the SDK variables and add them to an `.env.local` file in the root of the application so it can be used inside of `firebase.js`

## Available Scripts

In the project directory, you can run:

## Collaboration
If you would like to be a collaborator on this project, email me at hello@digyt.co. Push any requested changes to the `dev` branch. All branches must have `fix/` or `feature/` as a prefix. For example, `fix/{ticket number}`. This helps with tracking issues.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
