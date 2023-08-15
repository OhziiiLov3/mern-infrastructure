import { Component } from 'react'

export default class SignUpForm extends Component {
    state = {
       name : "",
       email: "", 
       password: "", 
       confirm: "", 
       error: "", 
    }
    handleChange = (e) =>{
        this.setState({
          [e.target.name]: e.target.value,
          error: "",
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        alert(JSON.stringify(this.state))
     
    }
  render() {
    return (
      <div>
        <div className="form-container">
            <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                <label htmlFor="">Password</label>
                <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                <label htmlFor="">Confirm</label>
                <input type="text" name="confirm" value={this.state.confirm} onChange={this.handleChange} />
                <button type="submit">SIGN UP</button>
            </form>
        </div>
      </div>
    )
  }
}
