import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'',
       age:'',
       tf:'',
       interest:''
    }
    
  }
  nameHandler=(event)=>{
    this.setState({
      name:event.target.value
    })
  }
  ageHandler=(event)=>{
    this.setState({
      age:event.target.value
    })
  }
  tfHandler=(event)=>{
    this.setState({
      tf:event.target.value
    })
  }
  interestHandler=(event)=>{
    this.setState({
      interest:event.target.value
    })
  }
  submitHandler=(event)=>{
    alert(`${this.state.name} ${this.state.age} ${this.state.tf} ${this.state.interest}`)
  }
  render() {
    return (
      <form onSubmit={this.submitHandler} >
        <div>
          <lable><h2>NAME</h2></lable>
          <input
            type="text"
            value={this.state.name}
            onChange={this.nameHandler}
            />
        </div>
        <div>
          <lable><h2>DATE OF BIRTH</h2></lable>
          <input
            type="date"
            value={this.state.age}
            onChange={this.ageHandler}
            />
        </div>
        <div>
          <lable><h2>LIKE REACT</h2></lable>
          <select value={this.state.tf } onChange={this.tfHandler}>
            <option value="true">TRUE</option>
            <option value="false">FALSE</option>
          </select>
        </div>
        <div>
          <lable><h2>WHICH OF THE FOLLOWING DO YOU LIKE-</h2></lable>
          <select value={this.state.interest } onChange={this.interestHandler}>
            <option value="React">REACT</option>
            <option value="Angular">ANGULAR</option>
            <option value="Mongo">MONGO</option>
            <option value="NodeJS">NODE JS</option>
          </select>
        </div>
        <button type='submit' className='btn'>SUBMIT</button>
      </form>
      
    )
  }
}

export default Form