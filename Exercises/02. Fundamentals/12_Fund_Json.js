// Convierte el user a JSON y luego léalo de vuelta en otra variable.

let user = {
    name: "John Smith",
    age: 35
};

const json = JSON.stringify(user);
const user2 = JSON.parse(json);

//Escriba la función replacer para convertir todo a string, pero elimine las propiedades que hacen referencia a meetup:

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

// referencias circulares
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    if (key !== '' && value === meetup){ // no es la primera llamada, es las circulares
        return undefined;
    } else {
        return value;
    }
}));

/* el resultado debería ser:
{
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
}
*/