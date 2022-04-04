import { Component, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/models/ingredient.model";
import { ShoppingListService } from "src/app/services/shopping-list.service";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})

export class ShoppingEdit {
    @ViewChild('nameInput') nameInputRef: ElementRef
    @ViewChild('amountInput') amountInputRef: ElementRef

    constructor(private shoppingListService: ShoppingListService){}

    onAddItem(){
        const ingredientName = this.nameInputRef.nativeElement.value
        const ingredientAmount = this.amountInputRef.nativeElement.value

        const newIngredient = new Ingredient(ingredientName, ingredientAmount)

        this.shoppingListService.addIngredient(newIngredient)
    }
}