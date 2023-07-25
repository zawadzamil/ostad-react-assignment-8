import { Fragment } from "react";
import { ListGroup } from "react-bootstrap";

export default function Sidebar({ income, expense }) {

    return (
        <Fragment>
            <div className="report mt-4 bg-warning">
                <h3 className="display-5 text-center fw-bold p-2">Report</h3>
                <div className="list">
                    <ListGroup>
                        <ListGroup.Item className="fs-4">
                            Total Income: {income}
                        </ListGroup.Item>
                        <ListGroup.Item className="fs-4">
                            Total Expense: {expense}
                        </ListGroup.Item>
                        <ListGroup.Item className={`fs-4 fw-bold ${(income - expense) < 0 ? 'text-danger' : 'text-success'}`}>
                            Cash in Hand: {income - expense}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </Fragment>
    );
}
