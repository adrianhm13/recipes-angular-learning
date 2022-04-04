import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItem {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipesService) {}

  onClickRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
