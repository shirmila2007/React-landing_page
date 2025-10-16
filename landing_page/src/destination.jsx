import React, {useState} from 'react'
import Card from './components/Card';

export default function Destination() {
 
 const destinations=[
    { id: 1, name: "Goa", type: "Beach", country: "India", img:"https://i.pinimg.com/1200x/11/c0/e9/11c0e9467c48ec3deec10bbad49d48c6.jpg" },
    { id: 2, name: "Manali", type: "Mountain", country: "India",img:"https://i.pinimg.com/736x/d7/d1/56/d7d156eae1d43fb3d0841ec1f2d1fb84.jpg"},
    { id: 3, name: "Paris", type: "City", country: "France",img:"https://i.pinimg.com/736x/0e/bf/79/0ebf7942daa821ef286bf3f8c6d0c031.jpg" },
    { id: 4, name: "Bali", type: "Beach", country: "Indonesia",img:"https://i.pinimg.com/1200x/49/47/6c/49476ca3bcd08e52c7ddbc7c393f490e.jpg" },
    { id: 5, name: "Dubai", type: "Desert", country: "UAE",img:"https://i.pinimg.com/736x/67/6a/cc/676acc9518e0ceede508a394ab994925.jpg" },
    { id: 6, name: "Amazon Rainforest", type: "Forest", country: "Brazil",img:"https://i.pinimg.com/736x/ff/47/a7/ff47a7c933b30f6cf1afa61289467b19.jpg" },
    { id: 7, name: "New York", type: "City", country: "USA",img:"https://i.pinimg.com/736x/62/56/7a/62567ad90a25c17b5baa70d243137310.jpg" },
    { id: 8, name: "Swiss Alps", type: "Mountain", country: "Switzerland",img:"https://i.pinimg.com/1200x/de/03/f5/de03f5d69ac964724fa24b50e3c9f7e0.jpg" },
    { id: 9, name: "Sahara", type: "Desert", country: "Africa",img:"https://i.pinimg.com/736x/0d/b7/7e/0db77ebda889ba4de7757ff24515948a.jpg" },
    { id: 10, name: "Kerala Backwaters", type: "Lake", country: "India",img:"https://i.pinimg.com/1200x/2f/1d/80/2f1d807dff41d1787dbf42a1db99fa1c.jpg" },
  ];

const [filtered,setFiltered]= useState(destinations);

function showall(){
  setFiltered(destinations);
}


function showbeaches(){
const beach=destinations.filter((item)=> item.type === 'Beach');
setFiltered(beach);
}

function showmountains(){
  const mountain = destinations.filter((item) => item.type === 'Mountain');
  setFiltered(mountain);
}


function showcities(){
  const city=destinations.filter((item)=>item.type === 'City');
  setFiltered(city);
}

function showdesert(){
  const desert=destinations.filter((items)=>items.type === 'Desert');
  setFiltered(desert);
}

function showforest(){
  const forest=destinations.filter((item)=>item.type==='Forest');
  setFiltered(forest);
}


function showlake(){
  const lake=destinations.filter((item)=>item.type==='Lake');
  setFiltered(lake);
}

  return (
    <div>
      <h1>Find your destination </h1>
      <div className="buttons"> 
        
        <button onClick={showall}>all</button>
        <button onClick={showbeaches}>Beaches</button>
        <button onClick={showmountains}>mountains</button>
        <button onClick={showcities}>cities</button>
        <button onClick={showdesert}>deserts</button>
        <button onClick={showforest}>forest</button>
        <button onClick={showlake}>lake</button>

      </div>
        
        <div className="cards">
        {
          filtered.map((dest)=>(
            <Card key={dest.id} name={dest.name} type={dest.type} country={dest.country} img={dest.img}/>
          ))
        }
      </div>
    </div>
  )
}

