import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../../redux/actions/categoryActions";
import {
  Input,
  FormGroup,
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

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  //addCat = event => {
  //  console.log("AddCat");
  //};

  render() {
    const categoryItems = this.props.categories.map(category => (
      <tr key={category.publicId}>
        <th scope="row">
          <Link to={`/restaurant/categories/${category._id}`}>
            {category.categoryName}
          </Link>
        </th>
        <td>
          <Link to={`/restaurant/categories/${category._id}`}>
            <img src={category.imageUrl} width="150" alt="" />
          </Link>
        </td>
        <td>{category.sort}</td>
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
          <FormGroup row>
            <Col md="9">
              <FormGroup>
                <i className="fa fa-check fa-lg" />
                &nbsp;
                <Label>Store 1</Label>
              </FormGroup>
              <FormGroup>
                <i className="fa fa-close fa-lg" />
                &nbsp;
                <Label>Store 2</Label>
              </FormGroup>
              <FormGroup>
                <i className="fa fa-close fa-lg" />
                &nbsp;
                <Label>Store 3</Label>
              </FormGroup>
            </Col>
          </FormGroup>
        </td>
        <td>
          <Link to="#">6 Items in this Category</Link>
        </td>
      </tr>
    ));

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Row>
                  <Col xs="3">
                    <h5>
                      <i className="icon-puzzle" /> Tel-Aviv Categories
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
                    <Link to="./Categories/addCategory">
                      <button class="float-right btn-pill btn btn-danger btn-lg">
                        + Add Category
                      </button>
                    </Link>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table responsive hover size="lg" bordered>
                  <thead>
                    <tr>
                      <th width="22%" scope="col">
                        Category Name
                      </th>
                      <th width="28%" scope="col">
                        Main Image
                      </th>
                      <th width="10%" scope="col">
                        Sort
                      </th>
                      <th width="10%" scope="col">
                        Enable
                      </th>
                      <th width="15%" scope="col">
                        Available Locations
                      </th>
                      <th scope="col">View Category Items</th>
                    </tr>
                  </thead>
                  <tbody>{categoryItems}</tbody>
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

Categories.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
  //newCategory: PropTypes.object
};

//get the state from Redux and map it within our component
const mapStateToProps = state => ({
  categories: state.categories.items
  //newCategory: state.categories.item
});

export default connect(
  mapStateToProps,
  { fetchCategories }
)(Categories);
