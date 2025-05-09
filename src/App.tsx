import "./App.css";
import PremiumCalculator from "./components/GrowthRateCalculator/GrowthRateCalculator";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Predict } from "./components/Predict";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<div className="container mx-auto sm:mt-32 px-4">
				<Hero />
				<Predict />
				<HowItWorks />
				<PremiumCalculator />
				<Testimonials />
				<Footer />
			</div>
		</>
	);
}

export default App;
