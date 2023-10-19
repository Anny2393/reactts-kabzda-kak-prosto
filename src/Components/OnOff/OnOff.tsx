import React from "react";

export function OnOff() {
    return (
        <div>
            <div className="onoff">
                <button className="on">On</button>
                <button className="off">Off</button>
                <div className="circle"></div>
            </div>

        </div>
    )
}

const onButton = document.querySelector(".on");
const offButton = document.querySelector(".off");
const circle = document.querySelector(".circle");

onButton.addEventListener("click", () => {
    onButton.style.backgroundColor = "#4CAF50";
    offButton.style.backgroundColor = "";
    circle.style.backgroundColor = "#4CAF50";
});

offButton.addEventListener("click", () => {
    offButton.style.backgroundColor = "#FF5733";
    onButton.style.backgroundColor = "";
    circle.style.backgroundColor = "#FF5733";
});