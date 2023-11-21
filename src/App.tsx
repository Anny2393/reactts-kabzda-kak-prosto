import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./Components/Rating/UncontrolledRating";



function App() {
    console.log("App render")
    return (
        <div className={"App"}>

            <OnOff />

            <UncontrolledAccordion titleValue={"Menu"} />

            <UncontrolledRating />


            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}

            {/*<OnOff />*/}
            {/*<OnOff />*/}

            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
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
