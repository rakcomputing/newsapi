import { Outlet, useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { Breadcrumb, Input, Layout, Menu, theme } from "antd";
import { Label } from "semantic-ui-react";
import { IoHomeOutline } from "react-icons/io5";
import { FaSquareShareNodes } from "react-icons/fa6";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: "Home",
    icon: <IoHomeOutline />,
  },
  {
    key: "3",
    label: "Share",
    icon: <FaSquareShareNodes />,
  },
];

const LayoutPage = () => {
  const routeNavigation = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const onLinkPage = (routes) => {
    routeNavigation(routes);
  };

  const onClickMenu = (e) => {
    if (e.key === "1") {
      onLinkPage("/home");
    } else if (e.key === "3") {
      onLinkPage("/share");
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          background: "#F8F9F9",
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          onClick={onClickMenu}
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            fontWeight: "bold",
            background: "#F8F9F9",
          }}
        />
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: 200 }}
        />
      </Header>
      <Content style={{ padding: "0 20px" }}>
        <div
          style={{
            height: "auto",
            padding: 10,
            minHeight: 380,
            marginTop: 10,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet context={{ searchTerm }} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Dev Computing ©2024 Created by devcomputing
      </Footer>
    </Layout>
  );
};

export default LayoutPage;
