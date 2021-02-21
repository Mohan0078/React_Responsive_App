import React from 'react';
import Card from './Card';
import WebData from './WebData';

const Service = () => {
  return (<>

     <div className="my-5">
       <h1 className="text-center"> Our Services</h1>
     </div>
    
     <div className="container-fluid mb-5">

<div className="row">
<div className="col-10 mx-auto">
    <div className="row gy-4">
    
    {
      WebData.map((val, index) => {
        return <Card 
         key = {index}
          imgSrc = {val.imgSrc}
          title = {val.title}
        />
      })
    }
    

    </div>
</div>
</div>
 </div>

     </>);
}

export default Service;