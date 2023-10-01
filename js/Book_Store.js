const discount = {
    1: 0,
    2: 0.95,
    3: 0.90,
    4: 0.80,
    5: 0.75
};

const cost = bookList => {
    const bookCounts = {};
    for (const book of bookList) {
        if (bookCounts[book]) {
            bookCounts[book]++;
        } else {
            bookCounts[book] = 1;
        }
    }
    const differentBooks = [];
    const sameBooks = [];
    for (const book in bookCounts) {
        if (bookCounts[book] > 1) {
            sameBooks.push(book);
        } else {
            differentBooks.push(book);
        }
    }
    let totalCost = 0;
    while (differentBooks.length > 0) {
        const differentBooksCount = differentBooks.length;
        totalCost += differentBooksCount * 800 * discount[differentBooksCount];
        for (let i = 0; i < differentBooksCount; i++) {
            bookCounts[differentBooks[i]]--;
            if (bookCounts[differentBooks[i]] === 0) {
                differentBooks.splice(i, 1);
                i--;
            }
        }
    }
    for (const book in bookCounts) {
        if (bookCounts[book] > 0) {
            totalCost += bookCounts[book] * 800;
        }
    }
    if (bookList.length === 1) {
        totalCost = 800;
    }

    return console.log(`Total cost: ${totalCost / 100} dollars`);
}

const bookList = ['A','B','C','A','A','B'];
cost(bookList);
