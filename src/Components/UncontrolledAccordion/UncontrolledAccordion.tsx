import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}


function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);


    console.log("UncontrolledAccordion render")
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>
        { !collapsed && <AccordionBody/> }
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle render")
    return (
        <h3>---{props.title}---</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody render")
    return (
        <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    )
}


export default UncontrolledAccordion;