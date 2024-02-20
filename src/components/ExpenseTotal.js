// Import necessary hooks and context from React and the local context file
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// Define the ExpenseTotal component
const ExpenseTotal = () => {
    // Use the useContext hook to access the expenses array from AppContext
    const { expenses } = useContext(AppContext);

    // Calculate the total expenses by iterating over the expenses array
    // The reduce function accumulates the total cost of all expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost; // Add the cost of the current item to the total
    }, 0); // Start the total at 0

    // Render the component displaying the total expenses
    // The 'alert alert-primary' classes are likely from a CSS framework like Bootstrap for styling
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: ${totalExpenses}</span> {/* Display the total expenses */}
        </div>
    );
};

// Export the ExpenseTotal component for use in other parts of the application
export default ExpenseTotal;
