import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
// import Card from '../UI/Card';
const Component=(prop)=>{
  const [title,setTitle]=useState(prop.title);
  console.log("clicked");

const clickhandler=()=>{
  setTitle("Water"); 
  console.log(title);
  };
 
    return (
      <div className="expense-item" >
  
        {/* <ExpenseDate></ExpenseDate> */}
        {/*mistake:  .toISOString() it is important to convert a number into a string */}
        {/* it is important to convert a number into a string */}
        <ExpenseDate date={prop.date}/>
        <div className="expense-item__description">
          <h2 >{title}</h2>
          <div className="expense-item__price">{prop.amount}</div>
<button onClick={clickhandler}>Click</button>

        </div>
      </div>
      );
}
export default Component;

//before 1
// export default function Component(){
//     const expensedate=new Date(2023,7,12);
//     const carInsurance="Car Insurance";
//     const expense="$300";
//     return (
//       <div className="expense-item" >
//         <div>{expensedate.toISOString()}</div>
//         {/* it is important to convert a number into a string */}
//         <div className="expense-item__description">
//           <h2 >{carInsurance}</h2>
//           <div className="expense-item__price">{expense}</div>
//         </div>
//       </div>);
// }
 //day1
//  import React from 'react';
// export default function Component(prop){
   
//     return (
//       <div className="expense-item" >
//         <div>{prop.date.toISOString()}</div>
//         {/* it is important to convert a number into a string */}
//         <div className="expense-item__description">
//           <h2 >{prop.title}</h2>
//           <div className="expense-item__price">{prop.amount}</div>
//         </div>
//       </div>);
// }
//2
//   {/*u can use {title,date,amount} instead of prop and to access it use {date} */}
//   const month=prop.date.toLocaleString('en-US',{month:'long'});
//   const day=prop.date.toLocaleString('en-US',{day:'2-digit'});
//   const year=prop.date.getFullYear();
//    return (
//      <div className="expense-item" >
//        <div>
//        <div>{month}</div>
//        <div>{day}</div>
//        <div>{year}</div>
//        </div>
//        {/*mistake:  .toISOString() it is important to convert a number into a string */}
//        {/* it is important to convert a number into a string */}
//        <div className="expense-item__description">
//          <h2 >{prop.title}</h2>
//          <div className="expense-item__price">{prop.amount}</div>
//        </div>
//      </div>);
// }
