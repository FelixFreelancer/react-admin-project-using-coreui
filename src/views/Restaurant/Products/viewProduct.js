import React, { Component } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Label,
  Row,
  Table
} from "reactstrap";
//import ProductImage from "../../../public/Resturants/Tel-Aviv/App/Products/Productimage.jpg";

class viewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <Row>
            <Col xs="10">
              <h5>
                <i className="fa fa-cutlery fa-lg" /> &nbsp;&nbsp;(Dish Name)
                Details
              </h5>
            </Col>
          </Row>
        </CardHeader>

        <CardBody>
          <Row>
            <Col xs="12" md="8">
              <Card className="card-accent-primary">
                <CardHeader className="text-center">
                  <strong>PRODUCT DETAILS</strong>
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
                      <img alt={"alt-description"}
                        src={
                          "/Resturants/Tel-Aviv/App/Products/Productimage.jpg"
                        }
                      />
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
                  <strong>AVILABLE LOCATIONS</strong>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="6">
                      <Label>
                        <strong>Tel-Aviv Encino</strong>:{" "}
                        <Badge color="success">Yes</Badge>
                      </Label>
                      <br />
                      <Label>
                        <strong>Tel-Aviv Fish</strong>:{" "}
                        <Badge color="success">Yes</Badge>
                      </Label>
                      <br />
                      <Label>
                        <strong>Tel-Aviv N. Hollywood</strong>:{" "}
                        <Badge color="secondary">No</Badge>
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
                  <strong>CHOICES VARIANTS</strong>
                </CardHeader>
                <CardBody>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>Dish Choices</th>
                        <th>Discount</th>
                        <th>Dish Price</th>
                        <th>Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Falafel Plate</td>
                        <td>0%</td>
                        <td>$11.95</td>
                        <td>$11.95</td>
                      </tr>
                      <tr>
                        <td>Falafel Pita</td>
                        <td>10%</td>
                        <td>$10.95</td>
                        <td>$9.85</td>
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
                  <strong>OPTION VARIANTS</strong>
                </CardHeader>
                <CardBody>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>Dish Add-On Option</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>French Fries</td>
                        <td>$0.00</td>
                      </tr>
                      <tr>
                        <td>Tehina</td>
                        <td>$0.00</td>
                      </tr>
                      <tr>
                        <td>Extra Bread</td>
                        <td>$1.95</td>
                      </tr>
                      <tr>
                        <td>Hummus</td>
                        <td>$2.50</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default viewProduct;
