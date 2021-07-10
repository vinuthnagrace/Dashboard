import React from "react";
import "./featuredInfo.scss";

const FeaturedInfo = (props) => {
  console.log(props);
  return (

<div className="featured">
  <div className="featuredItem">
    <span className="featuredTitle">
    <h3> {props.name} </h3>
    </span>
    <span className="featuredTitle">
    <h3> {props.sex} </h3>
    </span>
    <div className="featuredMoneyContainer">
          <span className="featuredMoney">  <h3> {props.species} </h3></span>
     </div>
     <span className="featuredSub">  <h3> {props.note} </h3> </span>
     <span className="featuredImage">  <h3>  <h3> <img className="image" src={props.image} alt="" /> </h3> </h3> </span>

  </div>


</div>

);
}

export default FeaturedInfo;