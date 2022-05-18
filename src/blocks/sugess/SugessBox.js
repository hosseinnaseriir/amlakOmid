import React from "react";
import Estate from '../../components/Estate';
import {Row } from 'react-bootstrap';
import {PropertiesApi, STATICS} from "../../api";
import { Link } from 'react-router-dom';


function SugessBox({properties}) {
  



  return (
      <Row>

        {properties?.map((propertie)=>(
          <Estate to={`/advisorDetail?${propertie._id}`} myClass='col-lg-3 col-md-4' img={STATICS + propertie.pictures[0]} title={propertie.advertiser} profile="./img/profile2.png" 
              location={propertie.area} price={propertie.price}
              phoneNumber={propertie.phoneNumber}
              bed={propertie.bedRooms} type={propertie.type} time="۳ روز پیش" meter={propertie.metrage}/>
          
              
        
          ))}


        </Row>
      

  );
}

export default SugessBox;



