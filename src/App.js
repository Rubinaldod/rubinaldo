import './App.css';
import Header from './components/header/header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualifications from './components/qualifications/qualifications';
function App() {
	return (
		<>
			<Header />
			<main
			className='main'>
				<Home />
				<About />
				<Skills/>
				<Services />
				<Qualifications />
			</main>
		</>
	);
}

export default App;
