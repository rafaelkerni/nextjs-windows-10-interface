import { Dispatch } from 'redux'

import {
  stateUpdate,
  snackUpdate,
  dataReset
} from '@/store/actions/data/index'

function useRedux(name: string, dispatch: Dispatch) {
  const setState = (state: any) => dispatch(stateUpdate(name, state))
  const setSnack = (state: any) => dispatch(snackUpdate(state))
  const resetData = () => dispatch(dataReset())

  return { setState, setSnack, resetData }
}

export default useRedux
