import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetail {
  @Input() selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddToShoppingList() {
    this.shoppingListService.addMultipleIngredients(
      this.selectedRecipe.ingredients
    );
  }
}
