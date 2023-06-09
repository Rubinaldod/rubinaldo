import './App.css';
import Header from './components/header/header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualifications from './components/qualifications/qualifications';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
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
				<Contact />
				<Footer />
			</main>
		</>
	);
}

export default App;
