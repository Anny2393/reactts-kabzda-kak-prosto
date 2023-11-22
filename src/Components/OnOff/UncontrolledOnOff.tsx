import React, {useState} from "react";

type UncontrolledOnOffPropsType = {
   // on: boolean
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {

    let [on, setOn] = useState(false);

    const onButton = {
        width: "50px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
    }
    const offButton = {
        width: "50px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        padding: "2px",
        backgroundColor: on ? "white" : "red",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "green" : "red",
    }

    return (
        <div>
           <div style={onButton} onClick={() => {setOn(true)}}>On</div>
           <div style={offButton} onClick={() => {setOn(false)}}>Off</div>
           <div style={indicatorStyle}></div>
        </div>
    )
}



