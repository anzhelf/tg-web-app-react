import React from 'react'
import { useTelegram } from './hooks/useTelegram'
import './App.css'
import Header from './components/Header/Header'

function App() {
	const { tg, onToggleButton } = useTelegram()

	React.useEffect(() => {
		tg.ready()
	})

	return (
		<div className='App'>
			<Header />
			<button onClick={onToggleButton}>toggle</button>
		</div>
	)
}
export default App
