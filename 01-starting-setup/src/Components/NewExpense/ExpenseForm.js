import React, {useState} from "react";
// import "./ExpenseForm.css"
import "./NewExpense.css"
const ExpenseForm=()=>{
    const [EnteredTitle,setEnteredTitle]=useState("")//THIS IS ONE WAY!!
    const [EnteredAmount,setEnteredAmount]=useState("")
    const [EnteredDate,setEnteredDate]=useState("")
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)
        // console.log(event.target.value)
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
        // console.log(event.target.value)

    }
    const dateChangeHandler=(event)=>{
setEnteredDate(event.target.value)
// console.log(event.target.value)

    }
// const [userInput,setuserInput]=useState({//second approach
//     enteredTitle:"",
//     enteredAmount:"",
//     enteredDate:""}
// )
// const titleChangeHandler=(event)=>{
//     setuserInput({
//         ...userInput,
//         enteredTitle: event.target.value
//     }
//     )
//     // console.log(event.target.value)

// }
// const amountChangeHandler=(event)=>{
//     setuserInput({
//         ...userInput,
//         enteredAmount:event.target.value
//     })
//     // console.log(event.target.value)

// }
// // const amountChangeHandler=(event)=>{//this another way to use react state to have latest value rather than having the old value this is more preferred way
// //     setuserInput((prevState)=>{
// //         return {prevState,enteredAmount:event.target.value}
// //     })
// //     console.log(event.target.value)

// // }
// const dateChangeHandler=(event)=>{
//     setuserInput(
//         {
//             ...userInput,
//             enteredDate:event.target.value
//         }
//     )
//     // console.log(event.target.value)

// }
    return (
        <form >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" min="01-01-2012" max="01-12-2023"onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>

        </form>
    )
};
export default ExpenseForm;