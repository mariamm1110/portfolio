import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom"
import { Menu } from "./Menu"
import { Card4 } from "../Card4"
import { Home } from "./menu-components/Home"
import { About } from "./menu-components/About"
import { Portfolio } from "./menu-components/portfolio/Portfolio"
import { Skills } from "./menu-components/skills/Skills"


export const RouterR = () => {
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/card1"  element={<About/>}></Route>
                
                <Route path="/card2" element={<Portfolio/>}></Route>
                <Route path="/card3" element={<Skills/>}></Route>
                <Route path="/card4" element={<Card4/>}></Route>

                
            </Routes>
        </BrowserRouter>
    )
}