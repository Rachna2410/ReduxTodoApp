import React from 'react';
import {useSelector,useDispatch} from 'react-redux';

function ReduxTodoList() {
    const todovalue = useSelector(state => state.data);
    let a = todovalue.length;
    let dispatch = useDispatch();

    let deleteTodo = (indexToDelete) => {
        let temp = todovalue.filter( (val,index) => {
            if (index === indexToDelete)
            return false;
            else
            return true;
        });

        dispatch({type:"todo/delete",data: temp});
    }

    let deleteAll = () => {
        dispatch({type: "todo/deleteAll"});
    }
    
    return (
        <>
            {a > 0 &&
                <><table border="2">
                    <tr>
                        <th>Todo</th>
                        <th>Action</th>
                    </tr>
                    {todovalue.map( (value,index) => {
                        return (
                            <tr key={index}>
                                <td>{value}</td>
                                <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </table>
                <button onClick={deleteAll}>Delete all</button></>
            }
        </>
    )
}

export default ReduxTodoList;