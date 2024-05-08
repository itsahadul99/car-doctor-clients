
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </div>
)
