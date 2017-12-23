import React from "react";
import { Layout, Avatar, Row, Col} from 'antd';
import './Dashboard.css';
import Dashboard from "./Dashboard";

const { Header, Content, Footer } = Layout;

export default class LayoutPage extends React.Component {
	constructor() {
		super();
		this.state = {chart : 'chart area'}
	}

  render() {
    return (
    	<div style={{height:"100%", width:"100%"}}>
      	<Layout style={{minHeight:"100%"}}>
          <Header style={{ position: 'fixed', width: '100%', zIndex: 1000, background:"#3d3a71" }}>             
              <Row gutter={16}>
                <Col className="gutter-row" span={4}>
                  <h3 style={{color:"white"}}>Crypto Currency</h3>
                </Col>
                <Col className="gutter-row loginIcon" span={1}>
                  
                    <Avatar size="large" icon="user" />
                  
                </Col>
              </Row>
          </Header>
          <Content style={{marginTop: 64,padding: 20}}>            
            <div> <Dashboard/></div>
          </Content>
        </Layout>
      </div>
  	)
  }
}
