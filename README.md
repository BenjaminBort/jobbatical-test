# jobbatical-test

Jobbatical technical test
Part front-end / back-end

## Basic Usage
Clone directory

### Install dependencies
Go where `package.json` is located (root directory)
```Shell
npm install
```

### Run project
Go where `package.json` is located (root directory)
```Shell
npm start
```

### Front-end
Visit http://127.0.0.1:3000

Linked files is located in /public directory

### Back-end
Launch Postman

### Available routes
Returns user info, count of applications in the last week and the names of the 3 latest applied listings.
```Shell
[GET] http://127.0.0.1:3000/topActiveUsers?page={{page}}
```

Takes user id and returns user info
```Shell
[GET] http://127.0.0.1:3000/users?id={{user_id}}
```
