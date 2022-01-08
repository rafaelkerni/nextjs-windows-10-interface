import { useState } from 'react'

import { Grid, TextField, InputAdornment, Chip } from '@mui/material'
import { styled } from '@mui/material/styles'

// eslint-disable-next-line @emotion/no-vanilla
import { css, cx } from '@emotion/css'
import { motion } from 'framer-motion'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { IoPersonCircle } from 'react-icons/io5'
import {
  MdArrowBack,
  MdArrowForward,
  MdRefresh,
  MdSearch
} from 'react-icons/md'

const CssTextField = styled(TextField, {
  shouldForwardProp: props => props !== 'focusColor'
})(p => ({
  // input label when focused
  '& label.Mui-focused': {
    color: p.focusColor
  },
  // focused color for input with variant='standard'
  '& .MuiInput-underline:after': {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='filled'
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='outlined'
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: p.focusColor
    }
  }
}))

const Navigation = () => {
  const [hover, setHover] = useState('')

  return (
    <div>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        style={{
          borderBottom: '1px solid #DBDCDD',
          paddingTop: 2,
          paddingBottom: 2
        }}
      >
        <MdArrowBack
          size="1.4em"
          style={{ color: '#BABCBE', marginLeft: 10, marginRight: 5 }}
        />
        <MdArrowForward
          size="1.4em"
          style={{ color: '#BABCBE', marginLeft: 5, marginRight: 5 }}
        />
        <MdRefresh
          size="1.4em"
          style={{ color: '#5F6368', marginLeft: 5, marginRight: 5 }}
        />
        <CssTextField
          focusColor={'#4285F4'}
          placeholder="Pesquisar no Google ou digitar URL"
          InputProps={{
            sx: { borderRadius: 50, height: 25 },
            startAdornment: (
              <InputAdornment position="start">
                <MdSearch
                  size="1.1em"
                  style={{
                    color: '#9EA2A4',
                    marginLeft: 5,
                    marginRight: 5
                  }}
                />
              </InputAdornment>
            )
          }}
          style={{ flexGrow: 1 }}
          variant="outlined"
        />
        <Chip
          icon={
            <IoPersonCircle
              size="2em"
              style={{
                color: '#5F6368'
              }}
            />
          }
          label="Visitante"
          variant="outlined"
          style={{ marginLeft: 5 }}
        />
        <HiOutlineDotsVertical
          size="2.1em"
          style={{
            color: '#5F6368',
            paddingLeft: 8,
            paddingRight: 8
          }}
        />
      </Grid>
    </div>
  )
}

export default Navigation
