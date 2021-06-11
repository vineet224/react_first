
import '../App.css';

function Form(props) {
  
  return (
    <div className="Form">
      <form onSubmit={props.handleSubmit}>
        <label className='label1'>
        Task:
          <input type="text" value={props.value} onChange={props.handleChange} />
        </label>
        <label className='label1'>
          Day:
          <input type="text" value={props.day} onChange={props.handleChange2} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
