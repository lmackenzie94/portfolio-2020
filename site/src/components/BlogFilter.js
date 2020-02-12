/** @jsx jsx */
import {jsx} from 'theme-ui'
import {useState} from 'react'

const BlogFilter = ({keywords}) => {
  const [openFilter, setOpenFilter] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpenFilter(prevState => !prevState)}
        sx={{
          backgroundColor: `primary`,
          color: `white`,
          border: `1px solid`,
          borderColor: `primary`,
          borderRadius: 2,
          outline: `none`,
          fontFamily: `heading`,
          fontWeight: `bold`,
        }}
      >
        Filter
      </button>
      <div
        sx={{
          display: openFilter ? `block` : `none`,
          mt: 20,
          p: 15,
          backgroundColor: `brightWhite`,
          borderRadius: 2,
          color: `black`,
        }}
      >
        {keywords.map((key, idx) => (
          <span
            key={idx}
            sx={{
              mx: `10px`,
              fontSize: `0.9em`,
              py: `5px`,
              px: `10px`,
              border: `0.5px solid`,
              borderRadius: 2,
              borderColor: `greyLight`,
              color: `grey`,
              ':hover, :focus': {
                borderColor: `primary`,
                color: `white`,
                backgroundColor: `primary`,
                fontWeight: `bold`,
              },
            }}
          >
            {key}
          </span>
        ))}
      </div>
    </div>
  )
}

export default BlogFilter
