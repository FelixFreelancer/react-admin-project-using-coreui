import React, {Component} from "react";
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
import axios from "axios";
import {Constants} from "../../../constants/environment";

//import redux action for adding new store type
import {getStoreTypesAction} from '../../../redux/actions/storeTypesActions'
import {connect} from 'react-redux'

class AddStoreType extends Component {
    constructor(props) {
        super(props)
        this.state = {
            new_store_type: '',
            store_types: []
        };
    }

    componentDidMount() {
        axios.get(Constants.BASE_URL + 'api/store-type')
            .then(response => {
                this.setState({
                    store_types: response.data
                });
            })
    }

    onChangeInputStoreType = (event) => {
        this.setState({
            new_store_type: event.target.value
        })
    }

    //event handler function when click the add new store type button.
    handleAddNewStoreType = async () => {
        await axios.post(Constants.BASE_URL + 'api/store-type', {storeTypeName: this.state.new_store_type})
            .then( (res) => {
                this.state.store_types.push(res.data)
                this.props.getStoreTypesAction(this.state.store_types)
            })
            .catch(err => {
                console.log(err)
            })
        this.setState({
            new_store_type: ''
        })

    }


    render() {
        return (
            <Card>
                <CardHeader>
                    <h5>
                        <i className="icon-home"/>
                        &nbsp;&nbsp; Stores Types
                    </h5>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col xs="2">
                            <Label htmlFor="dishDiscount">
                                <strong>Store</strong>
                            </Label>
                        </Col>
                    </Row>
                    <FormGroup row>
                        <Col xs="2">
                            <Input
                                value={this.state.new_store_type}
                                onChange={this.onChangeInputStoreType}
                                type="text"
                                id="dishDiscount"
                                name="store_type"
                                placeholder="Restaurant"
                            />
                        </Col>
                        <Col xs="2">
                            <FormGroup>
                                <Button
                                    type="submit"
                                    size="md"
                                    color="success"
                                    onClick={this.handleAddNewStoreType}
                                >
                                    {/*this.handleAddNewStoreType*/}
                                    <i className="fa fa-plus-square-o"/>
                                    &nbsp;&nbsp;Add Store Type
                                </Button>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <h5>Store Types</h5>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </FormGroup>

                    {
                        this.state.store_types.map((store_type, index) => {
                            return (
                                <FormGroup row key={index}>
                                    <Col xs="2">
                                        <Label htmlFor="dishDiscount">
                                            <strong>{store_type.storeTypeName}</strong>
                                        </Label>
                                    </Col>
                                    <Col xs="2">
                                        <Label htmlFor="dishDiscount">
                                            <strong>ID:</strong> {store_type._id}
                                        </Label>
                                    </Col>
                                    <Col xs="3">
                                        <Label htmlFor="dishDiscount">
                                            <strong>Stores #:</strong> {store_type.storeOwners.length}
                                        </Label>
                                    </Col>
                                </FormGroup>
                            )
                        })
                    }
                </CardBody>
                <CardFooter/>
            </Card>
        );
    }
}


export default  connect(null, {getStoreTypesAction})(AddStoreType);
