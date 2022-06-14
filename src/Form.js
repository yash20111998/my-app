import React, { Component } from 'react'
import axios from 'axios'

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
  changeHandler=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }
  submitHandler=(event)=>{
    // alert(`${this.state.name} ${this.state.age} ${this.state.tf} ${this.state.interest}`)
    event.preventDefault()
    console.log(this.state)
    axios.post("url goes here ", this.state)
  }
  render() {
    const { name, age, tf, interest }= this.state
    return (
      <div>
      <form onSubmit={this.submitHandler} >
        <div>
          <lable><h2>NAME</h2></lable>
          <input
            name='name'
            type="text"
            value={name}
            onChange={this.changeHandler}
            />
        </div>
        <div>
          <lable><h2>DATE OF BIRTH</h2></lable>
          <input
            name='age'
            type="date"
            value={age}
            onChange={this.changeHandler}
            />
        </div>
        <div>
          <lable><h2>LIKE REACT</h2></lable>
          <select name= 'tf' value={tf } onChange={this.changeHandler}>
            <option value="true">TRUE</option>
            <option value="false">FALSE</option>
          </select>
        </div>
        <div>
          <lable><h2>WHICH OF THE FOLLOWING DO YOU LIKE-</h2></lable>
          <select name='interest' value={interest} onChange={this.changeHandler}>
            <option value="React">REACT</option>
            <option value="Angular">ANGULAR</option>
            <option value="Mongo">MONGO</option>
            <option value="NodeJS">NODE JS</option>
          </select>
        </div>
        <button type='submit'>SUBMIT</button>
      </form>
      </div>
    )
  }
}

export default Form
