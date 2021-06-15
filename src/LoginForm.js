import React from 'react'

function LoginForm() {
    return (
        <form>
            <div className="form-inner">
               <h3>Login</h3>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password"></input>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
