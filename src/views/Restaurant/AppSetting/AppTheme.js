import React, { Component } from "react";
import { HuePicker, } from "react-color";
// import { SketchPicker, HuePicker, BlockPicker } from "react-color";
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
  Breadcrumb,
  BreadcrumbItem,
  Row
} from "reactstrap";
import ImgDropCrop from "../../../components/ImgDropCrop";

//https://github.com/casesandberg/react-color
//https://casesandberg.github.io/react-color/

class AppTheme extends Component {
  state = {};
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>
            <i className="icon-drop" />
            &nbsp;&nbsp;App Theme
          </h5>
        </CardHeader>
        <CardBody>
          <Breadcrumb>
            <BreadcrumbItem>
              <h5>App Color</h5>
            </BreadcrumbItem>
          </Breadcrumb>
          <FormGroup row className="my-0">
            <Col xs="4">
              <FormGroup>
                <HuePicker />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup />
            </Col>
            <Col xs="4">
              <FormGroup />
            </Col>
          </FormGroup>

          <Breadcrumb>
            <BreadcrumbItem>
              <h5>App Carousel</h5>
            </BreadcrumbItem>
          </Breadcrumb>
          <FormGroup row className="my-0 text-center" >
            <Col xs="4">
              <FormGroup>
                <Label>
                  <strong>Image 1 (430 x 230)</strong>
                </Label>
                <img alt={"description"}
                  src={"../../Restaurant/Tel-Aviv/App/Caroussel/food2.png"}
                />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label>
                  <strong>Image 2 (430 x 230)</strong>
                </Label>
                <img alt={"alt-description"}
                    src={"../../Restaurant/App/Caroussel/food1.png"} />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label>
                  <strong>Image 3 (430 x 230)</strong>
                </Label>
                <ImgDropCrop />
              </FormGroup>
            </Col>
          </FormGroup>
          <Breadcrumb>
            <BreadcrumbItem>
              <h5>About Us</h5>
            </BreadcrumbItem>
          </Breadcrumb>
          <FormGroup row className="my-0">
            <Col xs="8">
              <FormGroup>
                <Input
                  type="textarea"
                  name="textarea-input"
                  id="textarea-input"
                  rows="4"
                  placeholder="About us..."
                />
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
      </Card>
    );
  }
}
export default AppTheme;
