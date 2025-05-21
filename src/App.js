
import './index.css'
import Navbar from './components/Navbar'
import Bot from './components/Bot';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Hireme from './components/Hireme';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
	return (
		<div className="">
			<Navbar />
			<Bot />
			<Hero/>
			<About/>
			<Skills/>
			<Projects/>
			<Hireme/>
			<Testimonials/>
			<Contact/>
			<Footer/>
		</div>

	);

}
export default App;

