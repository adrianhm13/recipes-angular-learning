import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/models/ingredient.model";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})

export class ShoppingEdit {
    @ViewChild('nameInput') nameInputRef: ElementRef
    @ViewChild('amountInput') amountInputRef: ElementRef
    @Output() ingredientAdded = new EventEmitter<Ingredient>()

    constructor(){}

    onAddItem(){
        const ingredientName = this.nameInputRef.nativeElement.value
        const ingredientAmount = this.amountInputRef.nativeElement.value

        const newIngredient = new Ingredient(ingredientName, ingredientAmount)

        this.ingredientAdded.emit(newIngredient)
    }
}