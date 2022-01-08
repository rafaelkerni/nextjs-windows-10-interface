import { useEffect, useState, ReactNode } from 'react'

import Image from 'next/image'

import { Box, Toolbar, Grid, Collapse } from '@mui/material'
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

interface AppProps {
  name: string
  image: string
}

const StartButton = () => {
  const [hover, setHover] = useState('')
  const { setState } = useRedux(useDispatch())
  const data = useSelector(state => state.data)

  function AppComponent({ name, image }: AppProps) {
    return (
      <Grid
        item
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          paddingTop: 10,
          paddingBottom: 15
        }}
        onMouseEnter={() => setHover(name)}
        onMouseLeave={() => setHover('')}
        className={cx({ [cls1]: hover === name })}
      >
        <div
          style={{
            marginTop: 3,
            flexGrow: 1,
            paddingInline: 10
          }}
        >
          <Image src={image} width={25} height={25} alt={name} />
        </div>
        <Collapse
          orientation="horizontal"
          in={hover === name}
          timeout={200}
          collapsedSize={38}
        >
          <div
            style={{
              height: 2,
              width: 45,
              backgroundColor: '#83C0EF'
            }}
          ></div>
        </Collapse>
      </Grid>
    )
  }

  return (
    <LightTooltip
      title="Iniciar"
      placement="top"
      enterNextDelay={1000}
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
        onMouseEnter={() => setHover('start')}
        onMouseLeave={() => setHover('')}
        className={cx({ [cls1]: hover === 'start' })}
        onClick={() =>
          setState('startbutton', { open: !data.startbutton.open })
        }
      >
        <FaWindows
          size="1.5em"
          className={cx({ [cls2]: hover === 'start' })}
        />
      </Grid>
    </LightTooltip>
  )
}

export default StartButton
