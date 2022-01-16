/** @jsx jsx */
import {jsx} from 'theme-ui'

function AccordionButton({data, ...rest}) {
  const {idx} = data
  return (
    <button
      sx={{
        variant: `buttons.accordion`,
        ':hover, :focus': {bg: `${idx % 2 === 0 ? `#fff2f2` : `#e8f0ff`}`},
      }}
      {...rest}
    >
      <h3
        sx={{
          m: 0,
          flex: `1 1 auto`,
          textAlign: `left`,
          fontFamily: `heading`,
          color: `black`,
        }}
      >
        {data.title}
      </h3>
      {data.url && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={data.url}
          sx={{
            variant: `buttons.secondaryRed`,
            flex: `0 0 auto`,
          }}
        >
          Live
        </a>
      )}
      {data.repo && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={data.repo}
          sx={{
            variant: `buttons.secondaryBlue`,
            flex: `0 0 auto`,
            ml: [2, 3, 4],
          }}
        >
          Repo
        </a>
      )}
    </button>
  )
}

export default AccordionButton
