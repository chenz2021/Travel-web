import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spin, Row, Col } from "antd";
import styles from "./DetailPage.module.css";
import { Header, Footer, ProductIntro } from "../../components";
import { DatePicker, Space, Divider, Typography } from "antd";

const { RangePicker } = DatePicker;

export const DetailPage: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `http://123.56.149.216:8080/api/touristRoutes/${id}`
        );
        setProduct(data);
        setLoading(false);
      } catch (error:any) {
        setError(error.message);
        setLoading(false);
      }
    };
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
    return <div>Error Ocurred: {error}</div>;
  }
  return (
    <>
      <Header />
      <div className={styles["page-content"]}>
        <div className={styles["product-intro-container"]}>
          <Row>
            <Col span={13}>
              <ProductIntro
                title={product.title}
                shortDescription={product.description}
                price={product.originalPrice}
                coupons={product.coupons}
                points={product.points}
                discount={product.price}
                rating={product.rating}
                pictures={product.touristRoutePictures.map((p) => p.url)}
              />
            </Col>
            <Col span={11}>
              <RangePicker open style={{ marginTop: 20 }} />
            </Col>
          </Row>
        </div>
        <div className={styles["product-detail-anchor"]}></div>

        <div id="feature" className={styles["product-detail-container"]}></div>
            <Divider orientation={'center'}>
                <Typography.Title level={3}>Feature</Typography.Title>
            </Divider>
            <div dangerouslySetInnerHTML={{__html: product.features}}
            style={{ margin: 50 }}>
            </div>
        <div id="fees" className={styles["product-detail-container"]}></div>
        <Divider orientation={'center'}>
                <Typography.Title level={3}>Fees</Typography.Title>
            </Divider>
            <div dangerouslySetInnerHTML={{__html: product.fees}}
            style={{ margin: 50 }}>
            </div>
        <div id="notes" className={styles["product-detail-container"]}></div>
            <Divider orientation={'center'}>
                <Typography.Title level={3}>Notes</Typography.Title>
            </Divider>
            <div dangerouslySetInnerHTML={{__html: product.notes}}
            style={{ margin: 50 }}>
            </div>
        <div id="comments" className={styles["product-detail-container"]}></div>
      </div>
      <Footer />
    </>
  );
};