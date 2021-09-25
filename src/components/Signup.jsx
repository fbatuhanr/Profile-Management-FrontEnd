import React, {useState} from 'react';

const Signup = () => {

    const [signupForm, setSignupForm] = useState({
        signupEmailStart: "",
        signupEmailEnd: "",
        signupPassword: "",
        signupPasswordAgain: ""
    })


    const inputChange = (e) => {
        //console.log(e.target.name + ' ve ' + e.target.value);
        setSignupForm({
            ...signupForm,
            [e.target.name]: e.target.value
        })
    }
    const signupFormSubmit = (e) => {
        e.preventDefault();

        console.log(signupForm.signupEmailStart);
        console.log(signupForm.signupEmailEnd);
        console.log(signupForm.signupPassword);
        console.log(signupForm.signupPasswordAgain);

        if(signupForm.signupPassword != signupForm.signupPasswordAgain) {
            alert("Passwords do not match!");
            return null;
        }
        
        let signupEmail = signupForm.signupEmailStart + '@' + signupForm.signupEmailEnd;
        console.log(signupEmail)
    }

    return (
        <form id="signupForm" onSubmit={signupFormSubmit} method="POST">
            <div className="mb-3">
                <label htmlFor="signupEmailStart" className="form-label">Email address</label>
                <div className="input-group">
                    <input type="text" className="form-control" id="signupEmailStart" aria-describedby="emailHelp" 
                        name="signupEmailStart" 
                        value={signupForm.signupEmailStart} 
                        onChange={inputChange} 
                    required/>
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" id="signupEmailEnd"
                        name="signupEmailEnd"
                        value={signupForm.signupEmailEnd} 
                        onChange={inputChange} 
                    required/>
                </div>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="signupPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="signupPassword" 
                    name="signupPassword"
                    value={signupForm.signupPassword} 
                    onChange={inputChange} 
                required/>
            </div>
            <div className="mb-3">
                <label htmlFor="signupPasswordAgain" className="form-label">Password again</label>
                <input type="password" className="form-control" id="signupPasswordAgain" 
                    name="signupPasswordAgain"
                    value={signupForm.signupPasswordAgain} 
                    onChange={inputChange} 
                required/>
            </div>
            <button type="submit" className="btn btn-primary">Sign up!</button>
        </form>
    )
}
export default Signup;