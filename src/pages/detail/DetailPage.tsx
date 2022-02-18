import React from "react";
import { useParams } from "react-router-dom";


export const DetailPage: React.FC = (): JSX.Element => {
    const {id} = useParams();
    console.log(id)
    return <h1>route ID: {id}</h1>
}