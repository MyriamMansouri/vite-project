export const fetchGraphQLApi = async () => {
	const response = await fetch('http://localhost:9000', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `query { posts { id title } }`
		})
	});
	const body = await response.json();
	console.log('Response body ici from GraphQL API ici:', body);
	return body;
};

/* Function to perform custom fetch requests to the Go API */
async function customFetchGo(endpoint: string, options: RequestInit = {}) {
	try {
		const response = await fetch('http://localhost:9090' + endpoint, {
			headers: {
				'Content-Type': 'application/json',
				...(options.headers || {})
			},
			...options
		});

		if (!response.ok) {
			throw new Error(`Erreur HTTP ${response.status} : ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Erreur lors de la requête :', error);
		throw error;
	}
}
