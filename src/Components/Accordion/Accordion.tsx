import React from "react";
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";


function Accordion() {
    console.log("Accordion render")
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}

export default Accordion;