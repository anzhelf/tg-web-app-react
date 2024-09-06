import React from 'react'
import './App.css'

const tg = window.Telegram.WebApp

function App() {
	React.useEffect(() => {
		tg.ready()
	})

	const handleClick = () => {
		tg.close()
	}
	return (
		<div>
			work
			<button onClick={handleClick}>Закрыть</button>
		</div>
	)
}

export default App
