import React from 'react';
import './App.css';

function hello() {
    alert('Hi, Hanna!')
}

//hello();

function App() {
    console.log("App render")
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle render")
    return <>This is APP component</>
}

function Rating() {
    console.log("Rating render")
    return (
        <div>
            <Star/>
        </div>
    );
}

function Accordion() {
    console.log("Accordion render")
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}

function AccordionTitle() {
    console.log("AccordionTitle render")
    return (
        <h3>Меню</h3>
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

function Star() {
    console.log('Star render')
    return (
        <div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>
    );
}

export default App;
