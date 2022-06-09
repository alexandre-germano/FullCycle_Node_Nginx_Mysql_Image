const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb',
    port: 3306
};

 var people = '';
 const mysql = require('mysql')
 const connection = mysql.createConnection(config)
 createDb(connection);
 fillPeople(connection);
 getPeople();
 connection.end()


app.get('/', (req,res) => {

    var peopleHtml = '';

    people.forEach(person => {
        peopleHtml += `<li>${person.id} - ${person.name}</li>`
    });

    res.send(`<h1>Full Cycle Rocks</h1> ${peopleHtml}`)

})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

function createDb(connection)
{
    connection.query(`CREATE TABLE IF NOT EXISTS people (id int NOT NULL auto_increment, name varchar (255), primary key(id))`);
}

function fillPeople(connection)
{
    connection.query(`INSERT INTO people(name) values('Alexandre')`);
    connection.query(`INSERT INTO people(name) values('Poliana')`);
    connection.query(`INSERT INTO people(name) values('Miguel')`);
}

function getPeople() {
    
    connection.query("SELECT * FROM people", function (err, result) {
        if (err)
            console.log(err);
            people = result;
    });
}
