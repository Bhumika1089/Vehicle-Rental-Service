import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="text-center">Login</h3>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label for="username">Username:</label>
                                        <input type="text" class="form-control" id="username" placeholder="Enter your username" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password:</label>
                                        <input type="password" class="form-control" id="password" placeholder="Enter your password" />
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                                </form>
                                <div class="card-footer">
                                    <p class="text-center mb-0">Not a user? <Link to='/register'>Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
