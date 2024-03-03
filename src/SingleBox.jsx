import "./SingleBox.css";
import { useState, useContext } from "react";
import { TotalBoxCount } from "./App";

export default function SingleBox(props) {
    const [selectBoxClassName, setSelectBoxClassName] = useState(
        props.initialState
    );
    const [totalBlackBox, setTotalBlackBox] = useContext(TotalBoxCount);
    
    const selectBox = () => {
        if (selectBoxClassName === "singleBox") {
            setSelectBoxClassName("singleBox selectBox");
            setTotalBlackBox(totalBlackBox + 1);
        } else {
            setSelectBoxClassName("singleBox");
            setTotalBlackBox(totalBlackBox - 1);
        }
    };

    return (
        <div className={selectBoxClassName} onClick={() => selectBox()}></div>
    );
}
