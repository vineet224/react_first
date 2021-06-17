
import '../cssfiles/Main.css';
import '../App.css';
import Todo1 from './Todo1';
import Todo2 from './Todo2';
import { useState, useEffect } from 'react'
import {useQuery} from 'react-query'



const fetchpalnet= async () =>{
  const res=await fetch('https://swapi.dev/api/planets/1/')
  const data= await res.json()
  console.log(data)
  return data
}

function Main() {


  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const [value ,setValue]=useState('')
  const [day,setDay]=useState('')
  const [id,setId]=useState('')
  const [count, setCount]= useState(0)
  const [completedtasks, setCompletedtasks]= useState([])

  const {data, status} =useQuery('posts',fetchpalnet);
  console.log(data)

  useEffect(()=>{
    const getTasks= async ()=>{
      const tasksfromserver= await fetchTasks()
      setTasks(tasksfromserver)
    }
    getTasks()
  },[])


  const fetchTasks= async () =>{
    const res=await fetch('http://localhost:5000/tasks')
    const data= await res.json()
    console.log(data)
    return data
  }

  const onClick= async (i) =>{

    await fetch(`http://localhost:5000/tasks/${i}`,{
      method: 'DELETE',
    })

    alert("removing "+i);
    console.log("rem" + i)
    console.dir(i)

    var array=tasks.filter((task)=>{return(task.id!==i)})
    setTasks(array)
  }

  function onComplete(i){
    alert("task is completed "+i)
    var ctask=tasks.filter((task)=>{return(task.id===i)});
    var ts=ctask[0]
    var array=[...completedtasks,ts]
    alert("clist is"+ completedtasks)
    setCompletedtasks(array)
    onClick(i);
  }

  function onDelete(i){
    var array=[...completedtasks]
    array.splice(i,1)
    setCompletedtasks(array)
  }
  function handleChange(event) {
    //this.setState({value: event.target.value});
    setValue(event.target.value)
  }

  function handleChange2(event) {
    //this.setState({day: event.target.value});
    setDay(event.target.value)
  }

  const addTask =async (task) =>{
    const res=await fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data= await res.json()
    setTasks([...tasks,data])
  }
  function handleSubmit(event) {
    /*alert('A name was submitted: ' + this.state.value);
    var obj={value:this.state.value,day:this.state.day}
    this.setState({list_of_task: [...this.state.list_of_task,obj]})
    this.setState({value: ''})
    alert('list is '+ this.state.list_of_task)
    event.preventDefault();
    alert('A task is submitted :'+value)
    setCount(count+1)
    var id1=count
    var obj={id:id1, value: value, day: day}
    setValue('')
    setDay('')
    setTasks([...tasks,obj])
    alert('list is '+ tasks)
    console.dir(tasks)*/
    
    var obj={value: value, day: day}
    addTask(obj)
    setValue('')
    setDay('')
    alert('list is '+ tasks)
    event.preventDefault()
  }

  return (
    
    <div className="Main">
      <h4 className='Header'> Task Tracker </h4>
      <Todo1 value={value} day={day} tasks={tasks} id={id}
      onClick={onClick} handleChange={handleChange}
      handleChange2={handleChange2} handleSubmit={handleSubmit}
      onComplete={onComplete}/>
      <Todo2 completedtasks={completedtasks} 
      onDelete={onDelete}/>
    </div>

  );
}

export default Main;
