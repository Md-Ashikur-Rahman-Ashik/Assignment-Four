function monthlySavings(arr, livingCost){
    if(!Array.isArray(arr) || typeof livingCost !== "number"){
        return "Invalid Input";
    }

    let incomeAfterTax = 0;
    for(let income of arr){
        if(income >= 3000){
            income = income - (income * 20 / 100);
        }
        incomeAfterTax = incomeAfterTax + income;
    }

    let saving = incomeAfterTax - livingCost;
    if(saving < 0){
        return "earn more";
    }
    return saving;

}