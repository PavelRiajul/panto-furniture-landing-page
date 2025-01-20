
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

import 'sweetalert2/dist/sweetalert2.min.css'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <App />
 </BrowserRouter>
   
 
)
