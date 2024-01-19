import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './App.css'
import { Footer, Header, Main } from './components'

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App
