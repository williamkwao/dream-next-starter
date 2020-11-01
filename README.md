## Goal
Build an app starter that will make it easy to rapidly prototype and makes you focus on writing product code instead of spending a lot of time on things that do not have mach time to do with your product.

## Backstory
After working on a lot of side projects, I got tiredof making decisions and writing code that had nothing to do with the product. This is an attempt to build the ideal next js starter for building products. I've always dreamp of a starter that would help me jump straight into product code whenever i have an idea. To accomplish this I believe this starter should have the following features built in.
* Authentication and authorization
* Database/datasource integration
* Easy path/command to building the web app into a ios, android and. desktop application
* SSR for fast rendering and seo benefits

### Ideal but not necessary features
* Payment integration
* Image processing
* Optional design system for rapid prototyping

### Auth
Currently the auth flow is built with [firebase](https://firebase.google.com/). I chose firebase because it is a onestop shop for many product needs. Apart form auth you could potentially use it for file storage/ image processing and hosting. 

### Design system
I chose [Ant design](https://ant.design/) system because it is one of the few component libraries that had a simple api and  the component libraryt had considered most of the use cases a modern web application needs without excessive configuration and code.




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
