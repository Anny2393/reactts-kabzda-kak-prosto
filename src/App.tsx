import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";


function hello() {
    alert('Hi, Hanna!')
}

//hello();

function App() {
    console.log("App render")
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friens"}/>
            Article 1
            <Rating value = {3}/>
            <Accordion/>
            <Accordion/>
            Article 2
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
        </div>
    );
}

function PageTitle(props:any) {
    console.log("AppTitle render")
    return <h1>{props.title}</h1>
}

export default App;
