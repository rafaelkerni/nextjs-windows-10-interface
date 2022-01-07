import { useEffect, useState } from 'react'

import type { NextPage } from 'next'

import { Box, Grid, Drawer, AppBar } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'

import Desktop from '@/components/Desktop'
import RightTaskBar from '@/components/RightTaskBar'
import StartButton from '@/components/StartButton'
import useRedux from '@/hooks/useRedux'

const Home: NextPage = () => {
  const { setState } = useRedux('startbutton', useDispatch())
  const data = useSelector(state => state.data)

  return (
    <div
      style={{
        backgroundImage: 'url("wallpapper.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        padding: 10
      }}
    >
      <Desktop />
      <Box sx={{ flexGrow: 1 }}>
        <Drawer
          variant="persistent"
          hideBackdrop={true}
          anchor={'bottom'}
          open={data.startbutton?.open}
          onClose={() => setState({ open: false })}
          PaperProps={{
            sx: {
              height: 550,
              width: '50vw',
              bottom: 50,
              backgroundColor: '#2a2a2c'
            }
          }}
          ModalProps={{
            sx: {
              height: '50vh',
              width: '50vw',
              bottom: 50,
              backgroundColor: '#2a2a2c'
            }
          }}
        >
          <div
            style={{
              height: 300,
              width: '20vw'
            }}
          />
        </Drawer>
        <AppBar
          position="fixed"
          color="primary"
          sx={{
            top: 'auto',
            bottom: 0,
            background: '#1F3240'
          }}
        >
          <div style={{ height: 50 }}>
            <Grid
              justifyContent="space-between" // Add it here :)
              container
            >
              <StartButton />
              <RightTaskBar />
            </Grid>
          </div>
        </AppBar>
      </Box>
    </div>
  )
}

export default Home
