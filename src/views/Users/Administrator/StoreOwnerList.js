import React, {Component} from "react";
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
import {Link} from "react-router-dom";
import {AppSwitch} from "@coreui/react";

import axios from 'axios'
import {Constants} from "../../../constants/environment";

class StoreOwnerList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			store_type_name: '',
			store_owner_list: []
		}
	}
	
	async componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.storeType !== this.props.match.params.storeType) {
			const {storeType} = this.props.match.params
			this.setState({
				store_type_name: storeType
			})
			axios.get(Constants.BASE_URL + `api/store-type/store-owner/${storeType}`)
				.then(res =>
					this.setState({
						store_owner_list: res.data.storeOwners
					})
				)
		}
	}
	
	componentDidMount() {
		const {storeType} = this.props.match.params
		this.setState({
			store_type_name: storeType
		})
		axios.get(Constants.BASE_URL + `api/store-type/store-owner/${storeType}`)
			.then(res => {
				this.setState({
					store_owner_list: res.data.storeOwners
				})
			})
	}
	
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
											<i className="icon-people"/> {this.state.store_type_name} Owners
										</h5>
									</Col>
									<Col xs="2">
										<Link to={"../AddStoreOwner"}>
											<button className="float-right btn-pill btn btn-danger btn-lg">
												+ Add Store Owner
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
										<th>Store Name</th>
										<th>Restaurant Key</th>
										<th>Activate/Deactivate</th>
										<th>Edit</th>
									</tr>
									</thead>
									<tbody>
									{
										this.state.store_owner_list && this.state.store_owner_list.map((store, index) => {
											return (
												<tr key={index}>
													<td>
														<Link
															to={'../StoreOwnerInfo/' + this.state.store_type_name + '/' + index}>{store.storeOwnerName}</Link>
													</td>
													<td>{store.phone}</td>
													<td> {store.storeName} </td>
													<td>key</td>
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
														<Link
															to={'../EditStoreOwner/' + this.state.store_type_name + '/' + index}>
															<i className="icon-note"/>
														</Link>
													</td>
												</tr>
											)
										})
									}
									
									</tbody>
								</Table>
							</CardBody>
							<CardFooter>
								<nav>
									<Pagination>
										<PaginationItem disabled>
											<PaginationLink previous tag="button"/>
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
											<PaginationLink next tag="button"/>
										</PaginationItem>
									</Pagination>
								</nav>
							</CardFooter>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default StoreOwnerList;
