import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spin, Row, Col } from "antd"
import styles from "./DetailPage.module.css";
import { Header, Footer, ProductIntro } from "../../components";
import { DatePicker, Space } from "antd";

interface MatchParams {
    touristRouteId: string,
}

export const DetailPage: React.FC = (): JSX.Element => {
    const {touristRouteId} = useParams();
    const [loading, setLoading] = useState<boolean>(true)
    const [product, setProduct] = useState<any>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect (() => {
    	const fetchData = async () => { 
            setLoading(true);
            try {
                const { data } = await axios.get(`http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`);
                setLoading(false);
                setProduct(data);
            } catch (error:any) {
                setLoading(false)
                setError(error.message)
            }
            }
            fetchData();      
        }, []);

    if (loading) {
        return (
            <Spin
            size="large"
            style={{
                marginTop: 200,
                marginBottom: 200,
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
            }}
            />
        );
        }
        if (error) {
            return <div>Error Occured: {error}</div>;
        }    
    return <h1>route ID: {touristRouteId}</h1>
}