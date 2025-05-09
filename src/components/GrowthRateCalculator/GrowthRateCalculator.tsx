import React, { useState, useMemo, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	type ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import annotationPlugin from "chartjs-plugin-annotation";
import { calculatePremiums } from "./util";
import { RangeSlider } from "./RangeSlider";

ChartJS.register(
	annotationPlugin,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ChartDataLabels,
);

const MAX_PREMIUM = 4371;
const CURRENT_PREMIUM = 2950;

const GrowthRateCalculator: React.FC = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const checkWidth = () => {
			if (window.innerWidth <= 400) {
				setIsSmallScreen(true);
			} else {
				setIsSmallScreen(false);
			}
		};

		checkWidth();

		window.addEventListener("resize", checkWidth);

		return () => {
			window.removeEventListener("resize", checkWidth);
		};
	}, []);
	const [increase, setIncrease] = useState(25);

	const { premiums, premiumsLocked, totalSavings } = useMemo(
		() =>
			calculatePremiums({
				annualIncrease: increase,
				currentPremium: CURRENT_PREMIUM,
				maxPremium: MAX_PREMIUM,
			}),
		[increase],
	);

	const overallMaxValue = useMemo(() => {
		if (!premiums || premiums.length === 0) {
			return 100;
		}
		const maxVal = Math.max(...premiums);

		return maxVal > 0 ? maxVal * 1.1 : 100;
	}, [premiums]);

	const barColor = useMemo(
		() =>
			premiums.map((premium) => {
				if (premium > MAX_PREMIUM) {
					return "rgba(251, 72, 56, 1.0)";
				}
				return "rgba(207, 206, 211, 1.0)";
			}),
		[premiums],
	);

	const barLockedColor = useMemo(
		() =>
			premiums.map((premium) => {
				if (premium > MAX_PREMIUM) {
					return "rgba(51, 132, 76, 1.0)";
				}
				return "rgba(207, 206, 211, 1.0)";
			}),
		[premiums],
	);

	const fontSize = isSmallScreen ? 10 : 18;

	const data = {
		labels: ["Current", "Year 1", "Year 2", "Year 3"],
		datasets: [
			{
				label: "Annual Premium",
				data: premiums,
				maxBarThickness: 90,
				borderRadius: {
					topLeft: 10,
					topRight: 10,
					bottomLeft: 5,
					bottomRight: 5,
				},
				borderSkipped: false,
				backgroundColor: barColor,
				hoverBackgroundColor: barColor,
			},
		],
	};

	const options: ChartOptions<"bar"> = useMemo(
		() => ({
			responsive: true,
			layout: {
				padding: {
					top: 30,
					bottom: 10,
				},
			},
			plugins: {
				tooltip: {
					enabled: false,
				},
				legend: { display: false },
				datalabels: {
					anchor: "end",
					align: "start",
					offset: -26,
					formatter: (value: number) => `$${value}`,
					color: "#CFCED3",
					font: { size: fontSize },
				},
			},
			scales: {
				x: {
					ticks: {
						color: "#656565",
						font: {
							size: fontSize,
						},
					},
				},
				y: {
					beginAtZero: true,
					display: false,
					max: overallMaxValue,
				},
			},
		}),
		[fontSize, overallMaxValue],
	);

	const dataLocked = {
		labels: ["Current", "Year 1", "Year 2", "Year 3"],
		datasets: [
			{
				label: "Annual Premium",
				data: premiumsLocked,
				maxBarThickness: 90,
				borderRadius: {
					topLeft: 10,
					topRight: 10,
					bottomLeft: 5,
					bottomRight: 5,
				},
				borderSkipped: false,
				backgroundColor: barLockedColor,
				hoverBackgroundColor: barLockedColor,
			},
		],
	};

	const optionsLocked: ChartOptions<"bar"> = useMemo(
		() => ({
			responsive: true,
			layout: {
				padding: {
					top: 30,
					bottom: 10,
				},
			},
			plugins: {
				tooltip: {
					enabled: false,
				},
				legend: { display: false },
				datalabels: {
					anchor: "end",
					align: "start",
					offset: -26,
					formatter: (value: number) => `$${value}`,
					color: "#CFCED3",
					font: { size: fontSize },
				},
				annotation: {
					annotations: {
						line1: {
							type: "line",
							yMin: MAX_PREMIUM,
							yMax: MAX_PREMIUM,
							borderColor: "rgba(51, 132, 76, 1.0)",
							borderWidth: 2,
							borderDash: [5, 5],
						},
					},
				},
			},
			scales: {
				x: {
					ticks: {
						color: "#656565",
						font: {
							size: fontSize,
						},
					},
				},
				y: {
					beginAtZero: true,
					display: false,
					max: overallMaxValue,
				},
			},
		}),
		[fontSize, overallMaxValue],
	);

	return (
		<section className="p-6 mx-auto rounded-lg shadow text-white text-center container">
			<h2 className="uppercase text-gray-50">Comparison Table</h2>
			<p className="text-5xl mt-5 mb-15">See how much you could save</p>

			<RangeSlider
				increase={increase}
				setIncrease={setIncrease}
				totalSavings={totalSavings}
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-50">
				<div className="bg-gray-800 border-2 border-gray-50 p-6 rounded-xl md:rounded-tl-4xl md:rounded-bl-4xl md:rounded-tr-none md:rounded-br-none">
					<h4 className="text-2xl mb-2 text-left">Without Premium Lock</h4>
					<Bar data={data} options={options} plugins={[ChartDataLabels]} />{" "}
				</div>
				<div className="bg-gray-800 border-2 border-gray-50 p-6 rounded-xl md:rounded-tr-4xl md:rounded-br-4xl md:rounded-tl-none md:rounded-bl-none md:border-r-2 md:border-gray-50">
					<h4 className="text-2xl mb-2 text-left">With Premium Lock</h4>
					<Bar
						data={dataLocked}
						options={optionsLocked}
						plugins={[ChartDataLabels, annotationPlugin]}
					/>{" "}
				</div>
			</div>
		</section>
	);
};

export default GrowthRateCalculator;
