// concise arrow function
const findAccountById = (accounts, id) => accounts.find(account => account.id === id);

function sortAccountsByLastName(accounts) {
  accounts.sort((prev, curr) => prev.name.last > curr.name.last ? 1 : -1);
  return accounts;
}

// named function expression
const getAccountFullNames = function getFullNames(accounts) {
  return accounts.map(account => {
    // nested object destructuring with custom name for variables.
    const { name: { first: firstName, last: lastName } } = account;
    return `${firstName} ${lastName}`;
  });
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
