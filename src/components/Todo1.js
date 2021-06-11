import React from 'react';
import '../cssfiles/Todo1.css';
import '../App.css';
import Addedtask from './Addedtask';
import Form from './Form.js'

function Welcome(props) {
  if(props.list.length ===0)
  {
    return(<h2> No task to show </h2>)
  }
  return(<h2> List of task</h2>)
}

class Todo1 extends React.Component {
  constructor(props) {
    super(props);
    /*this.state = {
    value: '',
    day: '',
    list_of_task: [],
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2=this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick=this.onClick.bind(this);*/
  }

  /*onClick(i){
    alert("removing");
    var array=[...this.state.list_of_task]
    array.splice(i,1)
    this.setState({list_of_task: array})
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleChange2(event) {
    this.setState({day: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    var obj={value:this.state.value,day:this.state.day}
    this.setState({list_of_task: [...this.state.list_of_task,obj]})
    this.setState({value: ''})
    alert('list is '+ this.state.list_of_task)
    event.preventDefault();
  }*/

  
  render() {
    /*var list2=this.state.list_of_task
    var  v=this.state.list_of_task.map((name,ind)=>{
      return(<li key={ind}><button onClick={()=>this.onClick(ind)} > {name} </button></li>)
    })
    console.log("here")
    console.log(list2)
    console.log(v)*/
    return (
      <div className="Todo1">
        <h3 className='Header'> Add Tasks </h3>
        <Form value={this.props.value} day={this.props.day} 
        list={this.props.tasks} id={this.props.id}
        handleChange={this.props.handleChange} 
        handleChange2={this.props.handleChange2} 
        handleSubmit={this.props.handleSubmit} />
      <div className='display-area'>
      <Welcome name="yash" list={this.props.tasks}/>
      <Addedtask name="gupta" list={this.props.tasks} 
      onClick={this.props.onClick} 
      onComplete={this.props.onComplete}/>
      </div>
      </div>
    );
  }
}

export default Todo1;