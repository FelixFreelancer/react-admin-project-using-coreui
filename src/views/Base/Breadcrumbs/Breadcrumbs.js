import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from "reactstrap";
import {Link} from 'react-router-dom'
class Breadcrumbs extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Breadcrumbs</strong>
                <div className="card-header-actions">
                  <Link
                    to="https://reactstrap.github.io/components/breadcrumbs/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </Link>
                </div>
              </CardHeader>
              <CardBody>
                <Breadcrumb>
                  <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                  {/*eslint-disable-next-line*/}
                  <BreadcrumbItem>
                    <Link to="#">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Library</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                  {/*eslint-disable-next-line*/}
                  <BreadcrumbItem>
                    <Link to="#">Home</Link>
                  </BreadcrumbItem>
                  {/* eslint-disable-next-line*/}
                  <BreadcrumbItem>
                    <Link to="#">Library</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Data</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb tag="nav">
                  <BreadcrumbItem tag="a" href="#">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    Library
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    Data
                  </BreadcrumbItem>
                  <BreadcrumbItem active tag="span">
                    Bootstrap
                  </BreadcrumbItem>
                </Breadcrumb>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Breadcrumbs;
