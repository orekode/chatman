import { Outlet } from "react-router-dom"
import { Navigation } from "@/Components"

const GeneralLayout = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
    </div>
  )
}

export default GeneralLayout