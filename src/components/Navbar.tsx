import { useState, useEffect } from "react";
export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isMenuOpen]);

	return (
		<div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between mb-12 pt-8">
			<div className="text-white text-2xl font-bold">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="text-white fill-white"
					viewBox="0 0 128 16"
					width="300"
				>
					<path d="M11.64,2.94V0H0v15.77h11.64v-2.93H3.36v-3.79h7.73v-2.61H3.36v-3.49h8.27Z" />
					<path d="M25.58,0l-3.92,12.78L17.75,0h-3.86l5.08,15.77h5.24L29.28,0h-3.7Z" />
					<path d="M43.38,2.94V0h-11.64v15.77h11.64v-2.93h-8.27v-3.79h7.73v-2.61h-7.73v-3.49h8.27Z" />
					<path d="M57.25,0l.03,10.94L50.88,0h-4.51v15.77h3.44l-.03-11.24,6.54,11.24h4.36V0h-3.42Z" />
					<path d="M63.24,0v3.07h5.13v12.7h3.51V3.07h5.11V0h-13.76Z" />
					<path d="M90.06,0v9.76c0,.74-.09,1.32-.26,1.75-.17.43-.51.76-1.02.98-.51.22-1.26.33-2.24.33s-1.73-.11-2.23-.33c-.5-.22-.84-.54-1.01-.97-.17-.43-.25-1.01-.25-1.76V0h-3.54v10.31c0,1.33.21,2.4.62,3.22.41.82,1.12,1.43,2.14,1.85,1.01.41,2.41.62,4.2.62s3.22-.21,4.26-.62c1.04-.41,1.77-1.03,2.21-1.86.44-.82.65-1.9.65-3.21V0h-3.52Z" />
					<path d="M105.96,0h-5.26l-5.38,15.77h3.62l4.37-13.01,4.33,13.01h3.76l-5.44-15.77Z" />
					<path d="M117.37,12.68V0h-3.52v15.77h11.23v-3.09h-7.71Z" />
					<path d="M128,2.07c0,.29-.06.55-.17.8-.11.25-.26.47-.45.66-.18.19-.4.34-.66.45s-.53.16-.82.16-.56-.05-.82-.16c-.25-.11-.47-.26-.66-.45-.19-.19-.34-.41-.45-.66-.11-.25-.17-.52-.17-.8s.06-.55.17-.8c.11-.25.26-.47.45-.65.19-.19.41-.34.66-.45.26-.11.53-.16.82-.16s.56.06.82.16c.26.11.48.26.66.45.19.18.34.4.45.65.11.25.17.52.17.8ZM127.59,2.07c0-.23-.04-.44-.13-.64-.09-.21-.21-.38-.36-.53-.15-.15-.33-.28-.54-.36-.21-.09-.42-.13-.65-.13s-.46.04-.66.13c-.2.09-.38.21-.53.36-.15.15-.28.32-.36.53-.09.2-.13.41-.13.64s.04.44.13.65c.09.2.21.37.36.53s.33.28.53.36c.21.09.43.13.66.13s.44-.04.65-.13c.21-.09.39-.21.54-.36s.28-.33.36-.53c.09-.21.13-.42.13-.65ZM126.31,3.16c-.01-.06-.03-.11-.03-.16,0-.06-.01-.13-.02-.22-.01-.2-.05-.34-.1-.42-.05-.08-.13-.12-.23-.12h-.39v.92h-.46V.95h.89c.1,0,.19,0,.29.02.1.01.18.04.24.09.07.04.13.09.18.16.04.07.07.17.07.3,0,.26-.13.44-.39.52.14.04.23.12.26.22.04.1.07.24.09.44,0,.09.02.17.03.25.01.08.04.15.08.21h-.51ZM126.28,1.58c0-.12-.04-.21-.13-.24-.08-.04-.18-.06-.3-.06h-.31v.62h.31c.12,0,.23-.02.31-.07.08-.04.12-.13.12-.25Z" />
				</svg>
			</div>
			<div className="sm:hidden">
				<button
					className="text-white hover:bg-white/10"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
				{isMenuOpen && (
					<div className="absolute top-20 right-0 bg-black text-white w-full sm:w-80 border-l border-gray-800 shadow-lg z-10 min-h-screen">
						<div className="mt-8 flex flex-col items-start gap-8 px-6 py-4">
							<Links setIsMenuOpen={setIsMenuOpen} />
						</div>
					</div>
				)}
			</div>

			<div className="hidden sm:flex items-center gap-8">
				<Links />
			</div>
		</div>
	);
}

const Links = ({
	setIsMenuOpen,
}: {
	setIsMenuOpen?: (value: React.SetStateAction<boolean>) => void;
}) => {
	return (
		<>
			<a
				href="#"
				className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
				onClick={() => setIsMenuOpen?.(false)}
			>
				Dashboard
			</a>
			<a
				href="#"
				className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
				onClick={() => setIsMenuOpen?.(false)}
			>
				About
			</a>
			<a
				href="#"
				className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
				onClick={() => setIsMenuOpen?.(false)}
			>
				FAQ
			</a>
			<a
				href="#"
				className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
				onClick={() => setIsMenuOpen?.(false)}
			>
				Blog
			</a>
		</>
	);
};
