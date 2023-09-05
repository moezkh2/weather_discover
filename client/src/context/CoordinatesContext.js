import { createContext, useState } from "react";

const CoordinatesContext = createContext()

const ContextProvider = ({ children }) => {

    const [textTofetch, setTextTofetch] = useState("");
    const [inputState, setInputState] = useState(" New York");
    const [showSeggestions, setShowSeggestions] = useState(false);
    const [seggestionsResult, setSeggestionsResult] = useState([])
    const [coordinates, setCoordinates] = useState({ lat:"40.730610",lng:"-73.935242"})
    const [weatherData, setWeatherData] = useState([])

    const sideScroll = (
        element,
        speed,
        distance,
        step
    ) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.current.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
        }, speed);
    };

    return (
        <CoordinatesContext.Provider value={{
            coordinates,
            setCoordinates,
            textTofetch,
            setTextTofetch,
            inputState,
            setInputState,
            showSeggestions,
            setShowSeggestions,
            seggestionsResult,
            setSeggestionsResult,
            weatherData,
            setWeatherData,
            sideScroll
        }}>
            {children}
        </CoordinatesContext.Provider>
    );
}

export { CoordinatesContext, ContextProvider }