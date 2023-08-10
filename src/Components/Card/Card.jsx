import './Card.css'
import {BsSun,BsCloudDrizzle,BsCloudy,BsJustify} from 'react-icons/bs'
import { IoCloseOutline } from "react-icons/io5";
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Card({id,dt,time,date,name,country,temp,temp_min,temp_max,description}) {
  const navigate = useNavigate();

  const clickhandller = () => {

    const share = { id:id,
      dt:dt,  
      time:time,
      date:date,
      name:name,
      country:country,
      temp:temp,
      temp_min:temp_min,
      temp_max:temp_max,
      description:description,
      color:color
  }
    navigate("/weather",
     { replace: true ,state:share });
    
  };

  const captipitalizeWords = (str) => {
    return str.replace(/\b\w/g, function(l) {
      return l.toUpperCase();
    });
  }
 

  const [color,setColor] = useState('bg-blue');
  const [icon,setIcon] = useState(<BsSun size={20}/>);
  const colors=['bg-blue','bg-green','bg-red','bg-purple','bg-orange'];
  description = captipitalizeWords(description);
  useEffect(() => {
    var randomElement = colors[Math.floor(Math.random() * colors.length)];

    setColor(randomElement);
    if(description === 'Clear Sky'){
      setIcon(<BsSun size={20} />);
      setColor('bg-green');
    }else if(description === 'Few Clouds'){
      setIcon(<BsCloudDrizzle size={20}/>);
      setColor('bg-blue');
    
    }else if(description === 'Scattered Clouds'|| description === 'Light Rain'){
      setIcon(<BsCloudy size={20}/>);
      setColor('bg-orange');
     
    }else if(description === 'Broken Clouds'){
      setIcon(<BsCloudy size={20}/>);
      setColor('bg-purple');
    }else if(description === 'Overcast Clouds'){
      setIcon(<BsCloudy size={20}/>);
      setColor('bg-red');
      
    }else if(description === 'Mist'){
      setIcon(<BsJustify size={20}/>);
      setColor('bg-green');
    }
  
   
  },[description])


  return (
    <div className="card cursor-pointer border-0 shadow-lg" onClick={clickhandller}>
       
      <div className={"card-header bg-cloud "+color}>
      <div className="text-end text-white close"><IoCloseOutline /> </div>
            
        <div className="container">
            

            <div className="row">
                <div className="col-6 text-center text-white">
                    <div className=" fs-5 fw-bolder">{name}, {country}</div>
                    <div className=" fs-7 ">{time}, {date}</div>
                </div>

                <div className="col-6 text-start text-white">
                    <div className=" fs-2">{temp}&deg;C</div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-6 text-center text-white d-flex justify-content-center mt-2 gap-2">
            
                    <div className='fs-5'> {icon}</div>
                    <div className=" fs-6 fw-bold mt-2">{description}</div>
                    
                </div>

                <div className="col-6 text-start text-white mb-4">
                        <div className=" fs-7 fw-bold">Temp Min : {temp_min}&deg;C</div>
                        <div className=" fs-7 fw-bold">Temp Max : {temp_max}&deg;C</div>
                </div>
            </div>
        </div>
      </div>
      <div className="card-footer bg-black-light h-40 ">
      </div>
    </div>
  );
}

export default Card;
