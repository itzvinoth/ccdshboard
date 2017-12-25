import React from "react";
import { Layout, Avatar, Row, Col, Icon} from 'antd';
import './Dashboard.css';
import './Cards.css';
import Dashboard from "./Dashboard";
import DrawLineChart from "./DrawLineChart";
import NumberCounter from "./NumberCounter";
import Cards from "./Cards";

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
              <div style={{height:"50%", width:"50%",border:"1px solid black",float: "left"}}>
                <NumberCounter min={100} max={1000}/>
              </div>
              <div style={{height:"50%", width:"50%",border:"1px solid black",float: "left"}}>
                <div style={{height:"50%", width:"30%", float: "left"}}>
                  <Icon type="arrow-up" style={{ fontSize: 32, color: '#08c', background:'#f2f2f2' }} >
                    <span style={{ fontSize: 16, color: '#08c', background:'#f2f2f2' }} >Sell</span>
                  </Icon>
                </div>
                <div style={{height:"50%", width:"30%", float: "left"}}>
                  <Icon type="arrow-down" style={{ fontSize: 32, color: '#08c', background:'#f2f2f2' }} >
                    <span style={{ fontSize: 16, color: '#08c', background:'#f2f2f2' }} >Buy</span>
                  </Icon>
                </div>
                <div style={{height:"50%", width:"30%", float: "left"}}>
                  <Icon type="schedule" style={{ fontSize: 32, color: '#08c', background:'#f2f2f2' }}>
                    <span style={{ fontSize: 16, color: '#08c', background:'#f2f2f2' }} >Order</span>
                  </Icon>
                </div>
              </div>
              <div style={{height:"50%", width:"50%",border:"1px solid black",float: "left"}}>
                <NumberCounter min={500} max={5000}/><br/>
                <DrawLineChart type="line" size="small" layer="one" width={15} height={40}/>
              </div>
              <div style={{height:"50%", width:"50%",border:"1px solid black",float: "left"}}>
                <NumberCounter min={2500} max={7500}/><br/>
                <DrawLineChart type="line" size="small" layer="two" width={15} height={25}/>
              </div>
            </div>
            <div style={{height:"50%", width:"50%",border:"4px solid black",float: "left"}}>
              <Cards/>
            </div>
            <div style={{height:"50%", width:"100%",border:"4px solid black",float: "left"}}>
              <Layout>             
                <Content>            
                  <div> <Dashboard/></div>
                </Content>
              </Layout>
            </div>
          </div>
        </div>
    )
  }
}
