import React from 'react'

 const Content = ({children}) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 loginSignupForms mt-5">
                    <h1 className="display-5 text-center mt-1 mb-4">Profile Management</h1>
                    <div className="form-container">
                        <nav className="fs-5">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active text-dark" id="nav-login-tab" data-bs-toggle="tab" data-bs-target="#nav-login" type="button" role="tab" aria-controls="nav-login" aria-selected="true">Login <i className="bi bi-person-check-fill"></i></button>
                                <button className="nav-link text-dark" id="nav-signup-tab" data-bs-toggle="tab" data-bs-target="#nav-signup" type="button" role="tab" aria-controls="nav-signup" aria-selected="false">Sign up <i className="bi bi-person-plus-fill"></i></button>
                            </div>
                        </nav>
                        <div className="tab-content bg-white p-3 pt-4 pb-4 border border-top-0 rounded-bottom" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab">
                                {children[0]}
                            </div>
                            <div className="tab-pane fade" id="nav-signup" role="tabpanel" aria-labelledby="nav-signup-tab">
                                {children[1]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;