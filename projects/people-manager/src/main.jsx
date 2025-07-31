import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'



createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <PersistGate loading={null} persistor={persistor}> {/* Esto faltaba */}
          <AppRouter />
        </PersistGate>
      </BrowserRouter>
    </Provider>

)
