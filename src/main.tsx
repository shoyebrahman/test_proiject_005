import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './redux/store'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import { ThemeProvider } from './provider/Themprovider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ThemeProvider>
     <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
   </ThemeProvider>
  </StrictMode>,
)
