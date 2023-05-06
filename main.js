const buttonAdd = document.getElementById("bookSumbit");
const updateBook = document.getElementById("bookUpdate");

// web storage requirement
const localStorageKey = "bookselfApp";
let bookselfApp = [];

// check browser support storage
const checkSupportedStorage = () => {
    return typeof Storage !== undefined;
}

if (checkSupportedStorage()) {
    if (localStorage.getItem(localStorageKey) == null) {
        bookselfApp = [];
    } else {
        bookselfApp = JSON.parse(localStorage.getItem(localStorageKey));
    }
    localStorage.setItem(localStorageKey, JSON.stringify(bookselfApp));
}

