import Btn from './Btn';
import {  HiOutlineMoon } from 'react-icons/hi';
const icon = <HiOutlineMoon size={18} />;

const Header = () => {
    function onclick() {
        const Hbtn = document.querySelector('.header-btn');
            Hbtn.classList.toggle('active');
            if (Hbtn.classList.contains('active')) {
            localStorage.setItem('data-theme', 'dark');
           document.documentElement.setAttribute('data-theme', localStorage.getItem('data-theme'))
            } else {
            localStorage.setItem('data-theme', 'light');
            document.documentElement.setAttribute('data-theme', localStorage.getItem('data-theme'))
            }
        }
        
    return (
        <header className="header">
            <div className="wrapper flex f-center-y f-btw">
                <h1>
                    Where in the world?
                </h1>
                <Btn text={icon} altText="Dark Mode" className="header-btn" onclick={onclick} />
                </div>
           
        </header>
    )
}

export default Header
