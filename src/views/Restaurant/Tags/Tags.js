import React, { Component } from "react";
import {
  Table,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";
import { AppSwitch } from "@coreui/react";

class Tags extends Component {
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
                      <i className="icon-info" />
                      &nbsp;&nbsp; App Tags
                    </h5>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col xs="1">
                    <Label htmlFor="dishDiscount">
                      <strong>Tag Name</strong>
                    </Label>
                  </Col>
                  <Col xs="2">
                    <Input
                      type="text"
                      id="dishDiscount"
                      name="dishDiscount"
                      placeholder="Vegan"
                    />
                  </Col>
                  <Col xs="2">
                    <button class="float-right btn-pill btn btn-danger btn-md">
                      + Add Tag
                    </button>
                  </Col>
                </FormGroup>
                <br />
                <br />
                <Row>
                  <Col xs="6">
                    <Table responsive hover size="lg">
                      <thead>
                        <tr>
                          <th>Tag Name</th>
                          <th>Update</th>
                          <th>Enable</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p>Vegan</p>
                          </td>
                          <td>
                            <i className="icon-note" title="Edit" />
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
                          <td>
                            <p>Sugar-Free</p>
                          </td>
                          <td>
                            <i className="icon-note" title="Edit" />
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
                  </Col>
                </Row>
              </CardBody>
              <CardFooter />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tags;
