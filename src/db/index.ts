export async function fetchApi(endpoint: string) {
	return await customFetch(endpoint, {
		headers: { 'Content-Type': 'application/json' },
	});
}

const BASE_URL = 'http://localhost:9090';

async function customFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  try {
    const response = await fetch(BASE_URL + endpoint, {
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