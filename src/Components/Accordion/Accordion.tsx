import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    setCollapsed: (value: boolean) => void;
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.setCollapsed} collapsed={props.collapsed} />
            {!props.collapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string;
    onClick: (value: boolean) => void;
    collapsed: boolean;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onClick(!props.collapsed)}>---{props.title}---</h3>
    );
}

function AccordionBody() {
    return (
        <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    );
}

export default Accordion;
