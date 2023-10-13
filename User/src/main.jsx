import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom'
import { Users, Login, AddUser,EditUser } from "./Components/index.js";


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App/>}>
      <Route path='' element={<Login/>} />
      <Route path='users' element={<Users/>} />
      <Route path='adduser' element={<AddUser/>} />
      <Route path='edit/:id' element={<EditUser/>} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
