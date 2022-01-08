import { useEffect, useState, ReactNode, cloneElement } from 'react'

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
import { motion } from 'framer-motion'
import { BiWorld } from 'react-icons/bi'
import {
  VscAdd,
  VscChevronDown,
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize
} from 'react-icons/vsc'

const SysButtons = () => {
  const [hover, setHover] = useState('')

  interface ButtonProps {
    Component: ReactNode
    close?: boolean
  }

  const Button = ({ Component, close }: ButtonProps) => {
    const [color, setColor] = useState('#5F6368')
    const [hover, setHover] = useState(false)

    return (
      <motion.div
        style={{
          width: 45,
          height: 40
        }}
        onHoverStart={e => setColor(close ? 'white' : '#5F6368')}
        onHoverEnd={e => setColor('#5F6368')}
        // whileHover={{
        //   backgroundColor: close ? '#E81123' : '#E5E5E5'
        // }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            backgroundColor: hover
              ? close
                ? '#E81123'
                : '#E5E5E5'
              : undefined
          }}
        >
          {cloneElement(Component, {
            size: '1.6em',
            style: {
              color,
              paddingRight: 4,
              paddingLeft: 4,
              paddingTop: 5,
              paddingBottom: 5,
              height: 30
            }
          })}
        </Grid>
      </motion.div>
    )
  }

  return (
    <Grid
      container
      flexDirection="row"
      justifyContent="flex-end"
      style={{
        width: 'auto',
        height: 50
      }}
    >
      <Button Component={<VscChevronDown />} />
      <Button Component={<VscChromeMinimize />} />
      <Button Component={<VscChromeMaximize />} />
      <Button Component={<VscChromeClose />} close />
      {/* <VscChevronDown
          size="1.2em"
          style={{
            color: '#5F6368'
          }}
        />
      </Button> */}
      {/* <Button>
        <VscChromeMinimize
          size="1.2em"
          style={{
            color: '#5F6368'
          }}
        />
      </Button>
      <Button>
        <VscChromeMaximize
          size="1.2em"
          style={{
            color: '#5F6368'
          }}
        />
      </Button>
      <Button>
        <VscChromeClose
          size="1.2em"
          style={{
            color: '#5F6368'
          }}
        />
      </Button> */}
    </Grid>
  )
}

export default SysButtons
