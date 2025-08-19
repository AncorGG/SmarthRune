import Footer from "../../components/footer/Footer";
import './CharacterDetail.css';

function CharacterDetail() {
    return (
        <div className="character-detail">
            <div className="main-content">

                <div className="c-header">
                    <div className="c-back-button"></div>
                    <div className="c-bizzum"></div>
                </div>

                <div className="c-image">
                    <img src="/images/pfp.pn" alt="Profile Picture" />
                </div>

                <div className="c-info">
                    <div className="c-info-top">
                        <h1 className="c-name">Jack O' Blivion</h1>
                        <h2 className="c-campaign">Mazmorreos casuales</h2>
                    </div>
                </div>

            </div>
            <Footer activeIcon={"user"} />
        </div>
    );
}
export default CharacterDetail;