import { Injectable } from '@angular/core';
import { InfoRecipes } from '../interface/info-recipes';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient, private router: Router) { }
  uri = "https://evo-academy.wckz.dev/api/cooking-blog/posts";


  create(
    body: string,
    title: string,
    tags: string[],
    image: string,
    timeCooking: number,
    foodValue: string[],
    calories: number,
    fats: number,
    carbohydrates: number,
    proteins: number,
    cookingSteps: string[],
    description: string,
    ingredients: string[]
  ) {
    return this.http.post(`${this.uri}/create`, {
      body,
      title,
      tags,
      image,
      timeCooking,
      foodValue,
      calories,
      fats,
      carbohydrates,
      proteins,
      cookingSteps,
      description,
      ingredients
    })}
}
