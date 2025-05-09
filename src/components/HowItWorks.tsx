import iconOne from "../assets/icon1.jpg";
import iconTwo from "../assets/icon2.jpg";

export function HowItWorks() {
	return (
		<section id="how-it-works">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 max-w-6xl mx-auto">
				<div className="p-6">
					<div className="mb-5">
						<div className="mb-8 w-36">
							<img src={iconOne}></img>
						</div>
						<h3 className="text-5xl text-white">How does it work?</h3>
					</div>
					<p className="text-lg text-gray-50">
						Eventual predicts what your homeowners insurance will rise to over
						the next 3 years. If your actual premiums go above that, Premium
						Lock covers the difference guaranteeing the accuracy of our
						prediction.
					</p>
				</div>
				<div className="p-6">
					<div className="mb-5">
						<div className="mb-8 w-36">
							<img src={iconTwo}></img>
						</div>
						<h3 className="text-5xl text-white">Any limitations?</h3>
					</div>
					<p className="text-lg text-gray-50">
						Continue paying your homeowners insurance as usual. We'll check in
						annually for eligibility and reimbursement. You can switch providers
						anytime, just keep your coverage consistent (e.g., same deductible
						and endorsements).
					</p>
				</div>
			</div>
		</section>
	);
}
