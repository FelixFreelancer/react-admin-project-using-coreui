import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Label,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  CardFooter
} from "reactstrap";
import { AppSwitch } from "@coreui/react";

class Products extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Row>
                  <Col xs="3">
                    <h5>
                      <i className="icon-puzzle" /> Tel-Aviv Products
                    </h5>
                  </Col>
                  <Col xs="4">
                    <Label htmlFor="FilterLocation">
                      <h5>Filter by Location</h5>
                    </Label>
                    <Input type="select" name="employeeRole" id="employeeRole">
                      <option value="AllLocations">All Locations</option>
                      <option value="Tel-Aviv Encino">Tel-Aviv Encino</option>
                      <option value="Tel-Aviv Fish">Tel-Aviv Fish</option>
                      <option value="Tel-Aviv N. Hollywood">
                        Tel-Aviv N. Hollywood
                      </option>
                    </Input>
                  </Col>
                  <Col xs="5">
                    <Link to="./Products/addProduct">
                      <button class="float-right btn-pill btn btn-danger btn-lg">
                        + Add Product
                      </button>
                    </Link>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table responsive hover size="lg">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Brand</th>
                      <th>Edit</th>
                      <th>Enable/Disable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Link to="./Products/viewProduct">Product #1</Link>
                      </td>
                      <td>Brand</td>
                      <td>
                        <Link to="./Products/editProduct">
                          <i className="icon-note" />
                        </Link>
                      </td>
                      <td>
                        <AppSwitch
                          className={"mx-1"}
                          variant={"pill"}
                          color={"success"}
                          label
                          checked
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Product #1</td>
                      <td>Brand</td>
                      <td>
                        <i className="icon-note" />
                      </td>
                      <td>
                        <AppSwitch
                          className={"mx-1"}
                          variant={"pill"}
                          color={"success"}
                          label
                          checked
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Product #1</td>
                      <td>Brand</td>
                      <td>
                        <i className="icon-note" />
                      </td>
                      <td>
                        <AppSwitch
                          className={"mx-1"}
                          variant={"pill"}
                          color={"success"}
                          label
                          checked
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Product #1</td>
                      <td>Brand</td>
                      <td>
                        <i className="icon-note" />
                      </td>
                      <td>
                        <AppSwitch
                          className={"mx-1"}
                          variant={"pill"}
                          color={"success"}
                          label
                          checked
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem disabled>
                      <PaginationLink previous tag="button" />
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next tag="button" />
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
              <CardFooter />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Products;
