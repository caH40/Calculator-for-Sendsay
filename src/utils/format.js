export function formatResult(result) {
	result = result.toString();

	const resultLength = result.length;
	if (resultLength > 9 && result.includes('.')) {
		const indexOfPoint = result.indexOf('.');
		const roundedNumber = 10 ** (8 - indexOfPoint);
		const resultRounded = Math.round(result * roundedNumber) / roundedNumber;
		return resultRounded.toString().slice(0, 9).replace('.', ',');
	}
	if (resultLength > 9) {
		result = result.split('');
		result.splice(1, 0, '.');
		return `${result.join('').slice(0, 5)}e+${resultLength}`.replace('.', ',');
	}
	return result.replace('.', ',');
}
