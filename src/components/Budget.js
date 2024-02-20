// Import React library's useContext hook for accessing React context
import React, { useContext } from 'react';
// Import the AppContext created to manage and provide global state across components
import { AppContext } from '../context/AppContext';

// Define the Budget functional component
const Budget = () => {
    // Use the useContext hook to access the current context value for AppContext,
    // specifically extracting the 'budget' value provided by the AppContext provider
    const { budget } = useContext(AppContext);

    // Render the component
    return (
        // The 'alert alert-secondary' classes are used for styling, typically with Bootstrap for a muted alert box
        <div className='alert alert-secondary'>
            {/* Display the budget value dynamically, embedding the 'budget' variable in the JSX */}
            <span>Budget: ${budget}</span>
        </div>
    );
};

// Export the Budget component so it can be used in other parts of the application
export default Budget;
