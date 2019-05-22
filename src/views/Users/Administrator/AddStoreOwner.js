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

import axios from 'axios'
import {Constants} from "../../../constants/environment";

class AddStoreOwner extends Component {
    constructor(props){
        super(props)
        this.state = {
            store_owner_count: 0,
            store_types: [],
            email_validation: '',
            store_owner: {
                storeOwnerName: '',
                phone: '',
                emailAddress: '',
                password: '',
                streetAddress: '',
                city: '',
                state: '',
                postalCode: '',
                storeName: '',
                storeType: ''
            }
        };
    }
    componentDidMount() {
        axios.get(Constants.BASE_URL + 'api/store-type')
            .then(res => {
                this.setState({
                    store_types: res.data
                })
            })
    }
    
    onChangeValue = (e) => {
        const {store_owner} = this.state
        store_owner[e.target.name] = e.target.value
        if (e.target.name === 'emailAddress'){
             this.setState({
                 email_validation : e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)? '' : 'not validation'
             })
        }
        this.setState({
            store_owner
        })
    }
    
    handleSubmit =async () => {
        let store_owner = this.state.store_owner
        if (this.state.store_owner.storeType === ''){
            store_owner.storeType = this.state.store_types[0].storeTypeName
        }
        await axios.post(Constants.BASE_URL + 'api/store-type/add-store-owner', {
                store_owner: store_owner
            })
            .then(res => {
                this.setState({
                    store_owner: {
                        storeOwnerName: '',
                        phone: '',
                        emailAddress: '',
                        password: '',
                        streetAddress: '',
                        city: '',
                        state: '',
                        postalCode: '',
                        storeName: '',
                        storeType: ''
                    }
                })
            })
    }
    
    render() {
        
        return (
            <Card>
                <CardHeader>
                    <h5>
                        <i className="icon-people"/> Add Store Owner
                    </h5>
                </CardHeader>
                <CardBody>
                    <FormGroup row className="my-0">
                        <Col xs="3">
                            <FormGroup>
                                <Label htmlFor="storeOwnerName">
                                    <strong>Store Owner Name</strong>
                                </Label>
                                <Input
                                    name={"storeOwnerName"}
                                    onChange={this.onChangeValue}
                                    value={this.state.store_owner.storeOwnerName}
                                    type="text" id="storeOwnerName"/>
                            </FormGroup>
                        </Col>
                        <Col xs="3">
                            <FormGroup>
                                <Label htmlFor="storeOwnerPhone">
                                    <strong>Phone#</strong>
                                </Label>
                                <Input
                                    name={"phone"}
                                    onChange={this.onChangeValue}
                                    value={this.state.store_owner.phone}
                                    type="text" id="storeOwnerPhone"/>
                            </FormGroup>
                        </Col>
                        <Col xs="3">
                            <FormGroup>
                                <Label htmlFor="storeEmail">
                                    <strong style={{color : this.state.email_validation !== ''? 'red' : 'black'} }>
                                        Email Address</strong>
                                </Label>
                                <Input style={{border : this.state.email_validation !== ''? '1px solid red' : '',
                                               boxShadow : this.state.email_validation !== ''? '1px 0px 5px 1px rgba(255,0,0,1)' : '' } }
                                    name={"emailAddress"}
                                    onChange={this.onChangeValue}
                                    value={this.state.store_owner.emailAddress}
                                    type="text" id="storeEmail"/>
                            </FormGroup>
                        </Col>
                        <Col xs="3">
                            <FormGroup>
                                <Label htmlFor="storePassword">
                                    <strong>Password</strong>
                                </Label>
                                <Input
                                    name={"password"}
                                    onChange={this.onChangeValue}
                                    value={this.state.store_owner.password}
                                    type="password" id="storePassword"/>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    
                    <FormGroup row className="my-0">
                        <Col xs="4">
                            <FormGroup>
                                <Label htmlFor="streetAddress">
                                    <strong>Street Address</strong>
                                </Label>
                                <Input
                                    name={"streetAddress"}
                                    onChange={this.onChangeValue}
                                    value={this.state.store_owner.streetAddress}
                                    type="text" id="streetAddress" placeholder="Street Name"/>
                            </FormGroup>
                        </Col>
                        
                        <Col xs="3">
                            <FormGroup>
                                <Label htmlFor="city">
                                    <strong>City</strong>
                                </Label>
                                <Input
                                    name={"city"}
                                    onChange={this.onChangeValue}
                                    value={this.state.store_owner.city}
                                    type="text" id="city"/>
                            </FormGroup>
                        </Col>
                        <Col xs="3">
                            <FormGroup>
                                <Label htmlFor="state">
                                    <strong>State</strong>
                                </Label>
                                <Input
                                    name={"state"}
                                    onChange={this.onChangeValue}
                                    value={this.state.store_owner.state}
                                    type="text" id="state" placeholder="State"/>
                            </FormGroup>
                        </Col>
                        <Col xs="2">
                            <FormGroup>
                                <Label htmlFor="postal_code">
                                    <strong>Postal Code</strong>
                                </Label>
                                <Input
                                    name={"postalCode"}
                                    onChange={this.onChangeValue}
                                    value={this.state.store_owner.postalCode}
                                    type="text" id="postal_code"/>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <h5>Store Information</h5>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <FormGroup row className="my-0">
                        <Col xs="4">
                            <FormGroup>
                                <Label htmlFor="storeName">
                                    <strong>Store Name</strong>
                                </Label>
                                <Input
                                    name={"storeName"}
                                    onChange={this.onChangeValue}
                                    value={this.state.store_owner.storeName}
                                    type="text" id="storeName"/>
                            </FormGroup>
                        </Col>
                        <Col xs="3">
                            <FormGroup>
                                <Label htmlFor="storeType">
                                    <strong>Store Type</strong>
                                </Label>
                                <Input
                                    name={"storeType"}
                                    onChange={this.onChangeValue}
                                    value={ this.state.store_owner.storeType }
                                    type="select" id="storeType">
                                    {
                                        this.state.store_types.map((store_type, index) => {
                                            return (
                                                <option key={index} value={store_type.storeTypeName}>
                                                    {store_type.storeTypeName}
                                                </option>
                                            )
                                        })
                                    }
                                </Input>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                </CardBody>
                <CardFooter>
                    <Row>
                        <Col xs="10">
                            <Button
                                type="button"
                                size="lg"
                                color="primary"
                                disabled={this.state.email_validation !== '' ? true : false}
                                onClick={this.handleSubmit}
                            >
                                <i className="fa fa-dot-circle-o"/> Add Store
                            </Button>
                        </Col>
                        <Col xs="2">
                            <Button type="cancel" size="lg" color="danger">
                                <i className="fa fa-ban"/> Cancel
                            </Button>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        );
    }
}

export default AddStoreOwner;
