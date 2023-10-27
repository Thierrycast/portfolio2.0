import './styles.css'
import { Dispatch, SetStateAction } from 'react';

interface SidebarProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    isOpen: boolean
}

export default function ButtonMenu(props : SidebarProps) {
    const {isOpen, setIsOpen} = props

    const showSidebar = () => setIsOpen(!isOpen)

    

    return(
       <>
            <input id="menu-hamburguer" type="checkbox" checked={isOpen} readOnly />

            <label onClick={showSidebar} htmlFor="menu-hamburguer">
                <div className="menu">
                    <span className="hamburguer"></span>
                </div>
            </label>
        </>
    )
}