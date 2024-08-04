import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Notify } from 'notiflix';
import { ApiService } from 'src/app/service/api.service';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent {
  constructor(public recipeService: RecipeService, private apiService: ApiService,
    private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
 };


 public submitted1 = false;
 recipeForm!: FormGroup;
 ngOnInit() {
   this.recipeForm = this.formBuilder.group({
     body: ['', Validators.required],
     title: ['', Validators.required],
     tags: ['', Validators.required],
     image: ['', Validators.required],
     timeCooking: [0, Validators.required],
     foodValue: [0, Validators.required],
     calories: [0, Validators.required],
     fats: [0, Validators.required],
     carbohydrates: [0, Validators.required],
     proteins: [0, Validators.required],
     cookingSteps: ['', Validators.required],
     description: ['', Validators.required],
     ingredients: ['', Validators.required],
   })
 };

 get f() { return this.recipeForm.controls; }
 

 onSubmit() {
   this.submitted1 = true;


   if (this.recipeForm.invalid) {
     return;
   }

   this.recipeService.create(this.f['body'].value,this.f['title'].value,this.f['tags'].value,this.f['image'].value,this.f['timeCooking'].value,this.f['foodValue'].value,
    this.f['calories'].value,this.f['fats'].value,this.f['carbohydrates'].value,this.f['proteins'].value,
    this.f['cookingSteps'].value,this.f['description'].value,this.f['ingredients'].value).subscribe(()=>{
    
        Notify.success('Вы успешно добавили рецепт')
        this.router.navigate(['/']);

       })
 }
}
