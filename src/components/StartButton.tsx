import { useEffect, useState, ReactNode } from 'react'

import { Box, Toolbar, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Tooltip, {
  TooltipProps,
  tooltipClasses
} from '@mui/material/Tooltip'

import { useSelector, useDispatch } from 'react-redux'

// eslint-disable-next-line @emotion/no-vanilla
import { css, cx } from '@emotion/css'
import { FaWindows } from 'react-icons/fa'

//importa o hook
import useRedux from '@/hooks/useRedux'

const LightTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}))

const cls1 = css`
  background-color: #394c55;
`
const cls2 = css`
  color: #429ce3;
`

const StartButton = () => {
  const [hover, setHover] = useState(false)
  const { setState } = useRedux('startbutton', useDispatch())
  const data = useSelector(state => state.data)

  return (
    <LightTooltip
      title="Iniciar"
      placement="top"
      enterTouchDelay={10000}
    >
      <Grid
        item
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          paddingTop: 10,
          paddingInline: 20,
          paddingBottom: 20
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={cx({ [cls1]: hover })}
        onClick={() => setState({ open: !data.startbutton.open })}
      >
        <FaWindows size="1.5em" className={cx({ [cls2]: hover })} />
      </Grid>
    </LightTooltip>
  )
}

export default StartButton
