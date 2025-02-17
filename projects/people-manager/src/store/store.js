import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { appSlice } from './app/appSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { misionesSlice } from './misiones/misionesSlice'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  app: appSlice.reducer,
  misiones: misionesSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignoramos estas acciones internas de redux-persist para evitar warnings
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

