import { Dispatch } from 'redux'

import {
  stateUpdate,
  snackUpdate,
  dataReset
} from '@/store/actions/data/index'

function useRedux(dispatch: Dispatch) {
  const setState = (name: string, state: any) =>
    dispatch(stateUpdate(name, state))
  const setSnack = (state: any) => dispatch(snackUpdate(state))
  const resetData = () => dispatch(dataReset())

  return { setState, setSnack, resetData }
}

export default useRedux
