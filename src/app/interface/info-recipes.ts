export interface InfoRecipes {
    id: string;
    body: string;
    title: string;
    tags: string[];
    image: string;
    timeCooking: number;
    foodValue:{
        calories: number;
        fats: number;
        carbohydrates: number;
        proteins: number;
    }
    cookingSteps:{    //cookingStepsClass
        title: string;
        description: string;
    }
    ingredients:{
        title: string;
        description: string;
    }
    //comments
    author:{
        id: string;
        avatar: string;
        firstName: string;
        lastName: string;
        middleName: string;
    };
    createdOn: string;
}
