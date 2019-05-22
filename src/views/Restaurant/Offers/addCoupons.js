import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";

class addCoupons extends Component {
  state = {};
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>
            <i className="icon-tag" />
            &nbsp;&nbsp; Create New Coupon
          </h5>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="2">
              <Label>
                <strong>Coupon Name</strong>
              </Label>
            </Col>
            <Col xs="2">
              <Label>
                <strong>Amount Off</strong>
              </Label>
            </Col>
            <Col xs="2">
              <Label>
                <strong>Valid From</strong>
              </Label>
            </Col>
            <Col xs="2">
              <Label>
                <strong>Valid Till</strong>
              </Label>
            </Col>
            <Col xs="2">
              <Label>
                <strong>Description</strong>
              </Label>
            </Col>
          </Row>
          <FormGroup row>
            <Col xs="2">
              <Input
                type="text"
                id="dishDiscount"
                name="dishDiscount"
                placeholder="Free Taco Monday"
              />
            </Col>
            <Col xs="2">
              <Input
                type="text"
                id="dishPrice"
                name="dishPrice"
                placeholder="11.95"
              />
            </Col>
            <Col xs="2">
              <Input
                type="date"
                id="date-input"
                name="date-input"
                placeholder="date"
              />
            </Col>
            <Col xs="2">
              <Input
                type="date"
                id="date-input"
                name="date-input"
                placeholder="date"
              />
            </Col>
            <Col xs="4">
              <Input
                type="text"
                id="dishDiscount"
                name="dishDiscount"
                placeholder="Get FREE Taco on Monday Baseball"
              />
            </Col>
          </FormGroup>
          <hr />
        </CardBody>
        <CardFooter>
          <Row>
            <Col xs="10">
              <Button
                type="submit"
                size="lg"
                color="primary"
                onSubmit={this.handleSubmit}
              >
                <i className="fa fa-dot-circle-o" /> Create
              </Button>
            </Col>
            <Col xs="2">
              <Button type="cancel" size="lg" color="danger">
                <i className="fa fa-ban" /> Cancel
              </Button>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
  }
}

export default addCoupons;
