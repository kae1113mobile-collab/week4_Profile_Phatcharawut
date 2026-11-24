import {HomePage} from './pages/home'
import { Adminpage } from './pages/admin'
import { Adoutpage } from './pages/Adout'
import { Contactpage } from './pages/Contact'


const router={
  '/':HomePage,
  '/admin':Adminpage,
    '/Adout':Contactpage,
  '/Contact':Adoutpage,
}

function render(){
   
  const path = location.hash.slice(1) || '/'
  const page = router[path] || HomePage
  document.querySelector('#app').innerHTML=page()

}
window.addEventListener('hashchange',render)
render()