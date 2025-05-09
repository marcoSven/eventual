export function RangeSlider({
	setIncrease,
	increase,
	totalSavings,
}: {
	increase: number;
	setIncrease: React.Dispatch<React.SetStateAction<number>>;
	totalSavings: number;
}) {
	return (
		<>
			<div className="relative inline-block text-5xl leading-[70px]">
				<span className="w-[32px] h-[74px] absolute border border-transparent -left-[15px] before:content-[' '] before:absolute before:inset-x-0 before:left-1/2 before:w-2 before:-translate-x-1/2 before:top-1/2 before:h-[80%] before:-translate-y-1/2 before:bg-black before:-z-1 z-1 after:content-['$'] after:absolute after:inset-x-0 after:left-[9.5px] after:-translate-x-1/2 after:top-[35px] after:-translate-y-1/2"></span>
				<div className="border-2 border-gray-50 min-w-40 text-center">
					{totalSavings}
				</div>
			</div>

			<div className="mb-7 max-w-4xl mx-auto mt-5">
				<input
					type="range"
					min="0"
					max="50"
					value={increase}
					onChange={(e) => {
						const value = Number(e.target.value);
						if (value <= 50) {
							setIncrease(value);
						}
					}}
					className="w-full mt-2 appearance-none bg-transparent
                    [&::-webkit-slider-runnable-track]:bg-white 
                    [&::-webkit-slider-runnable-track]:h-1 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:h-4 
                    [&::-webkit-slider-thumb]:w-4 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-white 
                    [&::-webkit-slider-thumb]:mt-[-6px] 
                    [&::-webkit-slider-thumb]:cursor-pointer"
				/>
				<div className="flex justify-between text-sm text-gray-500 mt-1">
					<span>0%</span>
					<span>50%</span>
				</div>
			</div>
		</>
	);
}
