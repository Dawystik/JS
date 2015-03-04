
var book_1 = {
	title: "\"The Lost Symbol\"",
	numberOfPages: 528,
	isInteresting: true,
	yearOfPublishing: 2009,
	category: "Thriller",
	author: {
		firstName: "Dan",
		lastName: "Brown",
	},
};
var book_2 = {
	title: "Deception Point",
	numberOfPages: 576,
	isInteresting: true,
	yearOfPublishing: 2002,
	category: "Thriller",
	author: {
		firstName: "Dan",
		lastName: "Brown",
	},
	compareAmountOfPages: function() {
		if (book_1.numberOfPages > book_2.numberOfPages) {
			return 1;
		} else if (book_1.numberOfPages < book_2.numberOfPages) { 
			return -1;			
		} else {
			return 0;
		}
	},
};
var book_3 = {
	title: "\"The Da Vinci Code\"",
	numberOfPages: 496,
	isInteresting: true,
	yearOfPublishing: 2006,
	category: "Intellectual Mystery/Thriller",
	author: {
		firstName: "Dan",
		lastName: "Brown",
	},
};

function result() {
	var result = book_2.compareAmountOfPages();
	if (result == 1) {
		console.log(book_1.title + " has more pages");
	} else if (result == 0) {
		console.log("Number of pages is equal");
	} else {
		console.log(book_2.title + " has more pages");
	}
};
result();

function search(title, book) {
	if (book.title.indexOf(title) != -1) {
		console.log("The book we are searching for is " + book.title);
	} else {
		console.log("Doesn't match ");
	}
};
search("Lost", book_1);

console.log(book_1.title + " was written by " + book_1.author.firstName + " " + book_1.author.lastName 
	+ " in " + book_1.yearOfPublishing + ", "
	+ "\nit's a " + book_1.category + " on " + book_1.numberOfPages + " pages!");