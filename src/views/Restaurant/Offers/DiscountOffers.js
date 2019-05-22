import React, { Component } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Label,
  Row,
  Table
} from "reactstrap";

class DiscountOffers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <h5>
            <i className="cui-screen-smartphone icons font-2xl" />
            Discount & Offers Summary
          </h5>
        </CardHeader>

        <CardBody>
          <Row>
            <Col xs="12" md="8">
              <Card className="card-accent-primary">
                <CardHeader className="text-center">
                  <strong>COUPON'S</strong>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="3">
                      <Label>
                        <strong>10% Off</strong>
                      </Label>
                    </Col>
                    <Col xs="3">
                      <Badge color="success" className="float-left">
                        ACTIVE
                      </Badge>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                      <Label>
                        <strong>5% Off Falafel</strong>
                      </Label>
                    </Col>
                    <Col xs="3">
                      <Badge color="secondary" className="float-left">
                        OFF
                      </Badge>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs="12" md="8">
              <Card className="card-accent-primary">
                <CardHeader className="text-center">
                  <strong>LOYALITY PROGRAM</strong>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="3">
                      <Label>
                        <strong>Min Points</strong>
                      </Label>
                    </Col>
                    <Col xs="3">
                      <Label>
                        <strong>Min Order Amount</strong>
                      </Label>
                    </Col>
                    <Col xs="3">
                      <Label>
                        <strong>Percentage Off</strong>
                      </Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                      <Label>
                        <p>10</p>
                      </Label>
                    </Col>
                    <Col xs="3">
                      <Label>
                        <p>$11.95</p>
                      </Label>
                    </Col>
                    <Col xs="3">
                      <Label>
                        <p>10%</p>
                      </Label>
                    </Col>
                    <Col xs="3">
                      <Badge color="success" className="float-right">
                        ACTIVE
                      </Badge>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs="12" md="8">
              <Card className="card-accent-primary">
                <CardHeader className="text-center">
                  <strong>NOTIFICATION</strong>
                </CardHeader>
                <CardBody>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>Message Title</th>
                        <th>Last Send</th>
                        <th>Number of Times</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Free Taco!</td>
                        <td>4/18/2019</td>
                        <td>
                          <Badge className="float-left" pill>
                            17
                          </Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>Buy 1 Get 1 Free</td>
                        <td>4/21/2019</td>
                        <td>
                          <Badge className="float-left" pill>
                            14
                          </Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>Free Delivery Over $50</td>
                        <td>4/18/2019</td>
                        <td>
                          <Badge className="float-left" pill>
                            12
                          </Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>Double Points</td>
                        <td>4/18/2019</td>
                        <td>
                          <Badge className="float-left" pill>
                            19
                          </Badge>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
        <CardFooter />
      </Card>
    );
  }
}

export default DiscountOffers;
