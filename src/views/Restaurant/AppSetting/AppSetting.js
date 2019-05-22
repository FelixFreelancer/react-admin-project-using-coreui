import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Label,
  Row,
  Table
} from "reactstrap";

class AppSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <h5>
            <i className="cui-screen-smartphone icons font-2xl mt-4" /> App
            Setting Summary
          </h5>
        </CardHeader>

        <CardBody>
          <Row>
            <Col xs="12" md="8">
              <Card className="card-accent-primary">
                <CardHeader className="text-center">
                  <strong>APP THEME</strong>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="6">
                      <Label>
                        <strong>Banner</strong>: ON
                      </Label>
                      <br />
                      <Label>
                        <strong>App Color</strong>: Red
                      </Label>
                      <br />
                      <Label>
                        <strong>About Us</strong>: Best Store in Town...
                      </Label>
                    </Col>
                    <Col xs="6" className="text-center">
                      Banner Image
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
                  <strong>STATE TAX</strong>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="6">
                      <Label>
                        <strong>Tel-Aviv Encino</strong>: 9.75%
                      </Label>
                      <br />
                      <Label>
                        <strong>Tel-Aviv Fish</strong>: 9.50%
                      </Label>
                      <br />
                      <Label>
                        <strong>Tel-Aviv N. Hollywood</strong>: 9.50%
                      </Label>
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
                  <strong>PAYMENTS METHOD</strong>
                </CardHeader>
                <CardBody>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>Payment Option</th>
                        <th>Active</th>
                        <th>Dish Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Apple Pay</td>
                        <td>
                          <i className="fa fa-check fa-lg float-left" />
                        </td>
                        <td>Setting</td>
                      </tr>
                      <tr>
                        <td>Google Pay</td>
                        <td>
                          <i className="fa fa-check fa-lg float-left" />
                        </td>
                        <td>Setting</td>
                      </tr>
                      <tr>
                        <td>Visa/MasterCard</td>
                        <td>
                          <i className="fa fa-check fa-lg float-left" />
                        </td>
                        <td>Setting</td>
                      </tr>
                      <tr>
                        <td>American Express</td>
                        <td>
                          <i className="fa fa-close fa-lg float-left" />
                        </td>
                        <td>Click to Set Up</td>
                      </tr>
                      <tr>
                        <td>Discover Card</td>
                        <td>
                          <i className="fa fa-check fa-lg float-left" />
                        </td>
                        <td>Setting</td>
                      </tr>
                      <tr>
                        <td>PayPal</td>
                        <td>
                          <i className="fa fa-close fa-lg float-left" />
                        </td>
                        <td>Click to Set Up</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs="12" md="8">
              <Card className="card-accent-primary">
                <CardHeader className="text-center">
                  <strong>STORE HOURS</strong>
                </CardHeader>
                <CardBody>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>Week Day</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Monday</td>
                        <td>10AM ~ 10PM</td>
                      </tr>
                      <tr>
                        <td>Tuesday</td>
                        <td>10AM ~ 10PM</td>
                      </tr>
                      <tr>
                        <td>Wednesday</td>
                        <td>10AM ~ 10PM</td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td>10AM ~ 10PM</td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td>10AM ~ 8PM</td>
                      </tr>
                      <tr>
                        <td>Saturday</td>
                        <td>Closed</td>
                      </tr>
                      <tr>
                        <td>Sunday</td>
                        <td>11AM ~ 8PM</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs="12" md="8">
              <Card className="card-accent-primary">
                <CardHeader className="text-center">
                  <strong>DELIVERY AREAS</strong>
                </CardHeader>
                <CardBody>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>Store</th>
                        <th>Free Delivery</th>
                        <th>Delivery</th>
                        <th>Charged Areas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tel-Aviv Encino</td>
                        <td>
                          <i className="fa fa-check fa-lg float-left" />
                        </td>
                        <td>$15.00</td>
                        <td>91367, 91335, 91304</td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>
                          <i className="fa fa-check fa-lg float-left" />
                        </td>
                        <td>Setting</td>
                      </tr>
                      <tr>
                        <td>Tel-Aviv Fish</td>
                        <td>
                          <i className="fa fa-close fa-lg float-left" />
                        </td>
                        <td>$17.00</td>
                        <td>91344, 91335, 91455</td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>
                          <i className="fa fa-check fa-lg float-left" />
                        </td>
                        <td>Setting</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs="12" md="8">
              <Card className="card-accent-primary">
                <CardHeader className="text-center">
                  <strong>DELIVERY AREA</strong>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="6">
                      <Label>
                        <strong>Dish Title</strong>: Dish Title
                      </Label>
                      <br />
                      <Label>
                        <strong>Category</strong>: Category
                      </Label>
                      <br />
                      <Label>
                        <strong>Description</strong>: Description ...
                      </Label>
                    </Col>
                    <Col xs="6" className="text-center">
                      Product Image
                    </Col>
                  </Row>
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

export default AppSetting;
