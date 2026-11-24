import {HomePage} from './pages/home'
import { Adminpage } from './pages/admin'


const router={
  '/':HomePage,
  '/admin':Adminpage,
}

function render(){
  const path = location.hash.slice(1) || '/'
  const page = router[path] || HomePage
  document.querySelector('#app').innerHTML=page()
}
window.addEventListener('hashchange',render)
render()