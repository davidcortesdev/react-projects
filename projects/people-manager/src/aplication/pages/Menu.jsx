import { DatosMenu } from '../ui/components/DatosMenu'
import { HeroeMenu } from '../ui/components/HeroeMenu'
import { LateralMenu } from '../ui/components/LateralMenu'
import './Menu.css'


export function Menu() {

  return (
    <div className="container-menu">
      <DatosMenu />
      <LateralMenu />
      <HeroeMenu />
    </div>
  )
}