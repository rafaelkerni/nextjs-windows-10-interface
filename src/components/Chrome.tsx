import { useEffect, useState, ReactNode } from 'react'

import Image from 'next/image'

import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Grid, AppBar } from '@mui/material'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { useSelector, useDispatch } from 'react-redux'

// eslint-disable-next-line @emotion/no-vanilla
import { css, cx } from '@emotion/css'
import { BiWorld } from 'react-icons/bi'
import { FaWindows } from 'react-icons/fa'
import {
  VscAdd,
  VscChevronDown,
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize
} from 'react-icons/vsc'

//importa o hook
import useRedux from '@/hooks/useRedux'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128
  }
}))

const Chrome = () => {
  const [hover, setHover] = useState('')
  const { setState } = useRedux('startbutton', useDispatch())
  const data = useSelector(state => state.data)

  return (
    <Grid
      item
      direction="column"
      style={{
        paddingTop: 10,
        paddingBottom: 15
      }}
    >
      <AppBar
        elevation={0}
        sx={{
          background: '#E7EAED'
        }}
      >
        <div style={{ height: 50 }}>
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              container
              style={{
                marginTop: 10,
                marginLeft: 10,
                height: 40,
                width: '30%',
                backgroundColor: 'white',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: -10
              }}
            >
              <BiWorld
                size="1.2em"
                style={{
                  color: '#5F6368',
                  marginTop: 10,
                  marginLeft: 15
                }}
              />
              <span
                style={{
                  color: '#000',
                  marginTop: 12,
                  marginLeft: 10,
                  fontSize: 13
                }}
              >
                Nova guia
              </span>
            </Grid>
            <Grid
              container
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center"
              style={{
                width: '25%',
                height: 50
                //backgroundColor: 'red'
              }}
            >
              <VscChevronDown
                size="1.2em"
                style={{
                  color: '#5F6368'
                }}
              />
              <VscChromeMinimize
                size="1.2em"
                style={{
                  color: '#5F6368',
                  marginLeft: 25
                }}
              />
              <VscChromeMaximize
                size="1.2em"
                style={{
                  color: '#5F6368',
                  marginLeft: 25
                }}
              />
              <VscChromeClose
                size="1.2em"
                style={{
                  color: '#5F6368',
                  marginLeft: 25,
                  marginRight: 25
                }}
              />
            </Grid>
          </Grid>
        </div>
      </AppBar>
      <AppBar
        position="static"
        sx={{
          marginTop: 10
        }}
      >
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              alignSelf: 'flex-end',
              backgroundColor: 'red'
            }}
          >
            MUI
          </Typography>
          <IconButton
            size="large"
            aria-label="search"
            color="inherit"
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Grid>
  )
}

export default Chrome
