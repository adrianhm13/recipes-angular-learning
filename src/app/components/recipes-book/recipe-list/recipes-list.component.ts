import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesList implements OnInit{
  recipes: Recipe[]

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
      this.recipes = this.recipeService.getRecipes()
  }
}
