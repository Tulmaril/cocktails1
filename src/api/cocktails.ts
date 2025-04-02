import { CocktailsResponse } from '@/types/types';

export const fetchCocktailByName = async (param: string): Promise<CocktailsResponse> => {
  try {
    const response: CocktailsResponse = await fetch(`${import.meta.env.VITE_APP_API_URL}/search.php?s=${param}`)

    if (Math.random() < 0.1) {
      throw new Error(`Error. This error simulates error. 10% channce, try again`);
    }
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch cocktails:', error)
    throw error
  }
}