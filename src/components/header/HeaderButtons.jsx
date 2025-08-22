import { useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import "./HeaderButtons.css"

function HeaderButtons() {
    const navigate = useNavigate();
    const goto = (url) => {
        navigate(url);
    };

    return (
        <div className="c-header">
            <div className="c-back-button" onClick={() => goto("/")}><IoIosArrowBack size={30} /></div>
            <div className="c-bizzum"><MdAttachMoney size={30} /></div>
        </div>
    )
}

export default HeaderButtons