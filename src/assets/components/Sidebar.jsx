import { Fragment } from "react";
import { ListGroup } from "react-bootstrap";

export default function Sidebar() {
    return (
        <Fragment>
            <div className="report mt-4 bg-warning">
                <h3 className="display-5 text-center fw-bold p-2">Report</h3>
                <div className="list">
                    <ListGroup>
                        <ListGroup.Item className="fs-4">
                            Total Income:{" "}
                        </ListGroup.Item>
                        <ListGroup.Item className="fs-4">
                            Total Expense:{" "}
                        </ListGroup.Item>
                        <ListGroup.Item className="fs-4 fw-bold">
                            Cash in Hand:{" "}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </Fragment>
    );
}
