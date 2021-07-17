import React, { Component } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import logo from "../../lazada-images/logo.png";
import { PlusLg } from "react-bootstrap-icons";
import "./links.css";

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="links">
        <Container>
          <Row>
            <Col md={3} className="box-links-product">
              <Image
                src="https://pagexl.ams3.digitaloceanspaces.com/template-images/beauty-1.jpg"
                rounded
              />
              <span className="product-name">หน้ากากอนามัย</span>
              <span>24 ฿</span>
              <span>แมส หน้ากากอนามัยสีฟ้า 3ชั้น 1 กล่องมี 50 ชิ้น</span>
              <PlusLg className="plus-icon" />
            </Col>
            <Col md={3} className="box-links-product">
              <Image
                src="https://pagexl.ams3.digitaloceanspaces.com/template-images/beauty-1.jpg"
                rounded
              />
              <span className="product-name">หน้ากากอนามัย</span>
              <span>24 ฿</span>
              <span>แมส หน้ากากอนามัยสีฟ้า 3ชั้น 1 กล่องมี 50 ชิ้น</span>
              <PlusLg className="plus-icon" />
            </Col>{" "}
            <Col md={3} className="box-links-product">
              <Image
                src="https://pagexl.ams3.digitaloceanspaces.com/template-images/beauty-1.jpg"
                rounded
              />
              <span className="product-name">หน้ากากอนามัย</span>
              <span>24 ฿</span>
              <span>แมส หน้ากากอนามัยสีฟ้า 3ชั้น 1 กล่องมี 50 ชิ้น</span>
              <PlusLg className="plus-icon" />
            </Col>{" "}
            <Col md={3} className="box-links-product">
              <Image
                src="https://pagexl.ams3.digitaloceanspaces.com/template-images/beauty-1.jpg"
                rounded
              />
              <span className="product-name">หน้ากากอนามัย</span>
              <span>24 ฿</span>
              <span>แมส หน้ากากอนามัยสีฟ้า 3ชั้น 1 กล่องมี 50 ชิ้น</span>
              <PlusLg className="plus-icon" />
            </Col>{" "}
            <Col md={3} className="box-links-product">
              <Image
                src="https://pagexl.ams3.digitaloceanspaces.com/template-images/beauty-1.jpg"
                rounded
              />
              <span className="product-name">หน้ากากอนามัย</span>
              <span>24 ฿</span>
              <span>แมส หน้ากากอนามัยสีฟ้า 3ชั้น 1 กล่องมี 50 ชิ้น</span>
              <PlusLg className="plus-icon" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Links;
