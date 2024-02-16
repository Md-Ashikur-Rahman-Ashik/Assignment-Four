const actor = {
    name: "Sakib Khan",
    id: 121,
    address: "Movie",
    isSingle: true,
    friends: ["Apu", "Raz", "Salman", "Amir"],
    movies: [
        {
            name: "No.1",
            year: 2015,
        },
        {
            name: "King Khan",
            year: 2018
        }
    ],
    act: function(){
        console.log("Acting like Sakib Khan.");
    },
    car: {
        brand: "Tesla",
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: "Tesla",
            ceo: "Elon",
            country: "USA"
        }
    }
}

// console.log(student);
// console.log(student.friends);
// console.log(student.car);
// console.log(actor.act);
// actor.act();

