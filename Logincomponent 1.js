import React from 'react';

class LoginComponent extends  React.component{
    constructor(){
        super();
        this.state ={
            email: '',
            password:'',
            rememberMe: false
        }
    }
    render(){
        const {email,password,rememberMe } =this.states;
        return(
            <from onSubmit={this.onSubmit} style={{margin:'auto',width:'50%'}}>
                <h3>Login Component</h3>
                <div>
                    <label>Email *</label>
                    <br/>
                    <input
                        placeholder="please enter your email"
                        type="email"
                        value={email}
                        
                        onchange={e => this.setState({email:e.target.value})}
                    />
                </div>
            </from>
        )
}
