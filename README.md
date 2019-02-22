# Jobly

![Jobly Snapshot](/jobly01.png?raw=true "Jobly Snapshot")

Jobly is a Javascript concept app to mimic the capabilities of LinkedIn. Users can create accounts to log in and search for companies and corresponding jobs. Users can then apply to any job.

The website is built with a React frontend and Express backend. Data is managed with Postgres.

## Getting Started

The app requires a backend server where data requests are made.

From cloned repo folder, navigate to /backend folder and install dependencies:

```
cd backend
npm install
```

Create Postgres database **jobly** and seed data:

```
createdb jobly
psql jobly < data.sql
```

Start up node server:

```
nodemon server.js
```

On separate terminal window, navigate to /frontend folder and install client-side dependencies:

```
cd frontend
npm install
```

Start up frontend React server:

```
npm start
```

App should start running with client-side connecting to backend.

## App Features

Account creation is required to explore features of the app. Valid email address is _not_ required, but password is hashed and account is authenticated using [bcrypt](https://www.npmjs.com/package/bcrypt).

For demo purposes, please use username: "testuser", password: "secret"

Once logged in, user can explore randomly generated list of companies, tab through pages, and search for keywords in company names. Selecting a company will display all jobs available from that company.

Similar browsing experience exists for jobs. User can apply to jobs, but cannot un-apply (similar to live experience).

Users can update their profile, but cannot change their username. Their valid password is needed to update the profile.

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [Express](https://expressjs.com/) - Backend framework
- [Postgres](https://www.postgresql.org/) - Relational Database System

## Future Features

- Display company that specific job is available for
- Allow users to un-apply to jobs within certain timeframe
- Dynamic live searching
- Track jobs user has applied to
- Upload resume
- Add new companies and corresponding jobs
- Search by industry, position, size, etc.
