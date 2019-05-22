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
import { AppSwitch } from "@coreui/react";

class LoyaltyProgram extends Component {
  state = {};
  render() {
    return (
      <Card>
        <CardHeader>
          <Row>
            <Col xs="10">
              <h5>
                <i className="icon-loop" /> &nbsp;&nbsp;Loyality Program
              </h5>
            </Col>
            <Col xs="2">
              <AppSwitch
                className={"mx-1"}
                variant={"pill"}
                color={"success"}
                label
                name="catSwitch"
                checked
                onChange={this.handleChange}
              />
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="2">
              <Label>
                <strong>Min Points</strong>
              </Label>
            </Col>
            <Col xs="2">
              <Label htmlFor="dishPrice">
                <strong>Min Order Amount</strong>
              </Label>
            </Col>
            <Col xs="2">
              <Label htmlFor="dishTotalPrice">
                <strong>Percentage Off</strong>
              </Label>
            </Col>
          </Row>
          <FormGroup row>
            <Col xs="2">
              <Input
                type="text"
                id="dishDiscount"
                name="dishDiscount"
                placeholder="10"
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
              <FormGroup>
                <div className="controls">
                  <InputGroup>
                    <Input
                      id="appendedInput"
                      size="16"
                      type="text"
                      placeholder="10"
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>%</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <span className="help-block">Here's more help text</span>
                </div>
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

export default LoyaltyProgram;
