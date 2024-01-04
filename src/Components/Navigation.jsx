import { Menu } from "lucide-react"
import { useState } from "react"

import { Button } from "."
import { Link } from "react-router-dom"

const navs = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Market Place",
        link: "/"
    },
    {
        name: "Contact Us",
        link: "/"
    },

    {
        name: "Log In",
        link: "/"
    },
]

const Navigation = () => {

    const [ menu, setMenu ] = useState(false);

    return (
        <nav className="border-b">
            <div className="flex justify-between items-center h-14 px-14 ">
                <div className="logo">CHATMAN</div>
                <div className={`"nav-links flex items-center gap-6 max-[790px]:block max-[790px]:fixed top-0 ${menu ? 'left-0' : '-left-[200%]'} transition-all duration-300 max-[790px]:bg-white max-[790px]:p-6 max-[790px]:h-screen `}>
                    {navs.map( item => 
                        <Link key={item.name} to={item.link}>
                            <div className="max-[790px]:py-2 max-[790px]:px-6 max-[790px]:my-3 max-[790px]:text-xl">
                                <span>{item.name}</span>
                            </div>
                        </Link>
                    )}

                    <Link to="/signup">
                        <Button.Md className="bg-red-500 text-white px-6 py-2 max-[790px]:w-full">
                            Join Us
                        </Button.Md>
                    </Link>
                </div>
                <div onClick={() => setMenu(!menu)} className="min-[790px]:hidden flex items-center justify-center">
                    <Menu />
                </div>
            </div>
        </nav>
    )
}

export default Navigation