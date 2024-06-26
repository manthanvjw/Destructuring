import "./App.css";
import Cars from "./Cars";

function App() {
  let cars = [
    {
      cID: 1,
      cName: "Maruti Fronx",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      image: "images/car1.jpg",
      price: "7,51,000",
    },
    {
      cID: 2,
      cName: "Mahindra Scorpio N",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      image: "images/car2.jpg",
      price: "13,60,000",
    },
    {
      cID: 3,
      cName: "Maruti Fronx",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      image: "images/car3.jpg",
      price: "7,60,000",
    },
    {
      cID: 4,
      cName: "Mahindra Scorpio",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      image: "images/car4.jpg",
      price: "13,84,000",
    },
    {
      cID: 5,
      cName: "Hyundai Creta",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      image: "images/car5.jpg",
      price: "11,00,00",
    },
    {
      cID: 6,
      cName: "Maruti Grand Vitara",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      image: "images/car5.jpg",
      price: "10,80,00",
    },
    {
      cID: 7,
      cName: "Hyundai Exter",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      image: "images/car5.jpg",
      price: "6,13,000",
    },
  ];
  return (
    <>
      <div className="App">
        {
        cars.map((car) =>{
          return (<div>
            <Cars car={car}/>
            </div>)
          }
        )}
      </div>
    </>
  );
}

export default App;
