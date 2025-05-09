import { render, screen, fireEvent } from "@testing-library/react";
import { RangeSlider } from "./RangeSlider";
import { vi } from "vitest";

describe("RangeSlider", () => {
	it("renders the component correctly", () => {
		const mockSetIncrease = vi.fn();
		const increase = 0;
		const totalSavings = 4158;

		render(
			<RangeSlider
				setIncrease={mockSetIncrease}
				increase={increase}
				totalSavings={totalSavings}
			/>,
		);

		expect(screen.getByText("4158")).toBeInTheDocument();

		const slider = screen.getByRole("slider");
		expect(slider).toBeInTheDocument();
		expect(slider).toHaveValue(increase.toString());
	});

	it("updates the value of increase when the slider is moved", () => {
		const mockSetIncrease = vi.fn();
		const increase = 0;
		const totalSavings = 100;

		render(
			<RangeSlider
				setIncrease={mockSetIncrease}
				increase={increase}
				totalSavings={totalSavings}
			/>,
		);

		const slider = screen.getByRole("slider");
		fireEvent.change(slider, { target: { value: "25" } });

		expect(mockSetIncrease).toHaveBeenCalledWith(25);

		fireEvent.change(slider, { target: { value: "50" } });

		expect(mockSetIncrease).toHaveBeenCalledWith(50);
	});

	it("does not allow the slider to exceed 50%", () => {
		const mockSetIncrease = vi.fn();
		const increase = 100;
		const totalSavings = 500;

		render(
			<RangeSlider
				setIncrease={mockSetIncrease}
				increase={increase}
				totalSavings={totalSavings}
			/>,
		);

		const slider = screen.getByRole("slider");

		fireEvent.change(slider, { target: { value: "58" } });

		expect(mockSetIncrease).not.toHaveBeenCalledWith(58);
	});

	it("displays the correct range percentage labels", () => {
		const mockSetIncrease = vi.fn();
		const increase = 0;
		const totalSavings = 100;

		render(
			<RangeSlider
				setIncrease={mockSetIncrease}
				increase={increase}
				totalSavings={totalSavings}
			/>,
		);

		expect(screen.getByText("0%")).toBeInTheDocument();
		expect(screen.getByText("50%")).toBeInTheDocument();
	});
});
