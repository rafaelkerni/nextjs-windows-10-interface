import {
  DATA_RESET,
  TOKEN_UPDATE,
  STATE_UPDATE,
  SNACK_UPDATE
} from '..'

export const tokenUpdate = (token: string) => ({
  type: TOKEN_UPDATE,
  payload: token
})

export const stateUpdate = (name: string, state: any) => ({
  type: STATE_UPDATE,
  name,
  payload: state
})

export const snackUpdate = (state: any) => ({
  type: SNACK_UPDATE,
  payload: state
})

export const dataReset = () => ({
  type: DATA_RESET
})
