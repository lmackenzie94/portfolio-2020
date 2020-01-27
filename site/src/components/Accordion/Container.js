/** @jsx jsx */
import {jsx} from 'theme-ui'

function Container({children}) {
  return (
    <div
      sx={{
        paddingLeft: `20px`,
        borderLeft: `4px solid`,
        borderColor: `primary`,
      }}
    >
      <div
        sx={{
          border: `2px solid`,
          borderColor: `grey`,
          borderRadius: 3,
          background: `brightWhite`,
          overflow: `hidden`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Container
