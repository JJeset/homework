const users = [
    {
        name: 'Andrew',
        age: 28,
        isAdmin: true,
        sayHello(name) {
            console.log(`Hello, ${name}`);
        }
    },
    {
        name: 'Tigr',
        age: 25,
        isAdmin: false
    },
    {
        name: 'Lev',
        age: 28,
        isAdmin: false
    }, 
    {
        name: 'Alex',
        age: 35,
        isAdmin: true
    }
]

let usersNotPrivileged = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].isAdmin === false) {
            usersNotPrivileged++;
        }

    }   console.log(usersNotPrivileged);

    console.log(users[0].name);
    users[0].sayHello('Kurator');