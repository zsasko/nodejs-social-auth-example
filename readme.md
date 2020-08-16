# NodeJS Social Auth Example

This project is sample application that demonstrates authorization using email, google and facebook in NodeJS web application.
![](https://cdn-images-1.medium.com/max/800/1*XpU8fmdPGCRwSlcuWahzdQ.jpeg)

It's a source code for the following article on the medium:

- https://medium.com/@zoransasko/implementing-facebook-google-and-email-authentication-in-nodejs-f1898c64330f

In order to start this sample, please make sure that you specify the right data for establishing MySQL connection:
```
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=test_nodejs_auth
```
After that, please execute the following commands:
```
npm install
npx sequelize db:migrate
nodemon App.js
```