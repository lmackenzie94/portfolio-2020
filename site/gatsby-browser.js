import cssVars from 'css-vars-ponyfill'
import LogRocket from 'logrocket'

// to make themeUI colors works in IE11
cssVars({})

exports.onClientEntry = () => {
  console.log('Initialized LogRocket')
  LogRocket.init('kj9k43/portfolio')
}
