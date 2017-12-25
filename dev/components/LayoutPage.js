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
      <div style={{height:"100%", width:"100%",border:"1px solid green"}}>
          <div style={{height:"100%", width:"5%",border:"1px solid black",float: "left", background:'#f2f2f2'}}>
            <div style={{height:"10%", width:"100%", float: "left"}}>
              <Avatar shape="square" size="large" icon="user" />
            </div>
            <div style={{height: "10%", paddingTop: "5%", float: "left", width: "100%"}}></div>
            <div style={{ paddingTop:"5%", float: "left"}}></div>
            <div style={{height:"100%", paddingTop:"25%",  width:"100%"}}>
              <Icon size="large" type="dashboard" />
              <Icon size="large" type="swap" />
              <Icon size="large" type="solution" />
              <Icon size="large" type="profile" />
              <Icon size="large" type="setting" />
            </div>
          </div>

          <div style={{height:"10%", width:"95%",border:"1px solid black",float: "left", background:'#f2f2f2'}}>
            <div style={{ width:"5%",paddingLeft: "2%",paddingTop: "2%", float: "left"}}> 
              <Icon type="left"/>
            </div>
            <h3 style={{paddingTop: "2%", color:"#000"}}>Accounts Overview</h3>
          </div>

          <div style={{height:"90%", width:"95%",border:"1px solid black",float: "left"}}>
            <div style={{height:"50%", width:"50%",border:"1px solid black",float: "left"}}>
              <div style={{height:"50%", width:"50%",border:"1px solid black",float: "left", background:'#f2f2f2'}}>
                <NumberCounter min={100} max={1000}/>
              </div>
              <div style={{height:"50%", width:"50%",border:"1px solid black",float: "left", paddingTop: "5%", paddingLeft: "5%", background:'#f2f2f2'}}>
                <div style={{height:"60%", width:"25%", float: "left", textAlign: 'center', background:'#ffffff' }}>
                  <Icon type="arrow-up" style={{ fontSize: 32, color: '#08c' }} >
                    <span style={{ fontSize: 12, color: '#08c' }} >Sell</span>
                  </Icon>
                </div><div style={{width:"5%",height:"60%", float: "left"}}></div>
                <div style={{height:"60%", width:"25%", float: "left", background:'#ffffff', textAlign: 'center' }}>
                  <Icon type="arrow-down" style={{ fontSize: 32, color: '#08c'}} >
                    <span style={{ fontSize: 12, color: '#08c' }} >Buy</span>
                  </Icon>
                </div><div style={{width:"5%",height:"60%", float: "left"}}></div>
                <div style={{height:"60%", width:"25%", float: "left", background:'#ffffff', textAlign: 'center' }}>
                  <Icon type="schedule" style={{ fontSize: 32, color: '#08c' }}>
                    <span style={{ fontSize: 12, color: '#08c' }} >Order</span>
                  </Icon>
                </div>
              </div>
              <div style={{height:"50%", width:"50%",border:"1px solid black",float: "left", background:'#f2f2f2'}}>
                <NumberCounter min={500} max={5000}/><br/>
                <DrawLineChart type="line" size="small" layer="one" width={15} height={40}/>
              </div>
              <div style={{height:"50%", width:"50%",border:"1px solid black",float: "left", background:'#f2f2f2'}}>
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
