import './Footer.css'
import { FaDice, FaUser, FaCog } from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai";
import { BsChatDotsFill } from "react-icons/bs";
import { Navigate, useNavigate } from 'react-router-dom';


function Footer({ activeIcon }) {

    const navigate = useNavigate();

    const goto = (url) => {
        navigate(url);
    };

    return (
        <footer className="footer-container">
            <div className="footer-icon-wrapper">
                <div className={`footer-icon-item ${activeIcon === 'roll' ? 'active' : ''}`}
                    onClick={() => goto('/roll')}>
                    <FaDice size={35} />
                </div>
                <div className={`footer-icon-item ${activeIcon === 'chat' ? 'active' : ''}`}
                    onClick={() => goto('/chat')}>
                    <BsChatDotsFill size={35} />
                </div>
                <div className={`footer-icon-item ${activeIcon === 'home' ? 'active' : ''}`}
                    onClick={() => goto('/')}>
                    <AiFillHome size={35} />
                </div>
                <div className={`footer-icon-item ${activeIcon === 'user' ? 'active' : ''}`}
                    onClick={() => goto('/user')}>
                    <FaUser size={35} />
                </div>
                <div className={`footer-icon-item ${activeIcon === 'settings' ? 'active' : ''}`}
                    onClick={() => goto('/settings')}>
                    <FaCog size={35} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;