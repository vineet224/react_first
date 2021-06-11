import '../cssfiles/Todo2.css'
import '../App.css';
function Todo2(props) {

        var v2=props.completedtasks.map((obj,ind)=>{
                return(
                    <li key={ind} className="list_item1">
                        <div>
                            <p> {obj.value} </p>
                            <p> {obj.day} </p>
                            <button onClick={()=>props.onDelete(ind)}> delete this</button>
                        </div>  
                    </li>
                )
            })
  return (
    <div className="Todo1">
        <h3 className='Header'> Completed Tasks </h3>
        <div className='display-area'>
        {v2}
        </div>
    </div>
  );
}

export default Todo2;
