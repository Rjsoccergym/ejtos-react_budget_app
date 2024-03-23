import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, totalExpenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    if(newBudget > 20000) {
        alert("The value cannot exceed £20.000, Funds: £"+ newBudget);
        setNewBudget("20000");
        return;
    }

    if (newBudget < totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending");
        setNewBudget(totalExpenses);
    }

    return (
<div className='alert alert-secondary'>
    <span>Budget: {currency} </span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;