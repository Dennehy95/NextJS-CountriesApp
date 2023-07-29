This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Personal Setup notes

I used npx create-next-app@latest to create the app

## General project roadmap

MVP
 - NextJS Setup ✅
 - Git init ✅
 - Basic home page route with App name ✅
 - Basic display Card Styled component (Mobile first design) ✅
 - Axios hook setup and gather info on available countries API data and format ✅
 - Call API and store all country information in state (TODO check getServerSideProps maybe for if they load the country details page directly?) Note: Did not server side props due to issues ✅
 - Homepage, map the all countries data and display it in the card element ✅
 - Set up routing for country details page with a country ID ✅
 - Fetch the data if not passed in from api and display country name ✅
 - Big flag image styled component populate with flag ✅
 - Data box styled component, populate with data (all prev + languages) ✅
 - mini flag link components, display all bordering countries ✅
 - Unit tests (jest?) ALl components

Second Phase
 - Cypress setup and put in a basic end to end test
 - Put in a hot filter for the main page for the all countries view
 - Set up i18n translations fiels