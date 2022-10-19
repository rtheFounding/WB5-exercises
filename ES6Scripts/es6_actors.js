let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

//member whose id is 187

console.log(academyMembers.find((array) => array.memID == "187").name);

// or

let findAcademyMember = academyMembers.find((array) => array.memID == "187");

if (findAcademyMember != undefined) {
    console.log("Member with a memID of 187 is " + findAcademyMember.name)
}

// whos been in at least 3 films
let overthree = academyMembers.filter(n => n.films.length >= 3);

overthree.forEach(n => console.log(">3 films: " + n.name))

// or

for (let i = 0; i < overthree.length; i++) {
    console.log("Who's been in at least three films? " + overthree[i].name)
}

// who has a name that starts with "Bob"
let nameThatStarts = academyMembers.filter((array) => array.name.indexOf("Bob") != -1)

nameThatStarts.forEach(n => console.log("Name that starts with Bob: " + n.name))

// or

for (let i = 0; i < nameThatStarts.length; i++) {
    console.log("Name that starts with Bob: " + nameThatStarts[i].name)
}

// Which Academy Members have been in a film that starts with "A";
let findFilm = academyMembers.filter((array) => array.films.length > 0);
for (let i = 0; i < findFilm.length; i++) {
    //console.log(findFilm[i])
    for (let j = 0; j < findFilm[i].films.length; j++) {
        if (findFilm[i].films[j].indexOf("A") == -1) {
            console.log("Doesn't start with A: " + findFilm[i].name)
        } else {
            console.log("Academy Members that have been in a film that starts with A: " + findFilm[i].name)
        }
    }
} 
