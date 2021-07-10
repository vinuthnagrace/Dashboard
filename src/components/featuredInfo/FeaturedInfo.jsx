import React from "react";
import "./featuredInfo.scss";

const FeaturedInfo = (props) => {
  console.log(props);
  return (

<div className="featured">
  <div className="featuredItem">
    <span className="featuredTitle">
    {props.name}
    </span>
    <span className="featuredTitle">
     {props.sex}
    </span>
    <div className="featuredMoneyContainer">
          <span className="featuredMoney">  {props.species}</span>
     </div>
     <span className="featuredSub">  {props.note}  </span>
     <span className="featuredImage">  <img className="image" src={props.image} alt="" /> </span>

  </div>


</div>

);
}

export default FeaturedInfo;