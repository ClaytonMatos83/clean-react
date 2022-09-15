import React from "react"
import {BrowserRouter, } from 'react-router-dom'
import { Login } from "@/presentation/pages";
import '@/presentation/styles/global.scss'


const Router: React.FC = () => {
    return (
        <BrowserRouter>
          
            <Login/>
          
        </BrowserRouter>
      )
  }
  
      export default Router
