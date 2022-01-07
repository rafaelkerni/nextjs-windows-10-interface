import { createWrapper, HYDRATE } from 'next-redux-wrapper'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import expireReducer from 'redux-persist-expire'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import storage from 'redux-persist/lib/storage/session'
import thunkMiddleware from 'redux-thunk'

import data from '@/store/reducers/data'

//COMBINING ALL REDUCERS
const combinedReducer = combineReducers({
  data
  // OTHER REDUCERS WILL BE ADDED HERE
})

// BINDING MIDDLEWARE
const bindMiddleware = middleware => {
  return composeWithDevTools(applyMiddleware(...middleware))
}

const makeStore = ({ isServer }) => {
  if (isServer) {
    //If it's on server side, create a store
    return createStore(
      combinedReducer,
      bindMiddleware([thunkMiddleware])
    )
  } else {
    const persistConfig = {
      key: 'nextJSWindows',
      whitelist: ['data'], // only data will be persisted, add other reducers if needed
      storage,
      transforms: [
        encryptTransform({
          secretKey: '89jLGIWCNH9:Da@0021l1x*!cURTa)pik)sO',
          onError: function (error) {
            console.log(
              'Ocorreu um erro ao salvar os dados, veja o erro abaixo:'
            )
            console.log(error)
          }
        }),
        // Create a transformer by passing the reducer key and configuration. Values
        // shown below are the available configurations with default values
        expireReducer('preference', {
          // (Optional) Key to be used for the time relative to which store is to be expired
          persistedAtKey: '__persisted_at',
          // (Required) Seconds after which store will be expired
          expireSeconds: 1800,
          // (Optional) State to be used for resetting e.g. provide initial reducer state
          expiredState: {}
        })
      ] // if needed, use a safer storage*/
    }

    const persistedReducer = persistReducer(
      persistConfig,
      combinedReducer
    ) // Create a new reducer with our existing reducer

    const store = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
    ) // Creating the store again

    store.__persistor = persistStore(store) // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store
  }
}

// Export the wrapper & wrap the pages/_app.js with this wrapper only
export const wrapper = createWrapper(makeStore)
