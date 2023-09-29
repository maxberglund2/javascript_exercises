/* 1 */

const dayRate = a => a*8;
console.log(dayRate(89));

/* 2 */

daysInBudget = a => console.log(Math.floor(a/dayRate(89)));
daysInBudget(20000,89);

/* 3 */

const priceWithMonthlyDiscount = (hourlyRate, projectDays, discount) => {
    const monthlyRate = dayRate(hourlyRate) * 22;
    const months = Math.floor(projectDays / 22);
    const remainingDays = projectDays % 22;
  
    const discountedMonthlyCost = monthlyRate * (1 - discount);
    const remainingCost = remainingDays * dayRate(hourlyRate);
  
    const totalCost = (discountedMonthlyCost * months) + remainingCost;
    return Math.ceil(totalCost);
  };
  
  console.log(priceWithMonthlyDiscount(89, 230, 0.42));