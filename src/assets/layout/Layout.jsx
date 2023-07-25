import { Fragment } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
    return (
        <Fragment>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Fragment>{children}</Fragment>
                    </div>

                    <div className="col-md-4">
                        <Sidebar></Sidebar>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
