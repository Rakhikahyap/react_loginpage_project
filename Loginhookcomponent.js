import React,{useState} from 'react';

function LoginComponent(){
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [rememberMe,setRemeberMe] =useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const model = {email,password,rememberMe};
        console.log(model);
    }

    return (
        <from onSubmit={onSubmit} style={{margin:'auto',width:'50%',padding:100}}>
            <h3>simple Fromm width Hooks</h3>
            <div>
                <label>Email *</label><br/>
                <input
                    type="email"
                    value={email}
                    onchange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>password =</label><br/>
                <input
                    type="p"
                    value={email}
                    onchange={e => setpassword(e.target.value)}
                />
            </div><br/>
            <div>
                <label>
                    <input
                        type="checkbox"
                        onChange={e => setRemeberMe(e.target.checked)}
                        checked={rememberMe}
                    />
                    Remember me
                </label>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
                        
        </from>
    )

}

export default LoginComponent;


                    