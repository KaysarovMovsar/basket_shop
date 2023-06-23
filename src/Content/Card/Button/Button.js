import React, {useState} from "react";
import {setBought} from "../../../App";

const Button = ({id, Setbought, bought}) => {
    return (
        <div className="card-button">
            <button className="btn" onClick={() => Setbought(id)} disabled={bought}>
                {bought ? "Добавлен в корзину" : "Добавить в корзину"}
            </button>
        </div>
    );
};

export default Button;