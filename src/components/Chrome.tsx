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
import Iframe from 'react-iframe'

import Navigation from '@/components/Chrome/Navigation'
import SysButtons from '@/components/SysButtons'

const BorderLessIframe = styled(Iframe)`
  border-width: 0;
`

//importa o hook
import useRedux from '@/hooks/useRedux'

const Chrome = () => {
  const [url, setURL] = useState('')
  const { setState } = useRedux(useDispatch())
  const data = useSelector(state => state.data)

  useEffect(() => {
    setURL('http://www.randon.com.br')
  }, [])

  return (
    <Grid item direction="column">
      <div
        style={{
          backgroundColor: '#E7EAED'
        }}
      >
        {/* Abas */}
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
                width: '28%',
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
            <SysButtons />
          </Grid>
        </div>
        {/* Navegação */}
      </div>
      <Navigation />
      <BorderLessIframe
        url={url}
        width="100%"
        height="100%"
        position="absolute"
      />
    </Grid>
  )
}

export default Chrome
