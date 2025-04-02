import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CocktailItem from '../../src/components/CocktailItem.vue';

describe('CocktailItem', () => {
  const mockCocktail = {
    strDrink: 'Mojito',
    strDrinkThumb: 'mojito.jpg',
    strCategory: 'Ordinary Drink',
    strAlcoholic: 'Alcoholic',
    strGlass: 'Cocktail glass',
    strInstructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. ',
    strIngredient1: 'Tequila',
    strIngredient2: 'Triple sec',
    strIngredient3: 'Lime juice',
    strIngredient4: 'salt',
    strMeasure1: '1 1/2 oz',
    strMeasure2: '1/2 oz tsp',
    strMeasure3: '1 oz',
    strMeasure4: null,
  };

  it('shows cocktail info', () => {
    const wrapper = mount(CocktailItem, {
      props: {
        cocktail: mockCocktail,
      },
    });

    expect(wrapper.find('.cocktail__title').text()).toBe(mockCocktail.strDrink);
    expect(wrapper.find('.cocktail__text').text()).toContain(mockCocktail.strCategory);
    expect(wrapper.find('.cocktail__text').text()).toContain(mockCocktail.strAlcoholic);
    expect(wrapper.find('.cocktail__text').text()).toContain(mockCocktail.strGlass);
    expect(wrapper.find('.cocktail__text').text()).toContain(mockCocktail.strInstructions);
  });

  it('shows ingredients list', () => {
    const wrapper = mount(CocktailItem, {
      props: {
        cocktail: mockCocktail,
      },
    });

    const ingredients = wrapper.findAll('.cocktail__ingredient');
    const measures = wrapper.findAll('.cocktail__measure');

    expect(ingredients.length).toBe(3);
    expect(measures.length).toBe(3);

    expect(ingredients[0].text()).toBe(mockCocktail.strIngredient1);
    expect(measures[0].text()).toBe(mockCocktail.strMeasure1);

    expect(ingredients[1].text()).toBe(mockCocktail.strIngredient2);
    expect(measures[1].text()).toBe(mockCocktail.strMeasure2);

    expect(ingredients[2].text()).toBe(mockCocktail.strIngredient3);
    expect(measures[2].text()).toBe(mockCocktail.strMeasure3);
  });
});
