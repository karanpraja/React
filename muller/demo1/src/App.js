// import* as random from "./util";
// console.log(random.default);
import {apikey,solution as soln} from "./util";//solution as soln //name changed!!
import { useState } from "react";
import "./styles.css";
// console.log(apikey,soln);
// if(19===19){
//   console.log("you are allowed!")
// };
// function greeting(message, namaskar="namaste")
// {
//  
//   //return statement will no work if we call it directly it should be assigned 
//   return (message,namaskar);//return statement could return only one value at a time
// }
// const output=greeting("Hare","hare");
//function overloading is working here
// console.log(output);
// const user={
//   age:12,
//   name:"Rohan",
//   greetings(){
//     console.log("inside "+this.age)
//     console.log("Namaste everyone!");
//   }
// }

// console.log(user.age);
// console.log(user.name);
// user.greetings();
// console.log(user);

// class Student{
//   constructor(id,rollno){
//     this.id=id,
//     this.rollno=rollno;
//   }
//   intro (){
//     console.log("I am "+this.rollno+" with id "+this.id+".");
//   }
// }
// const student1=new Student("IstYear","2022UIC4525");
// console.log(student1.id);
// console.log(student1.rollno);
// console.log(student1.intro());

// let modes=["sattva","rajas","tamas"];
// modes.push("IwillWork!!")
// const index=modes.findIndex((item)=>item==="sattva");//one way
// const index2=modes.findIndex((item)=>{
//   return item==="rajas";//another way!!
// })
// const newmode=modes.map((item)=>item+"!!!")
// // const newmode=modes.map((item)=>{
// //   return item+"!!";//another way
// // })
// console.log(newmode);
// console.log("Index is "+index);
// console.log("Index2 is "+index2);




const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "unfficial web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React native (build native mobile apps with React)"
  ]
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            Extra Resources
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
