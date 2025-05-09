import john from "../assets/john.jpg";
import renee from "../assets/renee.jpg";
import marlon from "../assets/marlon.jpg";

export function Testimonials() {
	return (
		<section className="mt-24 text-center text-white">
			<h2 className="uppercase text-gray-50">Testimonials</h2>
			<p className="text-5xl mt-5 mb-15">Don't just take our word for it</p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="bg-gray-800 border-2 border-gray-50 rounded-4xl p-6 text-left">
					<img className="w-20 mb-2" src={john} />
					<p className="text-sm mb-4">
						"Premium Lock helped my family keep our homeowners insurance
						Premiums affordable over the last few years."
					</p>
					<p className="text-xs font-semibold">Jon W.</p>
				</div>
				<div className="bg-gray-800 border-2 border-gray-50 rounded-4xl p-6 text-left">
					<img className="w-20 mb-2" src={renee} />
					<p className="text-sm mb-4">
						"Without Premium Lock, I would have been paying much higher
						homeowners insurance after my last renewal."{" "}
					</p>
					<p className="text-xs font-semibold">Renee M.</p>
				</div>
				<div className="bg-gray-800 border-2 border-gray-50 rounded-4xl p-6 text-left">
					<img className="w-20 mb-2" src={marlon} />
					<p className="text-sm mb-4">
						"I didn't know this product existed until my agent mentioned it last
						year. It gives me peace of mind that I can understand my insurance
						costs for multiple years."{" "}
					</p>
					<p className="text-xs font-semibold">Marlon B.</p>
				</div>
			</div>
		</section>
	);
}
