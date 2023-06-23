import Content from "./Content/Content";
import {useState} from "react";
import macbook from "./Images/mack-book-card-1.jpg";
import Galaxy from "./Images/Galaxy-card-2.jpg";
import Scooter from "./Images/skuter-card-3.jpg";
import SamsungTV from "./Images/samsung-Tv-card-4.jpg";
import Mask from "./Images/mask-card-5.jpg";
import WashMachine from "./Images/wasch-maschine-card-6.jpg";
import Fridge from "./Images/holodilnik-card-7.jpg";
import SubCard from "./Images/sub-card-8.jpg";
import Headphones from "./Images/nauschniki-card-9.jpg";
import Video from "./Images/video-carta.png";
import Header from "./Header/Header";

function App() {
    const [database, setDataBase] = useState([
        {id: 1, name: "MacBook", price: 100000, bought: false, rating: 5, image: `${macbook}`},
        {id: 2, name: "Galaxy", price: 35999, bought: false, rating: 4, image: `${Galaxy}`},
        {id: 3, name: "Скутер", price: 65500, bought: false, rating: 5, image: `${Scooter}`},
        {id: 4, name: "Монитор Samsung", price: 12000, bought: false, rating: 3, image: `${SamsungTV}`},
        {id: 5, name: "Респераторная маска", price: 500, bought: false, rating: 5, image: `${Mask}`},
        {id: 6, name: "Стиральная машина", price: 100000, bought: false, rating: 3, image: `${WashMachine}`},
        {id: 7, name: "Белый холодильник", price: 43100, bought: false, rating: 5, image: `${Fridge}`},
        {id: 8, name: "Колонка", price: 3000, bought: false, rating: 4, image: `${SubCard}`},
        {id: 9, name: "Наушники", price: 1500, bought: false, rating: 5, image: `${Headphones}`},
        {id: 10, name: "Видеокарта RTX 3060", price: 41000, bought: false, rating: 8, image: `${Video}`}
    ])

    const Setbought = (id) => {
        const newId = database.map((item) => {
            if(item.id === id) {
                return {
                    ...item,
                    bought: !item.bought
                }
            }
            return item
        })
        setDataBase(newId)
    }
    return (
        <div className="app">
            <Header database={database}/>
            <Content database={database} Setbought={Setbought}/>
        </div>
    );
}


export default App;
