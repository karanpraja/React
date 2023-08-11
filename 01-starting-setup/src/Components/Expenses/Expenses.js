import Component from "./ExpenseItem"
import Card from "../UI/Card"
// import "./Expenses.css"
export default function Expense(props){
   
      return (
      <Card className="expenses">
  {/*before <expenses
   title={expenses[0].title}
   amount={expenses[0].amount}/*mistake {expense=expenses[0]// t2: expense={expenses[0]}}
   date={expenses[0].date}
   id={expenses[0].id}></expenses> after down*/}
   <Component
   title={props.items[0].title}
   amount={props.items[0].amount}/*mistake {expense=items[0]// t2: expense={items[0]*/
   date={props.items[0].date}
   id={props.items[0].id}/>
  <Component
     title={props.items[1].title}
     amount={props.items[1].amount}
     date={props.items[1].date}
     id={props.items[1].id}/>
  <Component
   title={props.items[2].title}
   amount={props.items[2].amount}
   date={props.items[2].date}
   id={props.items[2].id}/>
  <Component
    title={props.items[3].title}
    amount={props.items[3].amount}
    date={props.items[3].date}
    id={props.items[3].id}/>
</Card>);
}
//we can't use default with arrow function