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
import {AppSwitch} from "@coreui/react";

import axios from 'axios'
import {Constants} from "../../../constants/environment";

class EditStoreOwner extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email_validation: '',
			store_owner: {},
			store_type_name: '',
			store_name: ''
		};
	}
	componentDidMount() {
		const {storeTypeName, storeOwnerIndex} = this.props.match.params
		this.setState({
			store_type_name: storeTypeName,
		})
		axios.get(Constants.BASE_URL + `api/store-type/store-owner/${storeTypeName}/${storeOwnerIndex}`)
			.then(res => {
				this.setState({
					store_owner: res.data,
					store_name:res.data.storeName
				})
				console.log(res.data)
			})
			.catch(err => console.log(err))
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
	
	handleUpdate = () => {
		
		axios.post(Constants.BASE_URL + 'api/store-type/store-owner/update-store-owner',
			{
				updateStoreOwner: this.state.store_owner,
				storeTypeName : this.state.store_type_name,
				storeName: this.state.store_name
			})
			.then((res) => {
				console.log(res)
			})
	}
	render() {
		const {store_owner} = this.state
		return (
			<Card>
				<CardHeader>
					<Row>
						<Col xs="10">
							<h5>
								<i className="icon-people"/> Edit Store Owner
							</h5>
						</Col>
						<Col xs="2">
							<AppSwitch
								className={"mx-1"}
								variant={"pill"}
								color={"success"}
								label
								checked
							/>
						</Col>
					</Row>
				</CardHeader>
				
				<CardBody>
					<FormGroup row className="my-0">
						<Col xs="4">
							<FormGroup>
								<Label htmlFor="storeOwnerName">
									<strong>Store Owner Name</strong>
								</Label>
								<Input
									name={"storeOwnerName"}
									defaultValue={store_owner.storeOwnerName}
									onChange={this.onChangeValue}
									type="text"
									id="storeOwnerName"
								/>
							</FormGroup>
						</Col>
						
						<Col xs="4">
							<FormGroup>
								<Label htmlFor="storePassword">
									<strong>Password</strong>
								</Label>
								<Input
									name={"password"}
									onChange={this.onChangeValue}
									type="password"
									id="storePassword"
								/>
							</FormGroup>
						</Col>
					</FormGroup>
					<Breadcrumb>
						<BreadcrumbItem>
							<h5>Store Owner Information</h5>
						</BreadcrumbItem>
					</Breadcrumb>
					<FormGroup row className="my-0">
						<Col xs="4">
							<FormGroup>
								<Label htmlFor="storeEmail">
									<strong style={{color : this.state.email_validation !== ''? 'red' : 'black'} }>
										Email Address</strong>
								</Label>
								<Input
									style={{border : this.state.email_validation !== ''? '1px solid red' : '',
											boxShadow : this.state.email_validation !== ''? '1px 0px 5px 1px rgba(255,0,0,1)' : '' } }
									name={"emailAddress"}
									defaultValue={store_owner.emailAddress}
									onChange={this.onChangeValue}
									type="text"
									id="storeEmail"
								/>
							</FormGroup>
						</Col>
						
						<Col xs="4">
							<FormGroup>
								<Label htmlFor="phoneNumber">
									<strong>Phone Number</strong>
								</Label>
								<Input
									name={"phone"}
									defaultValue={store_owner.phone}
									onChange={this.onChangeValue}
									type="text" id="phoneNumber"/>
							</FormGroup>
						</Col>
					</FormGroup>
					<FormGroup>
						<Label htmlFor="street">
							<strong>Street Address</strong>
						</Label>
						<Input
							name={"streetAddress"}
							defaultValue={store_owner.streetAddress}
							onChange={this.onChangeValue}
							type="text" id="street"/>
					</FormGroup>
					<FormGroup row className="my-0">
						<Col xs="4">
							<FormGroup>
								<Label htmlFor="city">
									<strong>City</strong>
								</Label>
								<Input
									name={"city"}
									defaultValue={store_owner.city}
									onChange={this.onChangeValue}
									type="text" id="city" placeholder="Enter Your City"/>
							</FormGroup>
						</Col>
						<Col xs="4">
							<FormGroup>
								<Label htmlFor="state">
									<strong>State</strong>
								</Label>
								<Input
									name={"state"}
									defaultValue={store_owner.state}
									onChange={this.onChangeValue}
									type="text" id="state" />
							</FormGroup>
						</Col>
						<Col xs="4">
							<FormGroup>
								<Label htmlFor="postalCode">
									<strong>Postal Code</strong>
								</Label>
								<Input
									name={"postalCode"}
									defaultValue={store_owner.postalCode}
									onChange={this.onChangeValue}
									type="text" id="postalCode" />
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
								onClick={this.handleUpdate}
							>
								<i className="fa fa-dot-circle-o"/> Update
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

export default EditStoreOwner;
