import { CocktailsResponse } from '@/types/types';

export const fetchCocktailByName = async (param: string, signal?: AbortSignal): Promise<CocktailsResponse> => {
  try {
    const response: CocktailsResponse = await fetch(`${import.meta.env.VITE_APP_API_URL}/search.php?s=${param}`, { signal })

    return await response.json()
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted');
        return null;
      }
      console.error('Fetch error:', error.message);
    }

    console.error('Failed to fetch cocktails:', error)
    throw error
  }
}