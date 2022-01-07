import { HYDRATE } from 'next-redux-wrapper'

import {
  TOKEN_UPDATE,
  DATA_RESET,
  STATE_UPDATE,
  SNACK_UPDATE
} from '@/store/actions'

const initialState = {
  snack: { show: false, text: '' },
  startbutton: { open: false }
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.data }
    case SNACK_UPDATE:
      return { ...state, snack: action.payload }
    case STATE_UPDATE:
      return { ...state, [action.name]: action.payload }
    case TOKEN_UPDATE:
      return { ...state, token: action.payload }
    case DATA_RESET:
      return initialState
    default:
      return state
  }
}

export default reducer
