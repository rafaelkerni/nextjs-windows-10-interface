import { useState } from 'react'

import Image from 'next/image'

import { Grid, Collapse } from '@mui/material'

// eslint-disable-next-line @emotion/no-vanilla
import { css, cx } from '@emotion/css'

import StartButton from '@/components/StartButton'

const cls1 = css`
  background-color: #394c55;
`

const LeftTaskBar = () => {
  const [hover, setHover] = useState('')

  return (
    <Grid item display={'flex'} direction="row">
      <StartButton />
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
        onMouseEnter={() => setHover('chrome')}
        onMouseLeave={() => setHover('')}
        className={cx({ [cls1]: hover === 'chrome' })}
      >
        <div
          style={{
            marginTop: 3,
            flexGrow: 1,
            paddingInline: 10
          }}
        >
          <Image
            src={'/chrome.png'}
            width={25}
            height={25}
            alt={'chrome'}
          />
        </div>
        <Collapse
          orientation="horizontal"
          in={hover === 'chrome'}
          timeout={100}
          collapsedSize={38}
        >
          <div
            style={{
              height: 2,
              width: 45,
              backgroundColor: '#83C0EF'
            }}
          />
        </Collapse>
      </Grid>
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
        onMouseEnter={() => setHover('spotify')}
        onMouseLeave={() => setHover('')}
        className={cx({ [cls1]: hover === 'spotify' })}
      >
        <div
          style={{
            marginTop: 3,
            flexGrow: 1,
            paddingInline: 10
          }}
        >
          <Image
            src={'/spotify.png'}
            width={25}
            height={25}
            alt={'spotify'}
          />
        </div>
        <Collapse
          orientation="horizontal"
          in={hover === 'spotify'}
          timeout={100}
          collapsedSize={38}
        >
          <div
            style={{
              height: 2,
              width: 45,
              backgroundColor: '#83C0EF'
            }}
          />
        </Collapse>
      </Grid>
    </Grid>
  )
}

export default LeftTaskBar
