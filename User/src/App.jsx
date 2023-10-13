import React, { useState } from 'react'
import { Login } from "./Components/index";
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App
