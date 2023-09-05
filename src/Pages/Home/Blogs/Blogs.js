import React from 'react';

const Blogs = () => {
    return (
        <div className='w-50 mx-auto d-block '>

            <div className="card text-white bg-success mb-3" style={{maxwidth: "18rem"}}>
                <div class="card-header">1</div>
                <div class="card-body">
                    <h5 class="card-title">Difference between authorization and authentication</h5>
                    <p class="card-text text-muted">Another similarity between authentication and authorization is the way they both use identification. For instance, one confirms an identity before allowing access, while the other controls access using this verified identity.</p>
                </div>
            </div>

            <div class="card text-white bg-dark mb-3" style={{ maxwidth: "18rem" }}>
                <div class="card-header">2</div>
                <div class="card-body">
                    <h5 class="card-title">Why are you using firebase?</h5>
                    <p class="card-text ">Starting a project with Firebase or adding one to an existing project is simple. Multiple users can view the changes in the data when it is created or changed because it supports real-time database connections.</p>
                </div>
            </div>

            <div class="card text-white bg-info mb-3" style={{ maxwidth: "18rem" }} >
                <div class="card-header">3</div>
                <div class="card-body">
                    <h5 class="card-title">What other options do you have to implement authentication?</h5>
                    <p class="card-text text-muted">In authentication, the user or computer has to prove its identity to the server or client. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
            </div>

            <div class="card text-white bg-primary mb-3" style={{ maxwidth: "18rem" }}>
                <div class="card-header">4</div>
                <div class="card-body">
                    <h5 class="card-title">What other services does firebase provide other than authentication</h5>
                    <p class="card-text text-muted">Firebase provides a secure and easy way for users to sign into their app,Realtime Database,Cloud Messaging,Performance Monitoring.</p>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default Blogs;