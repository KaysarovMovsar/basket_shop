import Card from "./Card/Card";
import React from "react";

const Content = ({database, Setbought}) => {
    return (
        <div className="content">
            <Card products={database} Setbought={Setbought}/>
        </div>
    );
};

export default Content



