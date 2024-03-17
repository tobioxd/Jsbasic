const jsonNames = `["SpongeBob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob","age": 20,"isEmployed": true,"hobbies": ["eating", "sleeping", "singing"]}`;

const jsonPeople = `[{"name": "Spongebob","age": 20,"isEmployed": true},
                {"name": "Patrick","age": 20,"isEmployed": true},
                {"name": "Squidward","age": 20,"isEmployed": true},
                {"name": "Sandy","age": 20,"isEmployed": true}]`;

const parsedData = JSON.parse(jsonNames);

console.log(parsedData);

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)));