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

