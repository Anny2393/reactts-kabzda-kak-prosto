import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion render")

    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        );
    }

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


export default Accordion;