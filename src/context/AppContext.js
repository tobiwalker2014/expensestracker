import { createContext, useReducer, useMemo } from "react";
import PropTypes from 'prop-types';

// Reducer function to handle actions related to the application state
const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			// Add a new expense to the state
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			// Remove an expense from the state
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		default:
			// Return the current state if no action matches
			return state;
	}
};

// Initial state of the application
const initialState = {
	budget: 2000,
	expenses: [
		{ id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
	],
};

// Create a context for the application state
export const AppContext = createContext();

// Provider component to provide the application state to child components
export const AppProvider = (props) => {
	// Use the reducer function to handle state updates
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Memoize the context value to prevent unnecessary re-renders
	const contextValue = useMemo(() => ({
		budget: state.budget,
		expenses: state.expenses,
		dispatch,
	}), [state.budget, state.expenses, dispatch]);

	// Provide the state to child components
	return (
		<AppContext.Provider value={contextValue}>
			{props.children}
		</AppContext.Provider>
	);
};

// Prop types for the AppProvider component
AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
};