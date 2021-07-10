
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "../home/home.css";
import { useEffect, useState } from "react";

export default function MaleInfo() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://elephant-api.herokuapp.com/elephants"
    )
      .then((res) => res.json())
     

      .then((data) => { const filterGender = data.filter((person) => person.sex === 'Male')
        setData(filterGender);
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
