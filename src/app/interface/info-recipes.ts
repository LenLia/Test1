export interface InfoRecipes {
    id: string;
    body: string;
    title: string;
    tags: string;
    image: string;
    timeCooking: number;
    foodValue:{
        calories: string;
        fats: string;
        carbohydrates: string;
        proteins: string;
    }
    /*cookingSteps:{    //cookingStepsClass
        title: string;
        description: string;
    }*/
    //ingredients
    //comments
    author:{
        id: string;
        avatar: string;
        firstName: string;
        lastName: string;
        middleName: string;
    }
}
