// Import necessary React functionalities and external libraries
import React, { useContext } from 'react'; // Import useContext hook from React
import { TiDelete } from 'react-icons/ti'; // Import the TiDelete icon from react-icons for the delete button
import { AppContext } from '../context/AppContext'; // Import the AppContext to access global state
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation

// Define the ExpenseItem functional component with props passed as an argument
const ExpenseItem = (props) => {
    // Access the dispatch function from the AppContext using useContext hook
    const { dispatch } = useContext(AppContext);

    // Define a function to handle the deletion of an expense item
    const handleDeleteExpense = () => {
        // Dispatch an action to delete an expense item by its ID
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    // Render the ExpenseItem component
    return (
        // List item with Bootstrap classes for styling and flexbox for layout
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name} {/* Display the name of the expense */}
            <div>
                {/* Display the cost of the expense with a badge for styling */}
                <span className='badge badge-primary badge-pill mr-3'>
                    ${props.cost}
                </span>
                {/* TiDelete icon used as a button for deleting the expense item */}
                {/* When clicked, it calls handleDeleteExpense to delete the item */}
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    );
};

// Define PropTypes for the ExpenseItem component to ensure proper data types are passed to props
ExpenseItem.propTypes = {
    id: PropTypes.string, // Expect id to be a string
    name: PropTypes.string, // Expect name to be a string
    cost: PropTypes.number, // Expect cost to be a number
};

// Export the ExpenseItem component for use in other parts of the application
export default ExpenseItem;
