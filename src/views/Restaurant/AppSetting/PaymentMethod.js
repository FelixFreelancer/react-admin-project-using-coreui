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

class PaymentMethod extends Component {
  state = {};
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>
            <i className="icon-credit-card" />
            &nbsp;&nbsp;Payment Method
          </h5>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="2">
              <Label>
                <strong>Merchant Name</strong>
              </Label>
            </Col>
            <Col xs="2">
              <Label>
                <strong>User ID</strong>
              </Label>
            </Col>
            <Col xs="4">
              <Label>
                <strong>Merchant Account#</strong>
              </Label>
            </Col>
            <Col xs="2">
              <Label>
                <strong>Checkout Options</strong>
              </Label>
            </Col>
          </Row>
          <FormGroup row className="my-0">
            <Col xs="2">
              <FormGroup>
                <Input
                  type="text"
                  id="taxRate"
                  name="taxRate"
                  placeholder="PayPal"
                />
              </FormGroup>
            </Col>
            <Col xs="2">
              <FormGroup>
                <Input
                  type="text"
                  id="taxRate"
                  name="taxRate"
                  placeholder="User ID"
                />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Input
                  type="text"
                  id="taxRate"
                  name="taxRate"
                  placeholder="123456789"
                />
              </FormGroup>
            </Col>
            <Col xs="2">
              <FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox2"
                    name="checkbox2"
                    value="option2"
                  />
                  <Label check className="form-check-label" htmlFor="checkbox2">
                    Apple Pay
                  </Label>
                </FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox2"
                    name="checkbox2"
                    value="option2"
                  />
                  <Label check className="form-check-label" htmlFor="checkbox2">
                    Google Pay
                  </Label>
                </FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    value="option1"
                  />
                  <Label check className="form-check-label" htmlFor="checkbox1">
                    Visa/MasterCard
                  </Label>
                </FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox2"
                    name="checkbox2"
                    value="option2"
                  />
                  <Label check className="form-check-label" htmlFor="checkbox2">
                    American Express
                  </Label>
                </FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                    name="checkbox3"
                    value="option3"
                  />
                  <Label check className="form-check-label" htmlFor="checkbox3">
                    Discover Card
                  </Label>
                </FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                    name="checkbox3"
                    value="option3"
                  />
                  <Label check className="form-check-label" htmlFor="checkbox3">
                    PayPal
                  </Label>
                </FormGroup>
              </FormGroup>
            </Col>
            <Col xs="2">
              <FormGroup>
                <Button
                  type="submit"
                  size="md"
                  color="success"
                  onSubmit={this.handleSubmit}
                >
                  <i className="fa fa-plus-square-o" />
                  &nbsp;&nbsp;Add Merchant
                </Button>
              </FormGroup>
            </Col>
          </FormGroup>
          <br />
          <br />
          <hr />
        </CardBody>
        <CardFooter>
          <Row />
        </CardFooter>
      </Card>
    );
  }
}

export default PaymentMethod;
