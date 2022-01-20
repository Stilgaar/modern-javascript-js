const greet = name => {
    console.log(`HELLOW ${name}`)
}
greet()

greet('mario')
greet('luigiii')
greet('link')


class User {
    constructor(name, lastname) {
        this.name = name,
            this.lastname = lastname,
            this.score = 10
    }
    logout() {
        console.log(`${this.name} à loggout`)
    }
}