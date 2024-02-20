// Import necessary hooks and context from React, the AppContext for global state management, and uuid for generating unique IDs
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid'; // uuidv4 is used to generate a unique ID for each new expense

// Define the AddExpenseForm functional component
const AddExpenseForm = () => {
    // Access the dispatch function from the AppContext to enable state updates
    const { dispatch } = useContext(AppContext);

    // useState hooks to manage the form inputs for expense name and cost
    const [name, setName] = useState(''); // State for storing the name input
    const [cost, setCost] = useState(''); // State for storing the cost input

    // Function to handle form submission
    const onSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Create a new expense object with a unique ID, name, and cost parsed as an integer
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        // Dispatch an action to add the new expense to the global state
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    // Render the form for adding a new expense
    return (
        // The form element with an onSubmit event handler
        <form onSubmit={onSubmit}>
            <div className='row'>
                {/* Input field for the expense name */}
                <div className='col-sm'>
                    <label htmlFor='name'>Name</label>
                    <input
                        required='required' // Makes the input field required
                        type='text' // Sets input type as text
                        className='form-control' // Bootstrap class for styling
                        id='name' // ID for the input field
                        value={name} // Controlled input using state
                        onChange={(event) => setName(event.target.value)} // Update state on input change
                    ></input>
                </div>
                {/* Input field for the expense cost */}
                <div className='col-sm'>
                    <label htmlFor='cost'>Cost</label>
                    <input
                        required='required'
                        type='text' // Text type used, assuming validation/conversion is handled elsewhere or not needed
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>
                {/* Submit button for the form */}
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

// Export the AddExpenseForm component so it can be used in other parts of the application
export default AddExpenseForm;
