export async function getData(instruction: string) {
	const url = 'http://localhost:9090';

	try {
		const response = await fetch(url + instruction, {
			headers: { 'Content-Type': 'application/json' },
		});

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error(error);
	}
}
