import React from "react";
import { Layout, Avatar, Row, Col} from 'antd';
import './Dashboard.css';
import Dashboard from "./Dashboard";

const { Header, Content, Footer } = Layout;

export default class LayoutPage extends React.Component {
  constructor() {
    super();
    // this.state = {chart : 'chart area'};
  }

  render() {
    return (
      <div style={{height:"100%", width:"100%",border:"4px solid green"}}>
          <div style={{height:"100%", width:"10%",border:"4px solid black",float: "left"}}>
          </div>
          <div style={{height:"10%", width:"90%",border:"4px solid black",float: "left"}}>
            <Layout>
                <Header style={{ width: '100%'}}> 
                  <Row gutter={16}>
                      <Col className="gutter-row loginIcon" span={1}>
                        <Avatar size="large" icon="user" />
                      </Col>
                      <Col className="gutter-row" span={4}>
                        <h3 style={{color:"white"}}>Accounts Overview</h3>
                      </Col>
                    </Row>
                </Header>
            </Layout>
          </div>
          <div style={{height:"90%", width:"90%",border:"4px solid black",float: "left"}}>
            <div style={{height:"50%", width:"50%",border:"4px solid black",float: "left"}}>
            </div>
            <div style={{height:"50%", width:"50%",border:"4px solid black",float: "left"}}>
              
            </div>
            <div style={{height:"50%", width:"100%",border:"4px solid black",float: "left"}}>
              <Layout>             
                <Content style={{marginTop: 0,padding: 20}}>            
                  <div> <Dashboard/></div>
                </Content>
              </Layout>
            </div>
          </div>
        </div>
    )
  }
}
