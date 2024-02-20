// Import necessary hooks and components from React and local files
import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem'; // Import the ExpenseItem component for individual expenses
import { AppContext } from '../context/AppContext'; // Import the AppContext to access global state

// Define the ExpenseList functional component
const ExpenseList = () => {
    // Use the useContext hook to access the expenses array from the global AppContext
    const { expenses } = useContext(AppContext);

    // Render the ExpenseList component
    return (
        // Use the 'list-group' class for styling the list, typically used with Bootstrap for styled lists
        <ul className='list-group'>
            {/* Map over the expenses array and render an ExpenseItem for each expense */}
            {expenses.map((expense) => (
                // ExpenseItem component is rendered for each expense object in the expenses array
                // Pass the expense's id, name, and cost as props to each ExpenseItem
                // The 'key' prop is essential for React's rendering optimization, using the expense's unique id
                <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    );
};

// Export the ExpenseList component so it can be used in other parts of the application
export default ExpenseList;
