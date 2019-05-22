import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from "reactstrap";
import { AppSwitch } from "@coreui/react";
import { Link } from "react-router-dom";

class AllEmployee extends Component {
  state = {};
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Row>
                  <Col xs="10">
                    <h5>
                      <i className="icon-people" /> All Employees
                    </h5>
                  </Col>
                  <Col xs="2">
                    <Link to="./AddEmployee">
                      <button class="float-right btn-pill btn btn-danger btn-lg">
                        + Add Employee
                      </button>
                    </Link>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table responsive hover size="lg">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Contact Number</th>
                      <th>Role</th>
                      <th>Enable/Disable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Link to="./EditEmployee">David Smith</Link>
                      </td>
                      <td>888-888-8888</td>
                      <td>Manager</td>
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
                      <td>
                        <Link to="./EditEmployee">Dan L</Link>
                      </td>
                      <td>888-888-8888</td>
                      <td>Staff</td>
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
                      <td>
                        <Link to="./EditEmployee">Milo Louis</Link>
                      </td>
                      <td>888-888-8888</td>
                      <td>User</td>
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
                      <td>Alan Levy</td>
                      <td>888-888-8888</td>
                      <td>Owner</td>
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
                      <td>May Wiggle</td>
                      <td>888-888-8888</td>
                      <td>Staff</td>
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
                      <td>Al Romin</td>
                      <td>888-888-8888</td>
                      <td>Delivery Driver</td>
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

export default AllEmployee;
