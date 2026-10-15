# Student Project Tracker — Cloud Variant

## Overview

This project is a hands-on web app development cloud variant of the Student Project Tracker. It uses a web interface and an Express.js backend connected to a cloud PostgreSQL database.

## Technology Stack

- **Frontend:** HTML, CSS and JavaScript
- **Backend:** Node.js and Express.js
- **Database:** Supabase PostgreSQL
- **Hosting:** Vercel
- **Source control:** GitHub

## Local Setup

### Prerequisites

Install Node.js and ensure npm is available.

### 1. Install dependencies

Open a terminal in the project folder and run:

```powershell
npm.cmd ci
```

### 2. Configure environment variables

Create a private `.env` file using `.env.example` as the template. Set `DATABASE_URL` to the Supabase PostgreSQL connection string.

**Security:** `DATABASE_URL` is server-only. Never expose it in frontend code, commit `.env` to GitHub, or share the connection string publicly.

### 3. Set up the database

Use the SQL in `schema.sql` to create the required database table. Check that the schema and status constraints match the application's expected fields and status values.

### 4. Start the local server

Run:

```powershell
npm.cmd start
```

Open [http://localhost:3000](http://localhost:3000).

The health endpoint is available at [http://localhost:3000/api/health](http://localhost:3000/api/health).

## Deployment

The planned hosting setup uses Vercel for the application and Supabase PostgreSQL for shared cloud data. The hosted application URL will be added here after deployment is completed and verified.

## Data and Access

- The cloud database contains shared demo records.
- The application does not currently provide user sign-in or individual accounts.
- Do not store private or sensitive information in demo records.
- Existing local SQLite records are **not migrated** to Supabase. Any required records must be transferred separately.

## Verification Status

Record only checks that have actually been completed.

- [ ] Dependencies installed successfully using `npm.cmd ci`
- [ ] Local server starts successfully
- [ ] Health endpoint responds successfully
- [ ] Creating a project saves it to Supabase
- [ ] Editing a project updates the Supabase row
- [ ] Deleting a project removes the intended row
- [ ] Data persists after restarting the local server
- [ ] Vercel deployment completed and hosted URL verified

Update these checkboxes as each test is completed.