import React from 'react'
import ReactDOM from 'react-dom/client'
import State from './context/state';
import { AlertProvider } from './context/AlertContext';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AlertProvider>
		<State>
			<App/>
		</State>
		</AlertProvider>
	</React.StrictMode>
)