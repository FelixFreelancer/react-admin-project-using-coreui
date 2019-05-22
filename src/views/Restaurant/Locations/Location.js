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
import { AppSwitch } from "@coreui/react";

class Location extends Component {
  state = {};
  render() {
    return (
      <Card>
        <CardHeader>
          <Row>
            <Col xs="10">
              <h5>
                <i className="icon-location-pin" /> Edit Location
              </h5>
            </Col>
            <Col xs="2">
              <AppSwitch
                className={"mx-1"}
                variant={"pill"}
                color={"success"}
                label
                checked
              />
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label htmlFor="location">
              <strong>Location</strong>
            </Label>
            <Input type="text" id="location" placeholder="Location Name" />
          </FormGroup>
          <FormGroup row className="my-0">
            <Col xs="6">
              <FormGroup>
                <Label htmlFor="manager">
                  <strong>Location Manager</strong>
                </Label>
                <Input type="select" name="employeeRole" id="employeeRole">
                  <option value="1">Alan Levy</option>
                  <option value="2">David Smith</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Label htmlFor="phone-number">
                  <strong>Location Phone Number</strong>
                </Label>
                <Input type="text" id="phone-number" placeholder="Phone #" />
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="street">
              <strong>Street Address</strong>
            </Label>
            <Input type="text" id="street" placeholder="Street Name" />
          </FormGroup>
          <FormGroup row className="my-0">
            <Col xs="6">
              <FormGroup>
                <Label htmlFor="city">
                  <strong>City</strong>
                </Label>
                <Input type="text" id="city" placeholder="Enter Your City" />
              </FormGroup>
            </Col>
            <Col xs="2">
              <FormGroup>
                <Label htmlFor="state">
                  <strong>State</strong>
                </Label>
                <Input type="text" id="state" placeholder="State" />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label htmlFor="postal-code">
                  <strong>Postal Code</strong>
                </Label>
                <Input type="text" id="postal-code" placeholder="Postal Code" />
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="aboutus">
              <strong>About Store</strong>
            </Label>
            <Input
              type="textarea"
              name="textarea-input"
              id="textarea-input"
              rows="4"
              placeholder="About us..."
            />
          </FormGroup>
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
                <i className="fa fa-dot-circle-o" /> Update Location
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

export default Location;
