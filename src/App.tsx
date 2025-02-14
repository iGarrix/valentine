import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartPage from './pages/start'

const App = () => {
	return (
		<Routes>
			{/* <Route path='/' element={<StartPage />} /> */}
			<Route path='*' element={<StartPage />} />
		</Routes>
	)
}

export default App
