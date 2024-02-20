// Importing necessary libraries and components
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap for styling
import Budget from './components/Budget'; // Component to display the budget
import Remaining from './components/Remaining'; // Component to display the remaining budget
import ExpenseTotal from './components/ExpenseTotal'; // Component to display the total expenses
import ExpenseList from './components/ExpenseList'; // Component to display the list of expenses
import AddExpenseForm from './components/AddExpenseForm'; // Component to add a new expense
import { AppProvider } from './context/AppContext'; // Importing the context provider

// Main App component
const App = () => {
	return (
		// Using the context provider to allow child components access to the app's state
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'>My Budget Planner</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget /> {/* Display the budget */}
					</div>
					<div className='col-sm'>
						<Remaining /> {/* Display the remaining budget */}
					</div>
					<div className='col-sm'>
						<ExpenseTotal /> {/* Display the total expenses */}
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<ExpenseList /> {/* Display the list of expenses */}
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm /> {/* Form to add a new expense */}
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

// Exporting the App component to be used in other parts of the application
export default App;