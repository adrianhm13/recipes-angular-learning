import { Component } from "@angular/core";
import { Recipe } from "src/app/models/recipe.model";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html'
})

export class Recipes {
    selectedRecipe: Recipe
    
    constructor(){}


}