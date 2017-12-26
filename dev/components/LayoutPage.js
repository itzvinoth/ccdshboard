import React from "react";
import { Layout, Avatar, Icon} from 'antd';
import './Dashboard.css';
import './Cards.css';
import Chart from "./Chart";
import DrawLineChart from "./DrawLineChart";
import NumberCounter from "./NumberCounter";
import Cards from "./Cards";

const { Header, Content, Footer } = Layout;

export default class LayoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finalArray: [[19, 11, 16, 14, 9, 3, 19, 5, 16, 8], [4, 2, 15, 10, 2, 4, 10, 14, 3, 19]],
      NumberCounterOne: {
        min: 500,
        max: 5000
      },
      NumberCounterTwo: {
        min: 2500,
        max: 7500
      },
      footerMin: [100, 1000, 2000, 3000],
      footerMax: [1000, 2000, 3000, 4000],
      show: 'visible'
    };

    this.handleCards = this.handleCards.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      footerMin: [100, 1000, 2000, 3000],
      footerMax: [1000, 2000, 3000, 4000],
      show: (this.state.show == 'visible') ? 'hidden' : 'visible'
    });
  }

  handleCards(finalArray) {
    this.setState({
      finalArray: finalArray,
      NumberCounterOne: {
        min: this.state.NumberCounterOne.min + 1,
        max: this.state.NumberCounterOne.max + 1
      },
      NumberCounterTwo: {
        min: this.state.NumberCounterTwo.min + 1,
        max: this.state.NumberCounterTwo.max + 1
      }
    });
  }


  render() {

    const Styles = {
      liStyle:{
        margin: '30px 0'
      },
      iconStyle:{
        fontSize: '25px'
      }
    }
    const {footerMin, footerMax, show } = this.state;
// 9999e6
    return (
      <div style={{height:"100%", width:"100%"}}>
          <div style={{height:"100%", width:"5%",float: "left", background:'#f2f2f2'}}>
            <div style={{height:"10%", width:"100%", float: "left"}}>
              <Avatar shape="square" size="large" icon="user" />
            </div>
            <div style={{height:"100%", width:"100%",float:"left", background:"#9999e6" }}>
              <ul style={{listStyle:'none', paddingLeft:'50%'}}>
                <li style={Styles.liStyle}>
                  <Icon style={Styles.iconStyle} size="large" type="dashboard" />
                </li>
                <li style={Styles.liStyle}>
                  <Icon style={Styles.iconStyle} size="large" type="swap" />
                </li>
                <li style={Styles.liStyle}>
                  <Icon style={Styles.iconStyle} size="large" type="solution" />
                </li>
                <li style={Styles.liStyle}>
                  <Icon style={Styles.iconStyle} size="large" type="profile" />
                </li>
                <li style={Styles.liStyle}>
                   <Icon style={Styles.iconStyle} size="large" type="setting" />
                </li>
              </ul>             
            </div>
          </div>

          <div style={{height:"10%", width:"95%",float: "left", background:'#f2f2f2'}}>
            <div style={{ width:"5%",paddingLeft: "2%",paddingTop: "2%", float: "left"}}> 
              <Icon type="left"/>
            </div>
            <h3 style={{paddingTop: "2%", color:"#000"}}>Accounts Overview</h3>
          </div>

          <div style={{height:"90%", width:"95%",float: "left"}}>
            <div style={{height:"50%", width:"50%",float: "left"}}>
              <div style={{height:"50%", width:"50%",float: "left", background:'#f2f2f2'}}>
                <NumberCounter min={100} max={1000}/>
              </div>
              <div style={{height:"50%", width:"50%",float: "left", paddingTop: "5%", paddingLeft: "5%", background:'#f2f2f2'}}>
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
              <div style={{height:"50%", width:"50%",float: "left", background:'#f2f2f2'}}>
                <NumberCounter min={this.state.NumberCounterOne.min} max={this.state.NumberCounterOne.max}/><br/>
                <DrawLineChart data={this.state.finalArray[0]} type="line" size="small" layer="one" width={15} height={40}/>
              </div>
              <div style={{height:"50%", width:"50%",float: "left", background:'#f2f2f2'}}>
                <NumberCounter min={this.state.NumberCounterTwo.min} max={this.state.NumberCounterTwo.max}/><br/>
                <DrawLineChart data={this.state.finalArray[1]} type="line" size="small" layer="two" width={15} height={25}/>
              </div>
            </div>
            <div style={{height:"50%", width:"50%", float: "left", background: '#f2f2f2'}}>
              <Cards onSelectCards={this.handleCards}/>
            </div>
            <div style={{height:"50%", width:"100%",float: "left"}}>
              <Layout>             
                <Content>            
                  <div> <Chart/></div>
                </Content>
              </Layout>
            </div>
          </div>
          <div style={{height:"10%", width:"100%",paddingLeft:"20%",paddingTop:"2%",float: "left" }}>
            <div style={{float: "left", width: "20%",textAlign:"center", visibility: `${show}`}}>
            <NumberCounter min={footerMin[0]} max={footerMax[0]}/></div>
            <div style={{float: "left", width: "20%",textAlign:"center", visibility: `${show}`}}>
            <NumberCounter min={footerMin[1]} max={footerMax[1]}/></div>
            <div style={{float: "left", width: "20%",textAlign:"center", visibility: `${show}`}}>
            <NumberCounter min={footerMin[2]} max={footerMax[1]}/></div>
            <div style={{float: "left", width: "20%",textAlign:"center", visibility: `${show}`}}>
            <NumberCounter min={footerMin[3]} max={footerMax[1]}/></div>
            <div style={{float: "left", width: "20%",textAlign:"center"}}>
            <Icon type="area-chart" onClick={this.handleClick}/>
            </div>
          </div>
        </div>
    )
  }
}
