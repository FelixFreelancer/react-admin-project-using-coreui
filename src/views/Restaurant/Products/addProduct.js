import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { AppSwitch } from "@coreui/react";
import ImgDropCrop from "../../../components/ImgDropCrop";

class addProduct extends Component {
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
    // console.log("event", event);
    // console.log("event name", event.target.name);
    // console.log("event value", event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Card>
        <Form
          action=""
          method="post"
          encType="multipart/form-data"
          className="form-horizontal"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <CardHeader>
            <Row>
              <Col xs="10">
                <h5>
                  <i className="fa fa-cutlery fa-lg" /> &nbsp;&nbsp;Add New Dish
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
            <FormGroup row>
              <Col xs="6">
                <FormGroup row className="my-0">
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="dishName">
                        <strong>Dish Name</strong>
                      </Label>
                      <Input
                        type="text"
                        id="dishName"
                        name="dishName"
                        placeholder="Dish Title"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="category">
                        <strong>Category</strong>
                      </Label>
                      <Input type="select" name="category" id="category">
                        <option value="1">Breakfast</option>
                        <option value="2">Lunch</option>
                        <option value="3">Desserts</option>
                        <option value="4">Beverages</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="dishInfo">
                    <strong>Dish Description</strong>
                  </Label>
                  <Input
                    type="textarea"
                    name="textarea-input"
                    id="textarea-input"
                    rows="4"
                    placeholder="Description ..."
                  />
                </FormGroup>
                <FormGroup row>
                  <Col xs="8">
                    <Label htmlFor="dishLocations">
                      <strong>Locations</strong>
                    </Label>
                    <FormGroup check className="checkbox">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox1"
                        name="checkbox1"
                        value="option1"
                      />
                      <Label
                        check
                        className="form-check-label"
                        htmlFor="checkbox1"
                      >
                        Option 1
                      </Label>
                    </FormGroup>
                    <FormGroup check className="checkbox">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox2"
                        name="checkbox2"
                        value="option2"
                      />
                      <Label
                        check
                        className="form-check-label"
                        htmlFor="checkbox2"
                      >
                        Option 2
                      </Label>
                    </FormGroup>
                    <FormGroup check className="checkbox">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox3"
                        name="checkbox3"
                        value="option3"
                      />
                      <Label
                        check
                        className="form-check-label"
                        htmlFor="checkbox3"
                      >
                        Option 3
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <Label>
                      Tags
                      <Input type="select" name="category" id="category">
                        <option value="1">Vegan</option>
                        <option value="2">Sugar-Free</option>
                      </Input>
                    </Label>
                  </Col>
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup row className="text-center">
                  <Col xs="12">
                    <Label htmlFor="text-input">
                      <strong>Select Image</strong>
                    </Label>
                    <br />
                    <ImgDropCrop />
                  </Col>
                </FormGroup>
              </Col>

              <Col xs="12">
                <FormGroup>
                  <Breadcrumb>
                    <BreadcrumbItem>
                      <h5>Variant Information</h5>
                    </BreadcrumbItem>
                  </Breadcrumb>
                </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="6">
                    <FormGroup row>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="dishChoices">
                            <strong>Dish Choices</strong>
                          </Label>
                          <Input
                            type="text"
                            id="dishChoice"
                            name="dishChoice"
                            placeholder="Half/Full/Bread Type"
                          />
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <Row>
                      <Col xs="2">
                        <Label htmlFor="dishDiscount">
                          <strong>Discount</strong>
                        </Label>
                      </Col>
                      <Col xs="2">
                        <Label htmlFor="dishPrice">
                          <strong>Dish Price</strong>
                        </Label>
                      </Col>
                      <Col xs="2">
                        <Label htmlFor="dishTotalPrice">
                          <strong>Total Price</strong>
                        </Label>
                      </Col>
                    </Row>
                    <FormGroup row>
                      <Col xs="2">
                        <Input
                          type="text"
                          id="dishDiscount"
                          name="dishDiscount"
                          placeholder="0/10"
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
                        <Input
                          type="text"
                          id="dishTotalPrice"
                          name="dishTotalPrice"
                          placeholder=""
                          disabled
                        />
                      </Col>
                      <Col xs="2">
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
                      </Col>
                    </FormGroup>
                    <hr />
                    <Button type="submit" size="md" color="success">
                      <i className="fa fa-plus-square-o" />
                      &nbsp;&nbsp;Add Dish Choices
                    </Button>
                  </Col>
                  {/* Secound Row */}
                  <Col xs="6">
                    <Row>
                      <Col xs="4">
                        <Label htmlFor="dishOption">
                          <strong>Dish Add-On Option</strong>
                        </Label>
                      </Col>
                      <Col xs="2">
                        <Label htmlFor="dishOptionPrice">
                          <strong>Price</strong>
                        </Label>
                      </Col>
                    </Row>
                    <FormGroup row className="my-0">
                      <Col xs="4">
                        <FormGroup>
                          <Input
                            type="text"
                            id="dishName"
                            name="dishName"
                            placeholder="Extra Bread"
                          />
                        </FormGroup>
                      </Col>
                      <Col xs="2">
                        <FormGroup>
                          <Input
                            type="text"
                            id="dishOptionPrice"
                            name="dishOptionPrice"
                            placeholder="1.95"
                          />
                        </FormGroup>
                      </Col>
                      <Col xs="2">
                        <FormGroup>
                          <Button
                            color="danger"
                            onClick={this.toggleDeleteOption}
                            className="mr-1"
                          >
                            <i className="fa fa-trash" />
                          </Button>
                          <Modal
                            isOpen={this.state.DeleteOption}
                            toggle={this.toggleDeleteOption}
                            className={"modal-danger " + this.props.className}
                          >
                            <ModalHeader toggle={this.toggleDeleteOption}>
                              DELETE OPTION
                            </ModalHeader>
                            <ModalBody>
                              Delete is option from your Dish add-ons (canot be
                              undone)
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="danger"
                                onClick={this.toggleDeleteOption}
                              >
                                Do Something
                              </Button>{" "}
                              <Button
                                color="secondary"
                                onClick={this.toggleDeleteOption}
                              >
                                Cancel
                              </Button>
                            </ModalFooter>
                          </Modal>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <hr />
                    <Button type="submit" size="md" color="success">
                      <i className="fa fa-plus-square-o" />
                      &nbsp;&nbsp;Add Dish Option
                    </Button>
                  </Col>
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
        </Form>
      </Card>
    );
  }
}

export default addProduct;
