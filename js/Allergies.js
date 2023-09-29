const ifAllergic = aNum => {
    const allergies = {
        eggs: 1,
        peanuts: 2,
        shellfish: 4,
        strawberries: 8,
        tomatoes: 16,
        chocolate: 32,
        pollen: 64,
        cats: 128,
    };
    const youHvae = [];
    for (const allergen in allergies) {
        if (aNum & allergies[allergen]) {
            youHvae.push(allergen);
        }
    }
    if (youHvae.length > 0) {
        console.log('Tom is allergic!');
        console.log(`Tom is allergic to: ${youHvae}.`);
    }
    else {
        console.log("Tom has no allergies");
    }
};
const askAllergyNumber = prompt("Choose a allergy number");
ifAllergic(askAllergyNumber);
