import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating, {RatingValueType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./Components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./Components/OnOff/UncontrolledOnOff";


function App() {
    console.log("App render")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)}}/>
            {/*<OnOff on={switchOn}*/}
            {/*       onChange={ (on) => {setSwitchOn(on)}}/>*/}

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle render")
    return <h1>{props.title}</h1>
}

export default App;
