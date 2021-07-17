import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-bg">
        <h2>ยินดีตอนรับจ้า</h2>
        <h1>เลือกหมวดมหมู่ที่ต้องการ</h1>
        <h3>สินค้าที่แสดงอยู่เป็นสินค้าที่ได้รับการรีวิวแล้วเท่านั้น</h3>
        <p>คลิกเครื่องหมาย "+" เพื่อเก็บลิ้งไว้ใช้</p>
        <div className="btn-selector">
          <Row>
            <Col md={3}>
              <Button variant="danger" active="true">
                ทั่วไป
              </Button>
            </Col>
            <Col md={3}>
              <Button variant="danger" active="false">
                อุปกรณ์ทำงาน
              </Button>
            </Col>
            <Col md={3}>
              <Button variant="danger" active="false">
                ของเด็ก
              </Button>
            </Col>
            <Col md={3}>
              <Button variant="danger" active="false">
                ห้องครัว
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Header;
