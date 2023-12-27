import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'
import './App.css'
import { Footer, Header, Main } from './components'

function App() {
	useEffect(() => {
		fetch('api')
			.then(response => response.json())
			.then(response => console.log(response.message))
	}, [])
	return (
		<div>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App
