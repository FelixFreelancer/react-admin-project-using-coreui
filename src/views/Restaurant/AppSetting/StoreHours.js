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
  Row,
} from "reactstrap";
// import { AppSwitch } from "@coreui/react";
// import axios from "axios";

class StoreHours extends Component {
  state = {};
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>
            <i className="icon-clock" />
            &nbsp;&nbsp; Store Hours
          </h5>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="12" md="8">
              <CardBody>
                <Row>
                  <Col xs="2">
                    <Label>
                      <strong>Day</strong>
                    </Label>
                  </Col>
                  <Col xs="2">
                    <Label>
                      <strong>Open Time</strong>
                    </Label>
                  </Col>
                  <Col xs="2">
                    <Label htmlFor="dishTotalPrice">
                      <strong>Close Time</strong>
                    </Label>
                  </Col>
                </Row>
                <FormGroup row>
                  <Col xs="2">
                    <Input type="select" name="openDay" id="openDay">
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                      <option>Sunday</option>
                    </Input>
                  </Col>
                  <Col xs="2">
                    <Input type="select" name="openDay" id="openDay">
                      <option>CLOSED</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option selected>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </Input>
                  </Col>
                  <Col xs="2">
                    <Input type="select" name="openDay" id="openDay">
                      <option>CLOSED</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option selected>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </Input>
                  </Col>
                  <Col xs="2">
                    <Button
                      type="submit"
                      size="md"
                      color="primary"
                      onSubmit={this.handleSubmit}
                    >
                      <i className="fa fa-dot-circle-o" /> Update
                    </Button>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="2">
                    <Input type="select" name="openDay" id="openDay">
                      <option>Monday</option>
                      <option selected>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                      <option>Sunday</option>
                    </Input>
                  </Col>
                  <Col xs="2">
                    <Input type="select" name="openDay" id="openDay">
                      <option>CLOSED</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option selected>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </Input>
                  </Col>
                  <Col xs="2">
                    <Input type="select" name="openDay" id="openDay">
                      <option>CLOSED</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option selected>11 PM</option>
                      <option>12 PM</option>
                    </Input>
                  </Col>
                  <Col xs="2">
                    <Button
                      type="submit"
                      size="md"
                      color="primary"
                      onSubmit={this.handleSubmit}
                    >
                      <i className="fa fa-dot-circle-o" /> Update
                    </Button>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="2">
                    <Input type="select" name="openDay" id="openDay">
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option selected>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                      <option>Sunday</option>
                    </Input>
                  </Col>
                  <Col xs="2">
                    <Input type="select" name="openDay" id="openDay">
                      <option>CLOSED</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </Input>
                  </Col>
                  <Col xs="2">
                    <Input type="select" name="openDay" id="openDay">
                      <option>CLOSED</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </Input>
                  </Col>
                  <Col xs="2">
                    <Button
                      type="submit"
                      size="md"
                      color="primary"
                      onSubmit={this.handleSubmit}
                    >
                      <i className="fa fa-dot-circle-o" /> Update
                    </Button>
                  </Col>
                </FormGroup>
              </CardBody>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <Row />
        </CardFooter>
      </Card>
    );
  }
}

export default StoreHours;
