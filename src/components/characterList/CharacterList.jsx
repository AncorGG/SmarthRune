import { useNavigate } from 'react-router-dom';
import './CharacterList.css';

function CharacterList() {
    const navigate = useNavigate();

    const goto = (url) => {
        navigate(url);
    };

    return (
        <div className='character-list-wrapper'>

            <div className='character-list-container'>
                <div className="character-list-item" onClick={() => goto('/character/1')}>
                    <div className="character-image">
                        <img src="/images/pfp.png" alt="Character Image" />
                    </div>
                    <div className="character-info">
                        <h3 className="character-name">Character Name</h3>
                        <p className="character-campaign">Mazmorreos Casuales</p>
                    </div>
                    <p className='character-level'>Lvl 7</p>
                </div>

                <hr className='character-hr' />

                <div className="character-list-item" onClick={() => goto('/character/2')}>
                    <div className="character-image">
                        <img src="/images/pfp.png" alt="Character Image" />
                    </div>
                    <div className="character-info">
                        <h3 className="character-name">Character Name asdasd asd</h3>
                        <p className="character-campaign">Mazmorreos Casuales</p>
                    </div>
                    <p className='character-level'>Lvl 7</p>
                </div>

                <hr className='character-hr' />

                <div className="character-list-item" onClick={() => goto('/character/3')}>
                    <div className="character-image">
                        <img src="/images/pfp.png" alt="Character Image" />
                    </div>
                    <div className="character-info">
                        <h3 className="character-name">Character Name</h3>
                        <p className="character-campaign">Mazmorreos Casuales</p>
                    </div>
                    <p className='character-level'>Lvl 7</p>
                </div>

                <hr className='character-hr' />

                <div className="character-list-item" onClick={() => goto('/character/4')}>
                    <div className="character-image">
                        <img src="/images/pfp.png" alt="Character Image" />
                    </div>
                    <div className="character-info">
                        <h3 className="character-name">Character Name</h3>
                        <p className="character-campaign">Mazmorreos Casuales</p>
                    </div>
                    <p className='character-level'>Lvl 7</p>
                </div>

                <hr className='character-hr' />

                <div className="character-list-item" onClick={() => goto('/character/5')}>
                    <div className="character-image">
                        <img src="/images/pfp.png" alt="Character Image" />
                    </div>
                    <div className="character-info">
                        <h3 className="character-name">Character Name</h3>
                        <p className="character-campaign">Mazmorreos Casuales</p>
                    </div>
                    <p className='character-level'>Lvl 7</p>
                </div>
            </div>
        </div>

    )
}

export default CharacterList;