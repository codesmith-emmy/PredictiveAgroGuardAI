
# Danger Predictions for Farmers

predicts danger for crops and give suggestions to farmers by using crop data and climate details in specific area

## Video Demo



## Tech Stack

**Client:** Next.js, TailwindCSS, Shadcn, StackAuth

**Server:** Next.js API, IBM Watson AI, Granite Model

**Database:** PostgreSQL (Neon), Drizzle ORM


## Run on Local Machine

To deploy this project run:

- change `.env.example` to `.env.local` in root
  
```bash
    NEXT_PUBLIC_STACK_PROJECT_ID=<your-project-id>
    NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=<your-publishable-client-key>
    STACK_SECRET_SERVER_KEY=<your-secret-server-key>
    DRIZZLE_DATABASE_URL=<postgres-db-connection-url>
    NEXT_PUBLIC_IBM_PROJECT_ID=<project-id-from-ibm>
    NEXT_PUBLIC_IBM_MODEL_ID=<model-id-from-ibm>
    NEXT_PUBLIC_API_REQUEST_URL=<api-request-url-from-ibm>
    NEXT_PUBLIC_IBM_API_KEY=<api-key-from-ibm>
```

- in `drizzle.config.js` change `process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL` to your real database url, bcz env variables don't work in this file  

- after that run these commmands in row

```bash
  npm i
```
```bash
  npm run db:push
```
```bash
  npm run dev
```
- to see and manage DB entries, run this

```bash
  npm run db:studio
```

Congradulations Your Local Setup is Ready
