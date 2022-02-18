import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export const Header: React.FC = () => {
  const params = useParams();
  const location = useLocation();
  return (
    <div className={styles.App}>
    <div className={styles["app-header"]}>
      {/* top-header */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>Lighten Up Your Trip</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            Language
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button>Sign Up</Button>
            <Button>Sign In</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <img src={logo} alt="logo" className={styles["App-logo"]} />
        <Typography.Title level={3} className={styles.title}>
          React Travel
        </Typography.Title>
        <Input.Search
          placeholder={"Please Enter Keyword"}
          className={styles["search-input"]}
        />
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key={1}>Home</Menu.Item>
        <Menu.Item key={2}>Weekend</Menu.Item>
        <Menu.Item key={3}>Group</Menu.Item>
        <Menu.Item key="4"> Solo </Menu.Item>
        <Menu.Item key="5"> Private </Menu.Item>
        <Menu.Item key="6"> Cruise </Menu.Item>
        <Menu.Item key="7"> Hotel+Attractions </Menu.Item>
        <Menu.Item key="8"> Local </Menu.Item>
        <Menu.Item key="9"> Theme </Menu.Item>
        <Menu.Item key="10"> Custom </Menu.Item>
        <Menu.Item key="11"> Study Tour </Menu.Item>
        <Menu.Item key="12"> Visa </Menu.Item>
        <Menu.Item key="13"> Business </Menu.Item>
        <Menu.Item key="14"> VIP </Menu.Item>
        <Menu.Item key="15"> Outdoor </Menu.Item>
        <Menu.Item key="16"> Insurance </Menu.Item>
      </Menu>
    </div>
    </div>
  );
}
