import {useDispatch,useSelector} from 'react-redux';
import {useState} from 'react';

function ReduxTodoForm(){
	const dispatch = useDispatch();
	const[todo,setTodo]=useState([]);
	const data= useSelector(state=>state.data);

	const submit=(e)=>{
		e.preventDefault();
		let array = todo.concat(e.target.text.value);
		setTodo(array);
		dispatch({type:"todo/todoAdded",data:todo})
	}
	return(
		<div>
		<h1>Todo List</h1>
		<form onSubmit={submit}>
		<input type="text" name='text' placeholder="enter todo" />
		<button>Submit</button>
		</form>

		
		</div>
		)
}
export default ReduxTodoForm;