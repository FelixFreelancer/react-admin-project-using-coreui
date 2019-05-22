import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row
} from "reactstrap";
import { AppSwitch } from "@coreui/react";

class Coupons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DeleteChoices: false,
      DeleteOption: false
    };
    this.toggleDeleteChoices = this.toggleDeleteChoices.bind(this);
    this.toggleDeleteOption = this.toggleDeleteOption.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //console.log("Constructor", this.state);
  }

  toggleDeleteChoices() {
    this.setState({
      DeleteChoices: !this.state.DeleteChoices
    });
  }
  toggleDeleteOption() {
    this.setState({
      DeleteOption: !this.state.DeleteOption
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Row>
                  <Col xs="6">
                    <h5>
                      <i className="icon-tag" />
                      &nbsp;&nbsp; Coupons
                    </h5>
                  </Col>
                  <Col xs="6">
                    <Link to="./addCoupons">
                      <button class="float-right btn-pill btn btn-danger btn-lg">
                        + Add Coupons
                      </button>
                    </Link>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table responsive hover size="lg">
                  <thead>
                    <tr>
                      <th>Coupon Name</th>
                      <th>Amount Off</th>
                      <th>Valid From</th>
                      <th>Valid Till</th>
                      <th>Status</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>10% Off</p>
                      </td>
                      <td>
                        <p>10%</p>
                      </td>
                      <td>
                        <p>Apr 21, 2019</p>
                      </td>
                      <td>
                        <p>May 25, 2019</p>
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
                      <td>
                        <Link to="./addCoupons">
                          <i className="icon-note" />
                        </Link>
                      </td>
                      <td>
                        <Button
                          color="danger"
                          onClick={this.toggleDeleteChoices}
                          className="mr-1"
                        >
                          <i className="fa fa-trash" />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>5% Off Falafel</p>
                      </td>
                      <td>
                        <p>5%</p>
                      </td>
                      <td>
                        <p>Apr 11, 2019</p>
                      </td>
                      <td>
                        <p>May 15, 2019</p>
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
                      <td>
                        <Link to="./Products/editProduct">
                          <i className="icon-note" />
                        </Link>
                      </td>
                      <td>
                        <Button
                          color="danger"
                          onClick={this.toggleDeleteChoices}
                          className="mr-1"
                        >
                          <i className="fa fa-trash" />
                        </Button>
                        <Modal
                          isOpen={this.state.DeleteChoices}
                          toggle={this.toggleDeleteChoices}
                          className={"modal-danger " + this.props.className}
                        >
                          <ModalHeader toggle={this.toggleDeleteChoices}>
                            DELETE CHOICES
                          </ModalHeader>
                          <ModalBody>
                            Delete is choices from your Dish (canot be undone)
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="danger"
                              onClick={this.toggleDeleteChoices}
                            >
                              Do Something
                            </Button>{" "}
                            <Button
                              color="secondary"
                              onClick={this.toggleDeleteChoices}
                            >
                              Cancel
                            </Button>
                          </ModalFooter>
                        </Modal>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Coupons;
