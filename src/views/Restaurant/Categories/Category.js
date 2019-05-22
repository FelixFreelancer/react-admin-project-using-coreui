import React, { Component } from "react";
import axios from "axios";
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
  Row
} from "reactstrap";
import { AppSwitch } from "@coreui/react";

import { Constants } from "../../../constants/environment";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      imageUrl: "",
      enable: "",
      sort: "",
      id: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("Constructor", this.state);
  }
  componentDidMount() {
    console.log("componentWillMount called");
    //Called the first time the component is loaded right before the component is added to the page
    axios
      .get(Constants.BASE_URL + `api/categories/${this.props.match.params.id}`)
      .then(res => {
        //const switchON = (res.data.enable = "enable" ? true : false);

        this.setState({
          categoryName: res.data.categoryName,
          imageUrl: res.data.imageUrl,
          enable: res.data.enable,
          sort: res.data.sort
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
      //categoryName: event.target.value,
    });
    console.log("event", event);
    console.log("event name", event.target.name);
    console.log("event value", event.target.value);
  };

  handleSubmit = event => {
    axios
      //.post("/save", { firstName: "Marlon", lastName: "Bernardes" })
      //.put(BASE_URL + `api/categories/${this.props.match.params.id}`)
      .put(
        Constants.BASE_URL + `api/categories/${this.props.match.params.id}`,
        {
          //.post(BASE_URL + `api/categories`, {
          categoryName: this.state.categoryName,
          imageUrl: this.state.imageUrl,
          enable: this.state.enable,
          sort: this.state.sort
        }
      )
      .then(function(response) {
        console.log("saved successfully", response);
      });

    alert("A name was submitted: " + this.state.sort);
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
                  <i className="icon-puzzle" /> Edit Category:{" "}
                  {this.state.categoryName}
                </h5>
              </Col>
              <Col xs="2">
                <AppSwitch
                  className={"mx-1"}
                  variant={"pill"}
                  color={"success"}
                  label
                  name="sortSwitch"
                  checked={this.state.enable}
                  //value={(this.state.enable = "true" ? true : false)}
                  {...console.log("sss", this.state.enable)}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
          </CardHeader>

          <CardBody>
            <FormGroup row>
              <Col xs="8">
                <FormGroup row>
                  <Col xs="3">
                    <Label htmlFor="text-input">Category Name</Label>
                  </Col>
                  <Col xs="9" md="6">
                    <Input
                      type="text"
                      id="text-input"
                      name="categoryName"
                      placeholder="Text"
                      defaultValue={this.state.categoryName}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">Sort By - {this.state.sort}</Label>
                  </Col>
                  <Col xs="12" md="6">
                    <Input
                      type="select"
                      name="sort"
                      id="select"
                      onChange={this.handleChange}
                      value={this.state.sort}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label>Locations</Label>
                  </Col>
                  <Col md="9">
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
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup row>
                  <Col className="float-right">
                    <img src={this.state.imageUrl} width="150" alt="" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Label htmlFor="text-input" />
                    <Input type="file" id="file-input" name="file-input" />
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
                  <i className="fa fa-dot-circle-o" /> Update
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

export default Category;
