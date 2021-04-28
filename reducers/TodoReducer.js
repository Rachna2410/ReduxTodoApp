let intialState={data:[]};

function TodoReducer(state=intialState,action){
	 switch(action.type){
	 	case 'todo/todoAdded':
	 	return{...state,data:action.data};
	 	 case "todo/delete": 
            return {data: action.data}
        case "todo/deleteAll": 
            return {data: []}
	 	default:
	 	return state;
	 }
}
export default TodoReducer;