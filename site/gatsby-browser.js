import cssVars from 'css-vars-ponyfill'
import LogRocket from 'logrocket'

// to make themeUI colors works in IE11
cssVars({})

export function onClientEntry() {
  console.log('Initialized LogRocket')
  LogRocket.init('kj9k43/portfolio')
  LogRocket.identify('mackenzieluke94@gmail.com', {
    name: 'Luke MacKenzie',
    email: 'mackenzieluke94@gmail.com',
  })
}
