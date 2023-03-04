
const user = {
    name: 'Raju',
    location: {
        state: 'Karnataka',
        country: 'India',
    },
    profession: 'Web developer'
};


// Basic Object   

console.log(user.name); // Raju

const { name } = user;
console.log(name); // Raju

const { name, location } = user;
console.log(location); //{ state: 'Karnataka', country: 'India' }

const { location: { state } } = user;
console.log(state); //Karnataka

// Object with Rename

const { name: FirstName } = user;
console.log(FirstName); // Raju

// Object with rest

const { name, location, ...rest } = user;
console.log(rest); //{ profession: 'Web developer' } 