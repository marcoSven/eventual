function calculatePremiums({
	annualIncrease,
	currentPremium,
	maxPremium,
}: {
	annualIncrease: number;
	currentPremium: number;
	maxPremium: number;
}): {
	premiums: number[];
	premiumsLocked: number[];
	totalSavings: number;
} {
	const premiums = [currentPremium];
	const premiumsLocked = [currentPremium];
	let totalSavings = 0;

	for (let i = 1; i <= 3; i++) {
		const prev = premiums[i - 1];
		const full = prev * (1 + annualIncrease / 100);
		const capped = Math.min(full, maxPremium);
		premiums.push(full);
		premiumsLocked.push(capped);

		if (full > maxPremium) {
			totalSavings += full - maxPremium;
		}
	}

	return {
		premiums: premiums.map((premium) => Math.round(premium)),
		premiumsLocked: premiumsLocked.map((premium) => Math.round(premium)),
		totalSavings: Math.round(totalSavings),
	};
}

export { calculatePremiums };
