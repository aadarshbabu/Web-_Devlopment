import React from 'react';

function Card(props) {

    const{ Name, clas,Address,state } = props.value;
   
        return (
            <>
                <div className="card" style={{ width: "18rem" }}> 
                    <div className="card-body">
                        <h5 className="card-title">{Name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{clas}</h6>
                        <p className="card-text">{Address}</p>
                        <p className="card-text">{state}</p>
                        {/* <a href=" " className="card-link">Card link</a>
                    <a href=" " className="card-link">Another link</a> */}
                    </div>
                </div>


            </>
        );

   


}
export default Card;