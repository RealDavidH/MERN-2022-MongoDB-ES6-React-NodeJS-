const express = require('express')

const app = express()
const port = 8000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(port, () => console.log(`Listening on port: ${port}`));

const { faker } = require('@faker-js/faker');
class User {
    constructor() {
        this.first_name = faker.name.firstName()
        this.last_name = faker.name.lastName()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
        this.phone_num = faker.phone.phoneNumber()
        this._id = faker.random.numeric(5)
    }
}

class Company {
    constructor() {
        this.comp_name = faker.company.companyName()
        this.phrase = faker.company.bs()
        this.addy = {
            'Street': faker.address.streetName(),
            'City': faker.address.cityName(),
            'State': faker.address.state(),
            'ZipCode': faker.address.zipCode(),
            'Country': faker.address.country()
        }
    }
}

const user1 = new User()
const company1 = new Company()


const users = []
const companies = []
//get all
app.get("/api/users", (req, res) => {
    res.json(users)
    res.json({ status: "ok" });
});

app.get("/api/companies", (req, res) => {
    res.json(companies)
    res.json({ status: "ok" });
});

app.get("/api/companies/users", (req, res) =>{
    res.json({
        'companies': companies,
        'users': users
    })
    res.json({status: 'ok'})
})

//create
app.post("/api/users/new", (req, res) =>{
    users.push(new User());
    let last = users.length-1
    res.json(users[last])
    res.json( { status: "ok" } );
})

app.post("/api/company/new", (req, res) =>{
    companies.push(new Company());
    let last = companies.length-1
    res.json(companies[last])
    res.json( { status: "ok" } );
})

