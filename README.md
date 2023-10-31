This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## The Task

I decided to take a holistic approach to the task and build the Todo list as a nextjs/react project. I felt in this way I could show my general ideas around desiging, building, styling and testing components as well as react projects as a whole and showing CI/CD pipelines I am familiar with and like.

I used Figma and Adobe Color to design the layout and set up the color palette I wanted.

I kept the out of the box setup of NextJS to get things up and running fast and it works well with Netlify for quick and seamless deployment.

Test wise I focused on the useToDo custom hook I set up as that's where most of the logic is held and a small one for the ToDoButton from a render component persepctive, obviously this can be elaborated on throughout the application but I focussed on only a couple of examples.

I'm a fan of styled components and keeping styles, types, tests etc of a component together withint its own folder. I think this makes it easier for anyone coming to a codebase to have a clear understanding of what is going on and what relates to what in one place as opposed to having a test folder seperated from the code that its testing as an example. This is my preference but I've worked with codebases very different from this haha! 

It was my original idea to incorporate a drabbale item which is why I had a toggle button instead of allowing the toggle of the whole list item. I planned to utilise this package - https://www.npmjs.com/package/react-draggable-list but it was a bit extra and as is sometimes the case I got a little tied up setting up the testing libraries having forgotten some of the dependencies needed to get everything up and running smoothly. It could do with some more package/config finesse but I felt like that was outside of the scope of the task anyway.

I really enjoyed the task and looking at the classic todo list in a fresh way. I'll use this little project to try some things out in the future! Like the draggable items ;D
