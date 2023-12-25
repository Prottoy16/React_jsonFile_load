import ReactDOM from "React-dom/client";
import React from "react";
import Card from "./components/card";
import Data from './data.json';


let items=[];

items= Data.map((item)=> <Card Title={item.title} description={item.disc} />)

function App(){
    return <div className="Container">
          <h1 className="CardsTag">Cards</h1>

             {items};



          {/* <Card Title={Data[0].title} description={Data[0].disc} />
          <Card Title={Data[1].title} description={Data[1].disc} />
          <Card Title={Data[2].title} description={Data[2].disc} /> */}
    </div>
}
export default App;