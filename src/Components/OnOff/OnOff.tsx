import React, {useState} from "react";

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    console.log("on: " + props.on)

    const onButton = {
        width: "50px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white",
    }
    const offButton = {
        width: "50px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.on ? "green" : "red",
    }

    return (
        <div>
            <div style={onButton} onClick={() => { props.onChange(true) }}>On</div>
            <div style={offButton} onClick={() => { props.onChange(false) }}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}



