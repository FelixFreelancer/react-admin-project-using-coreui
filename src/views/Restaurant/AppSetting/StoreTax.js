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
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row
} from "reactstrap";
// import ImgDropCrop from "../../../components/ImgDropCrop";

//https://github.com/casesandberg/react-color
//https://casesandberg.github.io/react-color/

class StoreTax extends Component {
  state = {};
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>
            <i className="icon-calculator" />
            &nbsp;&nbsp;State Tax
          </h5>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="4">
              <Label>
                <strong>Tax Name</strong>
              </Label>
            </Col>
            <Col xs="2">
              <Label>
                <strong>Tax Rate</strong>
              </Label>
            </Col>
          </Row>
          <FormGroup row className="my-0">
            <Col xs="4">
              <FormGroup>
                <Input
                  type="text"
                  id="taxRate"
                  name="taxRate"
                  placeholder="LA County Tax"
                />
              </FormGroup>
            </Col>
            <Col xs="2">
              <FormGroup>
                <InputGroup className="input-prepend">
                  <Input id="taxName" type="text" placeholder="2.5" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>%</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
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
                  &nbsp;&nbsp;Add New State Tax
                </Button>
              </FormGroup>
            </Col>
          </FormGroup>
          <br />
          <br />
          <hr />
          <Row>
            <Col xs="4">
              <Label>
                <strong>Tax Name</strong>
              </Label>
            </Col>
            <Col xs="2">
              <Label>
                <strong>Tax Rate</strong>
              </Label>
            </Col>
          </Row>
          <FormGroup row className="my-0">
            <Col xs="4">
              <FormGroup>
                <Input type="text" id="taxRate" name="taxRate" />
              </FormGroup>
            </Col>
            <Col xs="2">
              <FormGroup>
                <InputGroup className="input-prepend">
                  <Input id="taxName" type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>%</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col xs="2">
              <FormGroup>
                <Button
                  type="submit"
                  size="md"
                  color="primary"
                  onSubmit={this.handleSubmit}
                >
                  <i className="fa fa-dot-circle-o" /> Update
                </Button>
              </FormGroup>
            </Col>
          </FormGroup>
        </CardBody>
        <CardFooter>
          <Row />
        </CardFooter>
      </Card>
    );
  }
}
export default StoreTax;
