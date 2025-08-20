import './Header.css';
import { RiSettings2Line } from "react-icons/ri";

function Header() {
    return (
        <div className="header">
            <div className="user-image">
                <img src="/images/pfp.png" className="user-profile-img" alt="Profile Picture" />
            </div>
            <div className="user-welcome">
                <h2>Welcome</h2>
                <h1>Ancor</h1>
            </div>
            <div className="user-settings">
                <RiSettings2Line size={40} />
            </div>
        </div>
    )
}

export default Header;