import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
export const GlobalContext = React.createContext({})
export const GlobalProvider = GlobalContext.Provider

export const withGlobal = FunctionalComponent => {
  const componentName =
    FunctionalComponent.displayName ||
    FunctionalComponent.name ||
    `FunctionalComponent`

  let render = (props, ref) => {
    return (
      <GlobalContext.Consumer>
        {globalProps => {
          return <FunctionalComponent {...globalProps} ref={ref} {...props} />
        }}
      </GlobalContext.Consumer>
    )
  }

  let WithGlobals = React.forwardRef(render)
  WithGlobals.displayName = `WithGlobals(${componentName})`

  return hoistNonReactStatics(WithGlobals, FunctionalComponent)
}
