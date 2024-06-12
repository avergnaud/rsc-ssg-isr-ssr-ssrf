# rsc-ssr-ssrf

## 1 vanilla react `1-vanilla-react`

quelles perfs pour la séquence "load bundle, generate DOM, load data, hydrate component"

## 2 RSC (nextJS impl) with a server `2-rsc`

... load direct

... voir le console.log au runtime

## 3 SSG `3-ssg` (? sont des RSC ?) (nextJS impl)

... voir le console.log au build

### erreur avec generateur default options

> "getStaticProps" is not supported in app/. Read more: https://nextjs.org/docs/app/building-your-application/data-fetching

[https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#static-site-generation-getstaticprops](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#static-site-generation-getstaticprops)

### v2...

App router vs page router...

![create-next-app](./docs/3-ssg-create-next-app.png)

[https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-4-migrating-pages](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-4-migrating-pages)

> Pages in the app directory are Server Components by default. This is different from the pages directory where pages are Client Components.

> Upgrading to Next.js 13 does not require using the new App Router. You can continue using pages with new features that work in both directories

[https://nextjs.org/docs/app/building-your-application/rendering/server-components#server-rendering-strategies](https://nextjs.org/docs/app/building-your-application/rendering/server-components#server-rendering-strategies)

[https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)

[https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props)

[https://react.dev/reference/rsc/server-components#server-components-without-a-server](https://react.dev/reference/rsc/server-components#server-components-without-a-server)

## ISR 

[https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration)

## 4 RSC with interactivity (client components)

[https://react.dev/reference/rsc/server-components#adding-interactivity-to-server-components](https://react.dev/reference/rsc/server-components#adding-interactivity-to-server-components)

[https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration)

## 5 SSR

SSG --> SSR :

> the data could become stale at request time

[https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation](https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation)

[https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering)


## Difference RSC SSR

[https://stackoverflow.com/questions/76325862/what-is-the-difference-between-react-server-components-rsc-and-server-side-ren](https://stackoverflow.com/questions/76325862/what-is-the-difference-between-react-server-components-rsc-and-server-side-ren)

[https://github.com/reactjs/server-components-demo?tab=readme-ov-file#should-i-use-this-demo-for-benchmarks](https://github.com/reactjs/server-components-demo?tab=readme-ov-file#should-i-use-this-demo-for-benchmarks)

[https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md#does-this-replace-ssr](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md#does-this-replace-ssr)

[https://www.youtube.com/watch?v=jEJEFAc8tSI](https://www.youtube.com/watch?v=jEJEFAc8tSI)

## Hydration

> "In React, “hydration” is how React “attaches” to existing HTML that was already rendered by React in a server environment. During hydration, React will attempt to attach event listeners to the existing markup and take over rendering the app on the client. In apps fully built with React, you will usually only hydrate one “root”, once at startup for your entire app."

[https://react.dev/reference/react-dom/client/hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot)

[https://www.gatsbyjs.com/docs/conceptual/partial-hydration/](https://www.gatsbyjs.com/docs/conceptual/partial-hydration/)


## old doc

[https://www.telerik.com/blogs/current-state-react-server-components-guide-perplexed](https://www.telerik.com/blogs/current-state-react-server-components-guide-perplexed)

[https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components)

[https://github.com/reactjs/server-components-demo](https://github.com/reactjs/server-components-demo)

[https://dev.to/vteacher/let-s-make-a-web-application-with-react-server-components-5dmg](https://dev.to/vteacher/let-s-make-a-web-application-with-react-server-components-5dmg)

[https://react.dev/blog/2024/04/25/react-19](https://react.dev/blog/2024/04/25/react-19)

[https://react.dev/reference/rsc/server-components](https://react.dev/reference/rsc/server-components)

[https://www.youtube.com/watch?v=ePAPd9qzGyM](https://www.youtube.com/watch?v=ePAPd9qzGyM)

[https://www.joshwcomeau.com/react/server-components/](https://www.joshwcomeau.com/react/server-components/)


## Server actions

[https://react.dev/reference/rsc/server-actions](https://react.dev/reference/rsc/server-actions)

## SSRF (fixed in NextJS v14.1.1)

[https://www.assetnote.io/resources/research/digging-for-ssrf-in-nextjs-apps](https://www.assetnote.io/resources/research/digging-for-ssrf-in-nextjs-apps)