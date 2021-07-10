import React from "react";
import "./featuredInfo.scss";

const FeaturedInfo = (props) => {
  console.log(props);
  return (

<div className="featured">
  <div className="featuredItem">
    <span className="featuredTitle">
    Name : {props.name}
    </span>
    <div className="gender">
    <span className="featuredTitle">
    Gender : {props.sex}
    </span> </div>
    <div className="featuredMoneyContainer">
          <span className="featuredMoney"> Species : {props.species}</span>
     </div>
     <span className="featuredSub"> Note : {props.note}  </span>
     <span className="featuredImage">  <img className="image" src={props.image} alt="" /> </span>

  </div>


</div>

);
}

export default FeaturedInfo;