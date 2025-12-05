import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function LayoutInterno() {
  return (
    <div className="layout-interno">
      <Sidebar />
      <div className="conteudo-principal">
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutInterno