import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// The Remaining component displays the remaining budget after expenses
const Remaining = () => {
	// Use the useContext hook to access the current state of the application
	const { expenses, budget } = useContext(AppContext);

	// Calculate the total expenses by reducing the expenses array
	const totalExpenses = expenses.reduce((total, item) => {
		return total + item.cost;
	}, 0);

	// Determine the alert type based on whether the total expenses exceed the budget
	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	// Render the remaining budget
	return (
		<div className={`alert ${alertType}`}>
			<span>Remaining: £{budget - totalExpenses}</span>
		</div>
	);
};

// Export the Remaining component to be used in other parts of the application
export default Remaining;