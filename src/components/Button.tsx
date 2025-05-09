export function Button({ text }: { text: string }) {
	return (
		<button className="w-full px-5 py-3 rounded-2xl bg-transparent hover:bg-white text-white hover:text-black cursor-pointer border-2 border-white hover:border-white/50 transition-colors duration-300 shadow-lg">
			{text}
		</button>
	);
}
