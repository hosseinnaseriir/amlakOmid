import Rate from './Rate'
import React, { useState } from "react";
function Card({img,title,myclass}) { 
  const [rating, setRating] = useState(0);
  return (
        <div  className={`p-2 ${myclass}`}>
        <div className="shadow-es text-center pb-2 overflow-hidden  rounded-3">
            <img src={img} className="w-100" height={150}/>
            <p className='text-center'>{title}</p>
            <Rate rating={rating} onRating={(rate) => setRating(rate)} />
        </div>

    </div>
  );
}

export default Card;