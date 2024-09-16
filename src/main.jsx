
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DigitalClock from './components/DigitalClock.jsx'
import '/node_modules/bootstrap/dist/css/bootstrap.css'


createRoot(document.getElementById('root')).render(
   <>
    <App />
    <DigitalClock/>
    </>

)
