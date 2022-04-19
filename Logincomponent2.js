import React from 'react';

class LoginComponent extends React.Component{
    constructor(){
        super();
        this.state ={
            email: {name:'email',value:'',error:''},
            password:{name:'password',value:'',error:''},
            rememberMe:{name: 'rememberMe',value:false,error:''},

        }
    }
    render(){
        const {email,password,rememberMe} =this.state;
        return (
            <from onSubmit={this.onSubmit} style={{margin:'auto',width: '50%'}}>
                <h3>Login component width object</h3>
                <br/>
                <input
                    placeholder="Please enter your email"
                    type="email"
                    name={email.name}
                    value={email.value}
                    onchange={this.onchange}
                />
            </from>
        )
}
            