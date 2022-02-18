import React from "react";
import { useParams } from "react-router-dom";

interface MatchParams {
    touristRouteId: string;
}

export const DetailPage: React.FC = (): JSX.Element => {
    const params = useParams();
    return <h1>route ID: {params.touristRouteId}</h1>
}