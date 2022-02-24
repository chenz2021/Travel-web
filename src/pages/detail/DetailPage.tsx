import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spin, Row, Col } from "antd";
import styles from "./DetailPage.module.css";
import { Header, Footer, ProductIntro } from "../../components";
import { DatePicker, Space, Divider, Typography, Anchor, Menu } from "antd";
import { ProductComments } from "../../components";
import { commentMockData as mockup } from "./mockup";
import { productDetailSlice, getProductDetail } from "../../redux/productDetail/slice";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { isJSDocSignature } from "typescript";
import { MainLayout } from "../../layouts";

const { RangePicker } = DatePicker;

export const DetailPage: React.FC = (): JSX.Element => {
  const {id} = useParams();
  
  const loading = useSelector((state) => state.productDetail.loading);
  const error = useSelector((state) => state.productDetail.error);
  const product = useSelector((state) => state.productDetail.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(id))
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
    <MainLayout>
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
            <Anchor className={styles["product-detail-anchor"]}>
            <Menu mode="horizontal">
                <Menu.Item key="1">
                <Anchor.Link href="#feature" title="Feature"></Anchor.Link>
                </Menu.Item>
                <Menu.Item key="3">
                <Anchor.Link href="#fees" title="Fees"></Anchor.Link>
                </Menu.Item>
                <Menu.Item key="4">
                <Anchor.Link href="#notes" title="Notes"></Anchor.Link>
                </Menu.Item>
                <Menu.Item key="5">
                <Anchor.Link href="#comments" title="Comments"></Anchor.Link>
                </Menu.Item>
            </Menu>
            </Anchor>
        <div id="feature" className={styles["product-detail-container"]}>
        <Divider orientation={'center'}>
                <Typography.Title level={3}>Feature</Typography.Title>
            </Divider>
            <div dangerouslySetInnerHTML={{__html: product.features}}
            style={{ margin: 50 }}>
            </div>
        </div>
            
        <div id="fees" className={styles["product-detail-container"]}>
        <Divider orientation={'center'}>
                <Typography.Title level={3}>Fees</Typography.Title>
            </Divider>
            <div dangerouslySetInnerHTML={{__html: product.fees}}
            style={{ margin: 50 }}>
            </div>
        </div>
        
        <div id="notes" className={styles["product-detail-container"]}>
        <Divider orientation={'center'}>
                <Typography.Title level={3}>Notes</Typography.Title>
            </Divider>
            <div dangerouslySetInnerHTML={{__html: product.notes}}
            style={{ margin: 50 }}>
            </div>
        </div>
            
        <div id="comments" className={styles["product-detail-container"]}>
            <ProductComments data={mockup}/>
        </div>
      
    </MainLayout>
  );
};