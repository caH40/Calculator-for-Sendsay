export function formatResult(result) {
	result = result.toString();
	const resultLength = result.length;
	if (resultLength > 9 && result.includes('.')) {
		return Number(result).toFixed(7).replace('.', ',');
	}
	if (resultLength > 9) {
		result = result.split('');
		result.splice(1, 0, '.');
		return `${result.join('').slice(0, 5)}e+${resultLength}`.replace('.', ',');
	}
	return result.replace('.', ',');
}
