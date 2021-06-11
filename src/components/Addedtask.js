import '../cssfiles/Addedtask.css';
import '../App.css';

function Addedtask(props) {
    /*var  v=props.list.map((name,ind)=>{
        return(<li key={ind}> <button onClick={()=>props.onClick(ind)}> {name} </button> </li>)
      })*/

    var v2=props.list.map((obj,ind)=>{
        //console.log('in addedtask ind is'+ ind)
        //console.dir(ind)
        return(
            <li key={obj.id} className="list_item1">
                <div>
                    <p> {obj.value} </p>
                    <p> {obj.day} </p>
                    <button onClick={()=>props.onClick(obj.id)}> delete this task</button>
                    <button onClick={()=>props.onComplete(obj.id)}> mark completed</button>
                </div>  
            </li>
        )
    })
  return (
    <div className="Addedtask">
      <ul>
          {v2}
        </ul>
    </div>
  );
}

export default Addedtask;