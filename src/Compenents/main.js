import Lightfall from './Lightfall';
import Cards from './Cards';
import "../App.css"
import { useState } from 'react'
import moment from 'moment';

export default function Main() {
    const [finalCity, setFinalCity] = useState('Sohag');
    const [city, setCity] = useState('');

    function handleSearch() {
        if (!city.trim()) return; // منع البحث الفارغ
        setFinalCity(city);
        setCity('');
    }

let src;
function updateBackground() {

    const currentHour = moment().hour();
    src = "";

    if (currentHour >= 5 && currentHour < 12) {
        src = "https://i.pinimg.com/736x/3b/a6/40/3ba6406bf527681360fe998cb90f470a.jpg"; // الصباح / النهار
    } else if (currentHour >= 12 && currentHour < 17) {
        src = "https://i.pinimg.com/1200x/c8/3e/d0/c83ed0e80840aa35ff073cbcc2205d98.jpg"; // الظهر
    } else if (currentHour >= 17 && currentHour < 20) {
        src = "https://i.pinimg.com/736x/39/26/d2/3926d217236957a95d9c8519db93a421.jpg"; // الغروب
    } else {
        src = "https://i.pinimg.com/736x/a0/20/e1/a020e141b99139a6730d7fb018dda96b.jpg"; // الليل
    }

}

updateBackground();

setInterval(updateBackground, 60000);

    return (
        <div className="main-container" style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
            
            {/* 1. خلفية Lightfall قائمة بذاتها في الخلفية */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
                <img src={src} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* 2. عناصر الواجهة تطفو فوق الخلفية بزاوية zIndex أعلى */}
            <div style={{ position: 'relative', zIndex: 1, paddingBottom: '40px' }}>
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
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // البحث عند الضغط على Enter
                            type="text" 
                            placeholder="Enter city name..." 
                            className="city-input" 
                            style={{ 
                                flex: 1,
                                backgroundColor: 'transparent',
                                border: 'none',
                                outline: 'none',
                                padding: '10px',
                                color: 'white',
                                fontSize: '16px',
                                direction: 'ltr' // تعديل الاتجاه لتطابق النص الإنجليزي
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
                    <Cards style={{ border: "1px solid white", borderRadius: "5px" }} City={finalCity} />
                </div>
            </div>

        </div>
    );
}