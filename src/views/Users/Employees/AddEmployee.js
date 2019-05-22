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
  Breadcrumb,
  BreadcrumbItem,
  Row
} from "reactstrap";

class AddEmployee extends Component {
  state = {};
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>
            <i className="icon-people" /> Add Employee
          </h5>
        </CardHeader>
        <CardBody>
          <FormGroup row className="my-0">
            <Col xs="4">
              <FormGroup>
                <Label htmlFor="employeeName">
                  <strong>Employee</strong>
                </Label>
                <Input
                  type="text"
                  id="employeeName"
                  placeholder="Employee Name"
                />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label htmlFor="employeeRole">
                  <strong>Employee Role</strong>
                </Label>
                <Input type="select" name="employeeRole" id="employeeRole">
                  <option value="Staff">Staff</option>
                  <option value="Driver">Driver</option>
                  <option value="Manager">Manager</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label htmlFor="employeePassword">
                  <strong>Password</strong>
                </Label>
                <Input
                  type="text"
                  id="employeePassword"
                  placeholder="Password"
                />
              </FormGroup>
            </Col>
          </FormGroup>
          <Breadcrumb>
            <BreadcrumbItem>
              <h5>Employee Information</h5>
            </BreadcrumbItem>
          </Breadcrumb>
          <FormGroup row className="my-0">
            <Col xs="6">
              <FormGroup>
                <Label htmlFor="employeeEmail">
                  <strong>Employee Email Address</strong>
                </Label>
                <Input
                  type="text"
                  id="employeeEmail"
                  placeholder="Employee Email"
                />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Label htmlFor="phone-number">
                  <strong>Employee Phone Number</strong>
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
            <Col xs="4">
              <FormGroup>
                <Label htmlFor="city">
                  <strong>City</strong>
                </Label>
                <Input type="text" id="city" placeholder="Enter Your City" />
              </FormGroup>
            </Col>
            <Col xs="4">
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
                <i className="fa fa-dot-circle-o" /> Add Employee
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

export default AddEmployee;
