import React, { useState } from 'react';

const Contact = () => {


  // creating hooks state
  const [data, setData] = useState({
    fullname:'',
    email:'',
    password:'',
    feedback:'',
  });

  const inputEvent = (event) => {
    const {name, value} = event.target;
    
    setData( (prevVal) => {
       return {
              ...prevVal, [name] : value,
       }
    })
  };

  const formSubmit = (e) => {
      e.preventDefault();

      alert (`My name is ${data.fullname} , my email is 
       ${data.email} , my password is ${data.password} 
        and my feedback is ${data.feedback} 😄`)
  }



return (<>
     <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
     </div>
     <div className="container contact-div">
       <div className="row">
         <div className="col-md-6 col-10 mx-auto">

         <form onSubmit={formSubmit}>

         <div class="mb-3">
    FullName
    <input type="text" class="form-control" 
    name="fullname"
    value={data.fullname}
    onChange={inputEvent}
    id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your name with anyone else.</div>
  </div>
  

  <div class="mb-3">
    Email address
    <input type="email" class="form-control"
    name="email"
    value={data.email}
    onChange={inputEvent}

     id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    Password
    <input type="password" class="form-control" 
    name="password"
    value={data.password}
    onChange={inputEvent}
    id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  
  
  <div class="mb-3">
    Feedback
    <input type="text" class="form-control" 
    name="feedback"
    value={data.feedback}
    onChange={inputEvent}
    id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>

         </form>

         </div>
       </div>
     </div>
     </>);
}

export default Contact;