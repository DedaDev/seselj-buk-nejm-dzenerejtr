import { people, titles, adjectives } from './static.js';

function generateBookTitle(SECOND_ADJ_CHANCE = 0.2) {
	// find random person and add it to result
	const person = people[Math.floor(Math.random() * people.length)];

	const titleObject = titles[Math.floor(Math.random() * titles.length)];

	// should use alternative word
	const alt = titleObject.gendered && titleObject.gender_main !== person.gender;

	const title = titleObject[alt ? 'word_alt' : 'word_main'];
	const title_gender = titleObject[alt ? 'gender_alt' : 'gender_main'];

	const first_adj = adjectives[Math.floor(Math.random() * adjectives.length)];
	const second_adj = adjectives[Math.floor(Math.random() * adjectives.length)];

	const adjOne = first_adj[title_gender];
	const adjTwo = second_adj[title_gender];

	const useTwoAdjectives = () => Math.random() < SECOND_ADJ_CHANCE && first_adj != second_adj;

	let words = [ adjOne, title, person.name ];

	if (useTwoAdjectives()) words = [ adjTwo, ...words ];
	return words.join(' ');
}

let result = generateBookTitle();

result = result.charAt(0).toUpperCase() + result.slice(1);

const element = document.querySelector('#title');
element.innerText = result;
