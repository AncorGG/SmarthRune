import { Progress } from "antd";
import Footer from "../../components/footer/Footer";
import './CharacterDetail.css';
import { IoIosArrowBack } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";


function CharacterDetail() {
    return (
        <div className="character-detail">
            <div className="main-content">

                <div className="c-header">
                    <div className="c-back-button"><IoIosArrowBack size={30} /></div>
                    <div className="c-bizzum"><MdAttachMoney size={30} /></div>
                </div>

                <div className="c-image">
                    <img src="/images/pfp.png" alt="Profile Picture" />
                </div>

                <div className="c-info">
                    <h1 className="c-name">Jack O' Blivion</h1>
                    <h2 className="c-campaign">Mazmorreos casuales</h2>
                    <hr className="c-hr" />
                    <div className="c-info-bot">
                        <div>
                            <IoLocationOutline size={25} color="#D6202E" />
                            <p>Contraviento, Livadi</p>
                        </div>
                        <div>
                            <FiSun size={25} color="#D6202E" />
                            <p>AE 24</p>
                        </div>
                    </div>
                </div>

                <div className="c-level">
                    <div className="c-level-info">
                        <h3>Level 7 | Nihility Cleric</h3>
                        <h3>67%</h3>
                        <div className="progress-container">
                            <Progress
                                percent={67}
                                showInfo={false}
                                strokeColor={{
                                    '0%': '#f63c3c',
                                    '50%': '#ff5e9e',
                                }}
                                size={[350, 20]}
                                trailColor="#e7e7e7"
                            />
                        </div>
                    </div>
                </div>

                <div className="c-stats">
                    <hr className="c-vr" />
                    <div className="c-stat">
                        <h3>HP</h3>
                        <p>26</p>
                    </div>
                    <hr className="c-vr" />
                    <div className="c-stat">
                        <h3>Speed</h3>
                        <p>30</p>
                    </div>
                    <hr className="c-vr" />
                    <div className="c-stat">
                        <h3>AC</h3>
                        <p>14</p>
                    </div>
                </div>

            </div>
            <Footer activeIcon={"user"} />
        </div>
    );
}
export default CharacterDetail;