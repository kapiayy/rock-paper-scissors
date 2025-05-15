

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = []
const refused = []
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for(let i = 0; i < people.length; i++){
	if(people[i] = 'Lola' || 'Phil'){
		refused.push(i)
	}else admitted.push(i)
}
// refused.textContent += ;
// admitted.textContent += ;
console.log(admitted)
console.log(refused)



