import { calculatePremiums } from "./util";

describe("calculatePremiums", () => {
	it("should calculate premiums correctly for a 10% annual increase", () => {
		const result = calculatePremiums({
			annualIncrease: 10,
			currentPremium: 1000,
			maxPremium: 1200,
		});

		expect(result.premiums).toEqual([1000, 1100, 1210, 1331]);
		expect(result.premiumsLocked).toEqual([1000, 1100, 1200, 1200]);
		expect(result.totalSavings).toBe(141);
	});

	it("should not exceed max premium when annual increase is large", () => {
		const result = calculatePremiums({
			annualIncrease: 50,
			currentPremium: 1000,
			maxPremium: 1200,
		});

		expect(result.premiums).toEqual([1000, 1500, 2250, 3375]);
		expect(result.premiumsLocked).toEqual([1000, 1200, 1200, 1200]);
		expect(result.totalSavings).toBe(3525);
	});

	it("should handle 0% annual increase correctly", () => {
		const result = calculatePremiums({
			annualIncrease: 0,
			currentPremium: 1000,
			maxPremium: 1200,
		});

		expect(result.premiums).toEqual([1000, 1000, 1000, 1000]);
		expect(result.premiumsLocked).toEqual([1000, 1000, 1000, 1000]);
		expect(result.totalSavings).toBe(0);
	});

	it("should handle edge case where premiums are always capped at maxPremium", () => {
		const result = calculatePremiums({
			annualIncrease: 50,
			currentPremium: 1000,
			maxPremium: 1000,
		});

		expect(result.premiums).toEqual([1000, 1500, 2250, 3375]);
		expect(result.premiumsLocked).toEqual([1000, 1000, 1000, 1000]);
		expect(result.totalSavings).toBe(4125);
	});

	it("should handle a high maxPremium value", () => {
		const result = calculatePremiums({
			annualIncrease: 10,
			currentPremium: 1000,
			maxPremium: 10000,
		});

		expect(result.premiums).toEqual([1000, 1100, 1210, 1331]);
		expect(result.premiumsLocked).toEqual([1000, 1100, 1210, 1331]);
		expect(result.totalSavings).toBe(0);
	});
});
