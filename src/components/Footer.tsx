import { Button } from "./Button";

export function Footer() {
	return (
		<section className="py-12 my-10 text-center text-white">
			<h2 className="text-5xl mt-5 mb-15">Ready to lock in your quote?</h2>
			<div className="flex w-96 space-x-4 mx-auto">
				<Button text="Continue →" />
				<Button text="Schedule a demo" />
			</div>
		</section>
	);
}
