let container = document.querySelector('.container')
let newForm  = document.querySelector('.form');
let newButton = document.querySelector('.newBook');
let bookTitle = document.querySelector('#bookTitle');
let bookAuthor = document.querySelector('#bookAuthor');
let bookPages = document.querySelector('#bookPages');
let bookRead = document.querySelector('#bookRead');

newButton.addEventListener('click', showForm);
newForm.addEventListener('submit', Form);

//store new book into an array
let myLibrary = [];

function Book(title, author, pages){
	this.id;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = false;
	this.info = function() { 
		if (this.read == true) {
			return `${title}, ${author}, ${pages} read`;
		} else if(this.read == false) {
			return `${title}, ${author}, ${pages} not read`;
		}
	};
	this.setId = function(id){
		this.id = id;
	};
	this.iRead = function() {
		this.read = true
	};
};

//Form 

function Form(event){
	event.preventDefault();
	book = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
	addBookToLibrary(book);
	refresh();
	newForm.reset();
};

function showForm(){
	if (newForm === 'block') {
		newForm.style.display = 'none';
	} else {
		newForm.style.display = 'block';
	};
};

function addBookToLibrary(book){
	myLibrary.push(book);
};

function displayLibrary() {
	for(let i = 0; i < myLibrary.length; i++){
		let book = myLibrary[i];
		book.setId(i);
		displayBook(book, i);
	};
};

function refresh() {
	displayLibrary();
}

//function to display book

function displayBook(book){
	let bookCard = document.createElement('div');
	bookCard.classList.add("card");
	let bookInfo = document.createElement('h3');
	bookInfo.innerHTML = book.info();
	bookCard.appendChild(bookInfo);
	if(book.read == false) {
		let readButton = document.createElement('button');
		readButton.innerHTML = 'Have you read this?';
		readButton.classList.add('button');
		bookCard.appendChild(readButton);
		readButton.addEventListener('click', function(event) {
			iReadBook(book);
			displayLibrary();
		});
	};
	container.appendChild(bookCard);
};

//Remove  book
function deleteBook(){

};

//Book Read
function iReadBook(book){
	book.iRead();
};

displayLibrary();

/*function theHobbit(info) {
	this.info = info
	console.log(info)
}

const book = new theHobbit("The Hobbit by J.R.R. Tolkien, 295 pages, not read yet")

console.log(theHobbit.info);*/