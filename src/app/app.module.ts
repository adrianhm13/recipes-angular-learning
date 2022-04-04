import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Recipes } from './components/recipes-book/recipes.component';
import { RecipeDetail } from './components/recipes-book/recipe-detail/recipe-detail.component';
import { RecipeItem } from './components/recipes-book/recipe-item/recipe-item.component';
import { RecipesList } from './components/recipes-book/recipe-list/recipes-list.component';
import { ShoppingList } from './components/shopping-list/shopping-list.component';
import { ShoppingEdit } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeDetail,
    RecipeItem,
    RecipesList,
    Recipes,
    ShoppingList,
    ShoppingEdit,
    DropdownDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
