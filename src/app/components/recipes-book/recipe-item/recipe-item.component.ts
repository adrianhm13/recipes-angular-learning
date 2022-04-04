import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItem {
  @Input() recipe: Recipe;
  @Output() recipeClicked = new EventEmitter<void>();
  constructor() {}

  onClickRecipe() {
    this.recipeClicked.emit();
  }
}
