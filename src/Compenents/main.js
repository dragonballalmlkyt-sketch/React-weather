import Lightfall from './Lightfall';
import Cards from './Cards';
import "../App.css"
import {useState} from 'react'

export default function Main() {

    const [finalCity, setFinalCity] = useState('Sohag');
    const [city, setCity] = useState('');

    function handleSearch() {
        setFinalCity(city);
        setCity('');
    }


    return (
        <div className="main-container">
            <Lightfall>
                <div className="HeaderContainer">

                        <div className="header" style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '30px',
                        padding: '5px 8px 5px 15px',
                        maxWidth: '400px',
                        width: '90%',
                        margin: '20px auto',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)'
                    }}>
                        <input 
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            type="text" 
                            placeholder= "Enter city name..." 
                            className="city-input" 
                            style={{ 
                                flex: 1,
                                backgroundColor: 'transparent',
                                border: 'none',
                                outline: 'none',
                                padding: '10px',
                                color: 'white',
                                fontSize: '16px',
                                direction: 'rtl'
                            }} 
                        />
                        <button 
                            onClick={handleSearch}
                            className="search-button"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                color: 'white',
                                padding: '8px 20px',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                fontSize: '15px',
                                fontWeight: 'bold',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(5px)'
                            }}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="cards-container">
                    <Cards style={{border: "1px solid white",  borderRadius: "5px" }} City={finalCity} />
                    
                </div>
                    
            </Lightfall>
        </div>
    );
}