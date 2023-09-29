const bookPrice = 800;
const bookList = [2,2,2,1,1]

const cost = (price, books)=> {
    const discount = {
        1: 0,
        2: 0.5,
        3: 0.10,
        4: 0.20,
        5: 0.25
    };
    let sum = 0;
    let totalDisc;
    let rest;

    for (let x = 0;x<books.length;x++) {
        sum += books[x];
    }
    if (books.length >= 5) {
        rest = sum % 5;
        sum = 5;
        totalDisc = discount[sum] + discount[rest];
    }
    else {
        totalDisc = discount[sum];
    }
    let bookSum = 800 * (sum+rest);
    let discountedSum = bookSum - totalDisc * bookSum;
    console.log('Total price is: ' + '$' + discountedSum);
}

cost(bookPrice,bookList);