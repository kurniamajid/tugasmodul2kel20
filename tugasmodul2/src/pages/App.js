import { Card, Gap, StyledLink } from "../components";
import { Layout } from "antd";
import "./App.scss";
import fera from "../assets/fera.jpg";
import majid from "../assets/majid.jpg";

const { Header, Content, Footer } = Layout;
const today = new Date();
const year = today.getFullYear();

function App() {
  return (
    <Layout className="main-page">
      <Header className="navbar">
        <p className="title">Kelompok 20</p>
        <div className="link-wrapper">
          <StyledLink label="Home" href="#" />
          <Gap width={20} />
          <StyledLink label="Product" href="#" />
        </div>
      </Header>
      <Content className="content">
        <Card nama="Fransiska Tebai." nim="21120117100037" photo={fera} />
        <Card nama="Kurnia Luqman Majid" nim="21120117140025" photo={majid} />
      </Content>
      <Footer style={{ textAlign: "center", color: "#004643" }}>
        @{year} Created by Kelompok 20
      </Footer>
    </Layout>
  );
}

export default App;