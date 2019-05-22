import React, {Component, Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";
import {connect} from "react-redux";

import {
    AppAside,
    AppBreadcrumb,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppSidebarNav
} from "@coreui/react";
// sidebar nav config
import navigation from "../../_nav";
// routes config
import routes from "../../routes";
import {logoutAction, getMeAction} from "../../redux/actions/authActions";
import {getOrderByLocation, resetOrders} from "../../redux/actions/orderActions";

const DefaultAside = React.lazy(() => import("./DefaultAside"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
    constructor(props) {
        super(props)
    }
    loading = () => (
        <div className="animated fadeIn pt-1 text-center">Loading...</div>
    );

    signOut(e) {
        e.preventDefault();
        this.props.logoutAction('token', '');
        this.props.resetOrders();
        this.props.history.push("/login");
    }

    render() {
        return (
            <div className="app">
                <AppHeader fixed>
                    <Suspense fallback={this.loading()}>
                        <DefaultHeader onLogout={e => this.signOut(e)}/>
                    </Suspense>
                </AppHeader>
                <div className="app-body">

                    <AppSidebar fixed display="lg">
                        <AppSidebarHeader/>
                        <AppSidebarForm/>
                        <Suspense>
                                <AppSidebarNav
                                    navConfig={
                                        this.props.new_navigation ?
                                            this.props.new_navigation :
                                            navigation
                                    }
                                    {...this.props}
                                />
                        </Suspense>
                        <AppSidebarFooter/>
                        <AppSidebarMinimizer/>
                    </AppSidebar>
                    <main className="main">
                        {window.innerWidth > 980 ?
                            <AppBreadcrumb appRoutes={routes}/> : ''}

                        <Container fluid className="pr-0 pl-0 pl-md-3 pr-md-3">
                            <Suspense fallback={this.loading()}>
                                <Switch>
                                    {routes.map((route, idx) => {
                                        return route.component ? (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={props => <route.component {...props} />}
                                            />
                                        ) : null;
                                    })}
                                    <Redirect from="/" to="/dashboard"/>
                                </Switch>
                            </Suspense>
                        </Container>
                    </main>
                    <AppAside fixed>
                        <Suspense fallback={this.loading()}>
                            <DefaultAside/>
                        </Suspense>
                    </AppAside>
                </div>
                <AppFooter>
                    <Suspense fallback={this.loading()}>
                        <DefaultFooter/>
                    </Suspense>
                </AppFooter>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        new_navigation: state.storeType.currentdata
    };
}

export default connect(mapStateToProps, {logoutAction, getMeAction, getOrderByLocation, resetOrders})(DefaultLayout);


