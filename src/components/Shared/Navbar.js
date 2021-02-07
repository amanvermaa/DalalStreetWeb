import react, { useEffect, useState } from 'react';
import './Navbar.css';
import { SiElasticstack } from 'react-icons/si';
import { IoMdMenu } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { BsQuestion } from 'react-icons/bs';
import { Link } from 'react-router-dom';




export default function Navbar() {
    const [menuClick, setMenuClick] = useState(false);
    const [showMenuButton, setMenuButton] = useState(false);

    const closeMobileMenu = () => { setMenuClick(false) };
    const handleMenuClick = () => { setMenuClick(!menuClick) };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setMenuButton(true);
        }
        else {
            setMenuButton(false);
        }
    }

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return () => {
            window.removeEventListener('resize', showButton);
        }
    }, []);

    return (
        <div className="navbar">
            <div className="container">
                <Link to="./" className="menu-icon">
                    <SiElasticstack className="menu-logo mr-2" onClick={closeMobileMenu} />
                    DSL
                </Link>
                <div className="menu-icon" onClick={handleMenuClick}>
                    {
                        showMenuButton ?
                            menuClick ? <AiOutlineClose className="menu-logo" />
                                : <IoMdMenu className="menu-logo" />
                            : null
                    }
                </div>
                {/* <a className="menu-icon">
                    {showMenuButton ?
                        (menuClick ?
                            <AiOutlineClose className="menu-logo" onClick={closeMobileMenu} />
                            : <IoMdMenu className="menu-logo" onClick={openMenu} />)
                        : renderOtherTabs(false)
                    }
                </a> */}
                <ul className={menuClick ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        Help
                        <BsQuestion className="pl-2" />
                    </li>
                </ul>
            </div>
        </div >
    );
}