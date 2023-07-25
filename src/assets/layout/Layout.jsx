import { Fragment, useState } from "react";
import Header from "../components/Header";
import History from "../components/History";
import Sidebar from "../components/Sidebar";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [history, setHistory] = useState([]);

    const handelSubmit = (value) => {
        if (value === "" || !isNaN(value)) {
            if (value >= 0) {
                setIncome(income + value);
                setHistory((prevHistory) => [
                    ...prevHistory,
                    `Income: +${value}`,
                ]);
            }
            else {
                setExpense(expense + (-value))
                setHistory((prevHistory) => [
                    ...prevHistory,
                    `Expense: ${value}`,
                ]);
            }
        }
    }
    return (
        <Fragment>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {React.Children.map(children, (child) =>
                            React.cloneElement(child, { handelSubmit }) // Pass 'money' as a prop
                        )}
                    </div>

                    <div className="col-md-4">
                        <Sidebar income={income} expense={expense}></Sidebar>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <History history={history}></History>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
