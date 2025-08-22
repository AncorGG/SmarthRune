import Footer from "../../components/footer/Footer";
import HeaderButtons from "../../components/header/HeaderButtons";
import { useAuth } from "../../context/AuthContext";
import './SettingsPage.css';
function SettingsPage() {

    const { logout } = useAuth();

    return (
        <div className="set-container">
            <HeaderButtons />
            <div className="main-content">
                <div className="set-logout" onClick={logout}>
                    <p>Log Out</p>
                </div>
            </div>
            <Footer activeIcon={"settings"} />
        </div>
    )
}

export default SettingsPage;