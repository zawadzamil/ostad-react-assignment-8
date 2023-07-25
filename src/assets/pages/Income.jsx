import { Fragment } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function Income() {
    return (
        <Fragment>
            <div className="income mt-4">
                <h2 className="display-6 text-center pb-4">Income Entry</h2>
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                        placeholder="Enter Income"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
            </div>
        </Fragment>
    );
}

export default Income;
