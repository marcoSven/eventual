import { Button } from "./Button";

export function Hero() {
	return (
		<section className="flex flex-col items-center justify-start py-6 rounded-lg text-white w-full mx-auto">
			<h2 className="text-xl sm:text-2xl mb-9 text-center">
				Your 3-year Premium Lock quote for{" "}
				<span className="font-bold underline decoration-dotted">
					123 Appleseed Drive, New York, NY
				</span>
			</h2>

			<div className="max-w-md">
				<div
					className="text-4xl sm:text-7xl font-bold leading-24 mb-8 rounded-3xl tracking-tight flex items-end justify-center w-full max-w-lg mx-auto border-2 border-transparent"
					style={{
						backgroundImage: `linear-gradient(to bottom, #000,#000),linear-gradient(to bottom, #494949, #bdbdbd 90%)`,
						backgroundSize: "100% 100%",
						backgroundOrigin: "border-box",
						backgroundClip: "content-box, border-box",
					}}
				>
					$18.12
					<span className="text-lg sm:text-xl font-medium ml-2 mb-3.5">
						per month
					</span>
				</div>
				<Button text="Next →" />
				<div className="flex flex-col gap-3 text-sm text-[#656565] w-full mt-6">
					<p className="text-center">
						🎉 Based on your quote, you could save $1,650!
					</p>
					<div className="flex items-center gap-2">
						<input type="checkbox" />
						<label
							htmlFor="terms-checkbox"
							className="cursor-pointer select-none"
						>
							I agreed to the{" "}
							<a
								href="#"
								className="underline hover:text-white whitespace-nowrap"
							>
								Terms of Service
							</a>{" "}
							and{" "}
							<a
								href="#"
								className="underline hover:text-white whitespace-nowrap"
							>
								Privacy Notice
							</a>
							.
						</label>
					</div>
				</div>
			</div>
			<hr className="h-px w-full my-5 bg-gray-50 border-0 mt-30" />
			<div className="flex w-full justify-end">
				<a
					href="#how-it-works"
					className="hover:text-gray-300 text-white transition-colors font-medium"
				>
					See How It Works ↓
				</a>
			</div>
		</section>
	);
}
