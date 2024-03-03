import { createContext, useState } from "react";
import SingleBox from "./SingleBox";
import "./App.css";

export const TotalBoxCount = createContext();
function App() {
    const [totalBlackBox, setTotalBlackBox] = useState(0);
    
    return (
        <TotalBoxCount.Provider value={[totalBlackBox, setTotalBlackBox]}>
            <div>Count: {totalBlackBox}</div>
            <div className="boxRow">
                <SingleBox initialState="singleBox" />
                <SingleBox initialState="singleBox" />
            </div>
            <div className="boxRow">
                <SingleBox initialState="singleBox" />
                <SingleBox initialState="singleBox" />
            </div>
        </TotalBoxCount.Provider>
    );
}

export default App;
