import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='md:max-w-screen-2xl mx-auto'>
     <RouterProvider router={router} />
     </div>
  </React.StrictMode>,
)
