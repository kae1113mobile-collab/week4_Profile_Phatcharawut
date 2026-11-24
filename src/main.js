import {HomePage} from './pages/home'
import { Adminpage } from './pages/admin'
import { Aboutpage } from './pages/Adout'
import { Contactpage } from './pages/Contact'


const router={
  '/':HomePage,
  '/About':Aboutpage,
  '/Contact':Contactpage,
  '/admin':Adminpage,
}

function render(){
  const path = location.hash.slice(1) || '/'
  const page = router[path] || HomePage
  document.querySelector('#app').innerHTML=page()
}
window.addEventListener('hashchange',render)
render()