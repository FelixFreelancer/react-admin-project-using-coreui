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

class DeliveryArea extends Component {
  state = {};
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>
            <i className="icon-map" />
            &nbsp;&nbsp; Delivery Area's & Settings
          </h5>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="2">
              <Label>
                <strong>Delivery Time</strong>
              </Label>
            </Col>
            <Col xs="2">
              <Label>
                <strong>Delivery Price</strong>
              </Label>
            </Col>
          </Row>
          <FormGroup row>
            <Col xs="2">
              <Input
                type="text"
                id="dishDiscount"
                name="dishDiscount"
                placeholder="20-30 min"
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
          </FormGroup>
          <FormGroup row>
            <Col xs="2">
              <FormGroup check className="checkbox">
                <Input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox3"
                  name="checkbox3"
                  value="option3"
                />
                <Label check className="form-check-label" htmlFor="checkbox3">
                  Free Delivery
                </Label>
              </FormGroup>
            </Col>
            <Col xs="2">
              <Label>
                <strong>Minimum Order Amount</strong>
              </Label>
              <Input
                type="text"
                id="dishDiscount"
                name="dishDiscount"
                placeholder="25"
              />
            </Col>
          </FormGroup>

          <br />
          <FormGroup row className="my-0">
            <Col xs="6">
              <Row>
                <Col xs="6">
                  <Label>
                    <strong>Add Zip Codes for Delivery</strong>
                  </Label>
                </Col>
              </Row>
              <FormGroup row>
                <Col xs="2">
                  <Input
                    type="text"
                    id="dishDiscount"
                    name="dishDiscount"
                    placeholder="Zip Code"
                  />
                </Col>
                <Col xs="2">
                  <Button color="success" className="mr-1">
                    <i className="fa fa-plus" />
                  </Button>
                </Col>
              </FormGroup>
            </Col>
            <Col xs="6">
              <Row>
                <Col xs="6">
                  <Label>
                    <strong>Approved Zip Codes for Delivery</strong>
                  </Label>
                </Col>
              </Row>
              <FormGroup row>
                <Col xs="2">
                  <p class="lead">91335</p>
                </Col>
                <Col xs="2">
                  <Button
                    color="danger"
                    onClick={this.toggleDeleteZipcode}
                    className="mr-1"
                  >
                    <i className="fa fa-trash" />
                  </Button>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs="2">
                  <p class="lead">91335</p>
                </Col>
                <Col xs="2">
                  <Button
                    color="danger"
                    onClick={this.toggleDeleteZipcode}
                    className="mr-1"
                  >
                    <i className="fa fa-trash" />
                  </Button>
                </Col>
              </FormGroup>
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
                <i className="fa fa-dot-circle-o" /> Update
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

export default DeliveryArea;
