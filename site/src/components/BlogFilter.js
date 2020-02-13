/** @jsx jsx */
import {jsx} from 'theme-ui'
import {useState} from 'react'

const BlogFilter = ({keywords, selectedFilter, handleFilter}) => {
  const [openFilter, setOpenFilter] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpenFilter(prevState => !prevState)}
        sx={{
          backgroundColor: `${openFilter ? `darkPrimary` : `primary`}`,
          color: `white`,
          border: `none`,
          borderRadius: 2,
          outline: `none`,
          fontFamily: `heading`,
          fontWeight: `bold`,
          ':hover, :focus': {
            backgroundColor: `darkPrimary`,
          },
        }}
      >
        Filter
      </button>
      <div
        sx={{
          display: openFilter ? `block` : `none`,
          mt: 20,
          px: 15,
          py: `5px`,
          backgroundColor: `brightWhite`,
          borderRadius: 2,
          color: `black`,
        }}
      >
        {keywords.map((key, idx) => {
          const isSelected = key === selectedFilter
          return (
            <button
              key={idx}
              onClick={e => handleFilter(e.target.innerText)}
              sx={{
                mx: [2],
                my: [1],
                fontSize: `0.9em`,
                py: `5px`,
                px: `8px`,
                outline: `none`,
                border: `0.5px solid`,
                borderRadius: 2,
                borderColor: `${isSelected ? `primary` : `greyLight`}`,
                backgroundColor: `${isSelected ? `primary` : `transparent`}`,
                color: `${isSelected ? `white` : `grey`}`,
                fontWeight: `${isSelected ? `bold` : null}`,
                ':hover, :focus': {
                  borderColor: `primary`,
                },
              }}
            >
              {key}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default BlogFilter
