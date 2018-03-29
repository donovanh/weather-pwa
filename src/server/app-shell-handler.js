const React = require('react')
const ReactDOMServer = require('react-dom/server')
const AppShell = require('../app/AppShell')
const { configureStore } = require('../app/store')


module.exports = function renderAppShell (req, res) {
  const store = configureStore()
  // const { route, match } = matchRoutes(appRoutes, req.url)[0]

  const initialState = {}

  const html = ReactDOMServer.renderToString(
    <AppShell store={store} />
  )

  // store.dispatch(fetchPageData({ route, match })).then(() => {
  //   const initialState = store.getState()
  //   const html = ReactDOMServer.renderToString(
  //     <AppShell store={createStoreWithMiddleware(reducers)} />
  //   )

  //   res.send(`
  //     <!doctype html>
  //     <html>
  //       <head>
  //         <meta name="viewport" content="width=device-width, initial-scale=1">
  //         <meta name="theme-color" content="#ff6600">
  //         <link rel="stylesheet" href="/css/app-shell.css">
  //         <link rel="preload" href="/js/app-shell.js" as="script">
  //         <link rel="manifest" href="/manifest.json">
  //       </head>
  //       <body>
  //         <div id="app-root">${html}</div>
  //         <script>window.__INITIAL_STATE__= ${JSON.stringify(initialState)}</script>
  //         <script defer src="/js/app-shell.js"></script>
  //       </body>
  //     </html>
  //   `)
  // }).catch(error => {
  //   console.error(error)
  //   res.json({
  //     name: error.name,
  //     message: error.message,
  //     stack: error.stack
  //   })
  // })

  res.send(`
      <!doctype html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="theme-color" content="#ff6600">
          <link rel="stylesheet" href="/css/app-shell.css">
          <link rel="preload" href="/js/app-shell.js" as="script">
          <link rel="manifest" href="/manifest.json">
        </head>
        <body>
          <div id="app-root">${html}</div>
          <script>window.__INITIAL_STATE__= ${JSON.stringify(initialState)}</script>
          <script defer src="/js/app-shell.js"></script>
        </body>
      </html>
    `)
}

