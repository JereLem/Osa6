import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './utils/store'


axios.interceptors.response.use((response) => response.data,
  (error) => Promise.reject(error?.response?.data?.error)
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)