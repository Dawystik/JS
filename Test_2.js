var input = "In winter 1947, a young and just married Dean Moriarty comes to New York. Through his friend Carlo Marx, he gets acquainted with the writer Sal Paradise, whose talent brings him in admiration. Paradise is deeply imbued with sympathetic to Moriarty. Becoming close friends, they had been spending the next three years together traveling around the United States. Then, Sal had parted with his friend and decided to go to Denver, the Deans’ native town, where he had spending a short time with his friends. Starring a place he moved to San Francisco to his friend from college Remi Boncoeur, and then to Los Angeles, where he had seriously interested in Mexican named Terry. Soon they had left on her farm where they collected cotton plantation. At the first side it seems the connection with friends is lost, but in spite of everything they will meet again and will be on the road again …";

var counter = 0;
var less3Counter = 0;
var fourCounter = 0;
var fiveCounter = 0;
var sixCounter = 0;
var more7Counter = 0;
var wordStart = 0;

var text = input.replace(/[,.;:\/\\?!()]/g, "");

while (counter < text.length) {
	var	letter = text[counter];
	if (letter == " " || counter == text.length - 1){
		var wordLength = counter - wordStart;
		if (wordLength <= 3){
			less3Counter++;
		} else if (wordLength == 4) {
			fourCounter++;
		} else if (wordLength == 5) {
			fiveCounter++;
		} else if (wordLength == 6) {
			sixCounter++;
		} else {
			more7Counter++;
		}
		wordStart = counter + 1;
		} 
	counter++;
}
console.log(less3Counter + ' word(s) with 3 or less letters');
console.log(fourCounter + " word(s) with 4");
console.log(fiveCounter + " word(s) with 5");
console.log(sixCounter + " word(s) with 6");
console.log(more7Counter + " word(s) with 7 more letters");