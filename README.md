# Weather PWA

This is an example project created using [Create-React-App](https://github.com/facebook/create-react-app) and upgraded to have progressive superpowers using (LINKTO: Nearform's PWA example) as a guide.

## Notes

1) Set up new Create React App
2) Add in components using Redux, redux promise and the Weather Underground API as a source
3) Basic functionality:

* Root page shows search bar you can put city name into
* Lists previously searched cities
* Currently this list is lost on reload

4) Goals for PWA

* Load the app shell instantly and server-side the API data
* Then on browsing / searching, load the API data from:
* Service worker if offline & previously requested (within certain time frame)
* Service worker if previously requested (within certain time frame)
* Weather underground API

### Steps to make (4) happen

* Folder structure

The PWA relies on having server and client parts. To enable this, set up folders for this within `src`:

    src/app
    src/client
    src/server

The `app` folder has any polymorphic content - i.e. components that will be rendered on both server and client side. The `client` folder has files needed for when the bootstrapped / hydrated client picks up after the server has delivered the initial page state. The `server` deals with the browser's request and handles the initial server side rendering of the content.

Then add a server `index.js` file at the root of the application to run the server.

Set up scripts to run the Node service in `package.json`.

Add in `webpack.config.js`.

Set up the server files (app-shell-handler.js, index.js)

In `index.js` set up the necessary routes, do use `appShellHandler` if it's the React app, or to serve up static responses for CSS, JS and `manifest.json`.

In `app-shell-handler.js` set up any data fetching needed to pre-populate the app, and then ensure it's returning the payload of HTML needed for the first display.

Then over in `app` set up `AppShell.js` to wrap the app and add in any routing and Redux if needed.

Then in the `client` set up any needed images, styles and the JavaScript `app-shell.js` and `sw.js` (for the service worker).

In my case I'm removing any routing as the initial version of the app will be all on one page but this could be added in later.

For data storage, set up the `app/store` folder to initialise the initial state and apply any Redux middleware and actions / reducers.

Add in `.sass-lint.yml` and `.babelrc` and `workbox.config.js`



TODO

* Service worker config / caching
* Serverside rendering
* Manifest.json
