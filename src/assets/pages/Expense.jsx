import { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function Expense({ handelSubmit }) {
    const [expense, setExpense] = useState(0);

    const handleExpenseChange = (event) => {
        const value = event.target.value;
        if (value === "" || !isNaN(value)) {
            setExpense(parseFloat(-value));

        } else {
            alert("Insert only number");
        }
    }
    return (
        <Fragment>
            <div className="income mt-4">
                <h2 className="display-6 text-center pb-4 bg-primary text-light">Expense Entry</h2>
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                        type="number"
                        onChange={(e) => handleExpenseChange(e)}
                        placeholder="Enter Expense"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
                <Button variant="info" onClick={() => handelSubmit(expense)} className="text-light btn-lg">Submit</Button>
            </div>
        </Fragment>
    );
}

export default Expense;
