import { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function Income({ handelSubmit }) {
    const [income, setIncome] = useState(0);

    const handleIncomeChange = (event) => {
        const value = event.target.value;
        if (value === "" || !isNaN(value)) {
            setIncome(parseFloat(value));

        } else {
            alert("Insert only number");
        }
    }
    return (
        <Fragment>
            <div className="income mt-4">
                <h2 className="display-6 text-center pb-4 bg-secondary text-light">Income Entry</h2>
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                        type="number"
                        onChange={(e) => handleIncomeChange(e)}
                        placeholder="Enter Income"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
                <Button variant="info" onClick={() => handelSubmit(income)} className="text-light btn-lg">Submit</Button>
            </div>
        </Fragment>
    );
}

export default Income;
