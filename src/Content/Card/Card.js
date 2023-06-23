import React from "react";
import Button from "./Button/Button";


const Card = ({products, Setbought}) => {


    return (
        <div  className="content">
            {products.map((product)=> (
                    <div className="card">
                        <div className="card-image">
                            <img src={product.image} alt={product.name}/>
                        </div>
                        <div className="card-info">
                            <div className="card-name">{product.name}</div>
                            <div className="card-price">{product.price} ₽</div>
                            <Button id={product.id} Setbought={Setbought} bought={product.bought}/>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Card