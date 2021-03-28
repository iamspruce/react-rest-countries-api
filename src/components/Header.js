import Btn from './Btn';
import { WiMoonAltWaningGibbous6 } from 'react-icons/wi';
const icon = <WiMoonAltWaningGibbous6 size={28} />;

const Header = () => {
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
