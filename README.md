# Application Contacts
Case - Application Contacts

## Prerequisites

1. [Docker](https://www.docker.com/)
2. [Node](https://nodejs.org/en/)
3. [Yarn](https://yarnpkg.com/)

## How to run
You will need a postgres instance for database and a database named by <b>contacts</b>. Docker is recomended.

Run in docker: ```docker run --name app-contacts -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres```

<b>Note</b>: every time when the docker shutdowns, you will need to start the container again: ```docker start CONTAINER_ID```

To install all dependencies: ```yarn```

To config ORM and Database Migrations: ```yarn ts-node ./node_modules/typeorm/cli.js migration:run```

To run all tests: ```yarn test```

To run in development mode: ```yarn dev```

To build: ```yarn build```

To run in production mode: ```yarn start```

## Routes & Requests

##### [GET]
Endpoint: ```http://localhost:3000/users```

Response: Must return an array with all users.

##### [POST]
Endpoint: ```http://localhost:3000/users```

Body:
```json
{
  "name": "José Elias Gonçalves Leiva",
  "birth_date": "02/19/2000",
  "cpf": "488.987.098-97",
  "rg": "59.053.982-6",
  "phones": [
    {"phone_number": "14996023246", "type": "home"},
    {"phone_number": "14998972815", "type": "work"}
  ],
  "addresses": [
    {
      "street": "Rua Benjamin Constant, 246",
      "city": "Quintana",
      "state": "SP",
      "country": "Brazil",
      "zipcode": "17670000",
      "type": "home"
    },
    {
      "street": "Rua Francisco Pereira Bezerra, 180",
      "city": "Presidente Prudente",
      "state": "SP",
      "country": "Brazil",
      "zipcode": "19062304",
      "type": "other"
    }
  ],
  "facebook": "https://www.facebook.com/joseelias.goncalvesleiva/",
  "linkedin": "https://www.linkedin.com/in/joseeliasgoncalvesleiva/",
  "twitter": "https://twitter.com/jeliasgl",
  "instagram": "https://www.instagram.com/zeliasgl/"
}
```

Response: Must return the created user.

##### [PATCH]
Endpoint: ```http://localhost:3000/users```

Body:
```json
{
  "id": "16fb540d-4eef-41f1-aea1-9a11495d3f6f",
  "name?": "José Elias Gonçalves Leiva",
  "birth_date?": "02/19/2000",
  "cpf?": "488.987.098-97",
  "rg?": "59.053.982-6",
  "phones?": [],
  "addresses?": [],
  "facebook?": "https://www.facebook.com/joseelias.goncalvesleiva/",
  "linkedin?": "https://www.linkedin.com/in/joseeliasgoncalvesleiva/",
  "twitter?": "https://twitter.com/jeliasgl",
  "instagram?": "https://www.instagram.com/zeliasgl/"
}
```

**Note:** fields with a ? character aren't obligatory.

Response: Must return the updated user.

---

## License

This project is under the MIT license. See the file [LICENSE](LICENSE) for more details.
