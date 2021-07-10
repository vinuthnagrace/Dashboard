import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { useEffect, useState } from "react";
import "./home.css";

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://elephant-api.herokuapp.com/elephants"
    )
      .then((res) => res.json())
      .then((data) => {let filterData = data.filter((ele) => ele.index)
      setData(filterData);
      })
      .catch((err) => console.log(err));
  });


  return (
    <div className="home">
         {data.map((data) => (
        
          <FeaturedInfo name={data.name} sex={data.sex} species={data.species} note={data.note} image={data.image}/>
        
      ))}
     </div>
  );
}