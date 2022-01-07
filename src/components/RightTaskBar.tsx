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
import { BsVolumeUp, BsChatSquare } from 'react-icons/bs'
import { IoIosArrowUp } from 'react-icons/io'

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
  background-color: #323f56;
`

const RightTaskBar = () => {
  const [hover, setHover] = useState('')
  const [dateState, setDateState] = useState(new Date())
  const { setState } = useRedux('startbutton', useDispatch())
  const data = useSelector(state => state.data)

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000)
  }, [])

  return (
    <Grid item display={'flex'} direction="row">
      <LightTooltip
        title={'Mostrar ícones ocultos'}
        placement="top"
        enterTouchDelay={10000}
      >
        <Grid
          item
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          onMouseEnter={() => setHover('more')}
          onMouseLeave={() => setHover('')}
          className={cx({ [cls1]: hover === 'more' })}
          style={{
            paddingTop: 10,
            paddingInline: 5,
            paddingBottom: 20
          }}
        >
          <IoIosArrowUp size="1.5em" />
        </Grid>
      </LightTooltip>
      <LightTooltip
        title={'Altofalantes: 100%'}
        placement="top"
        enterTouchDelay={10000}
      >
        <Grid
          item
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          onMouseEnter={() => setHover('vol')}
          onMouseLeave={() => setHover('')}
          className={cx({ [cls1]: hover === 'vol' })}
          style={{
            paddingTop: 10,
            paddingInline: 5,
            paddingBottom: 20
          }}
        >
          <BsVolumeUp size="1.5em" />
        </Grid>
      </LightTooltip>
      <LightTooltip
        title={
          <div style={{ whiteSpace: 'pre-line' }}>
            {
              'Português(Brasil)\nTeclado Português (Brasil ABNT2)\n\nPara alterar os métodos de entrada, pressione a tecla Windows+Espaço.'
            }
          </div>
        }
        placement="top"
        enterTouchDelay={10000}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          onMouseEnter={() => setHover('lang')}
          onMouseLeave={() => setHover('')}
          className={cx({ [cls1]: hover === 'lang' })}
          style={{
            paddingTop: 8,
            paddingInline: 5,
            paddingBottom: 20
          }}
        >
          <span style={{ fontSize: 12 }}>POR</span>
          <span style={{ fontSize: 12 }}>PTB2</span>
        </Grid>
      </LightTooltip>
      <LightTooltip
        title={dateState.toLocaleDateString('pt-BR', {
          year: 'numeric',
          month: 'long',
          weekday: 'long',
          day: 'numeric'
        })}
        placement="top"
        enterTouchDelay={10000}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          onMouseEnter={() => setHover('date')}
          onMouseLeave={() => setHover('')}
          className={cx({ [cls1]: hover === 'date' })}
          style={{
            paddingTop: 8,
            paddingRight: 5,
            paddingLeft: 5,
            paddingBottom: 20
          }}
        >
          <span style={{ fontSize: 12 }}>
            {dateState.toLocaleString('pt-BR', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: false
            })}
          </span>
          <span style={{ fontSize: 12 }}>
            {dateState.toLocaleDateString('pt-BR')}
          </span>
        </Grid>
      </LightTooltip>
      <LightTooltip
        title={'Não há notificações novas'}
        placement="top"
        enterTouchDelay={10000}
      >
        <Grid
          item
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          onMouseEnter={() => setHover('notifications')}
          onMouseLeave={() => setHover('')}
          className={cx({ [cls1]: hover === 'notifications' })}
          style={{
            marginRight: 20,
            paddingTop: 10,
            paddingInline: 15,
            paddingBottom: 20
          }}
        >
          <BsChatSquare size="1.5em" />
        </Grid>
      </LightTooltip>
    </Grid>
  )
}

export default RightTaskBar
