# TYPESCRIPT DEMO

This repo is created to demonstrate the use of TypeScript.  All files in this repo with the file extension `.ts` or `.tsx` are designated TypeScript files, and where the focus is for this repo.  This project doesn't show a finished product such as a fully-functioning website, but only goes over some of the basics of TypeScript


### What is TypeScript?

**[Typescript](www.typescriptlang.org)** is a superset of JavaScript--it extends the functionality of vanilla JavaScript by allowing to statically type variables as well as to use future ECMAScript syntax (though if you prefer to have a larger library for future ECMAScript syntax, I would suggest looking into [Babel](https://babeljs.io)).  I like using TypeScript for a few different reasons:
  - All valid JavaScript is valid TypeScript, which makes learning it easier for someone who is coming from a JavaScript background.  It also is helpful for people who have worked in a object-ortiented programming background (such as C++, C#, or Java), as they are used to much of the ECMAScript 6+ syntaxes as well as the variables are statically typed.
  - Statically typing variables can catch bugs earlier on, before you even try to execute the code in a browser.
  - In my code editor, [Visual Studio Code](https://code.visualstudio.com), as well as others which you can add plugins to, it allows for better IntelliSense while coding, as it remembers properties of objects better.
  - On top of that, you can download type definitions for many popular frameworks (e.g. Angular, jQuery, Node) to make the IntelliSense available for use with those frameworks.  The best library of type definitions on the internet is through [DefinitelyTyped](http://definitelytyped.org), a project striving to make high-quality type definitions for your TypeScript or JavaScript projects.
  - It supports using JSX syntax (hence the `.tsx` files), which makes working with html elements in JavaScript for frameworks like React a lot easier.
  - It can transpile to any current version of ECMAScript so that browsers can read the code (as browsers don't support TypeScript natively).
  - The next full iteration of Angular (Angular 2.0) will be using TypeScript, which will in the end require users to use TypeScript itself.  You will have an advantage if you are familiar with TypeScript 

The true power in TypeScript comes through working in larger-scale projects.  I haven't been affiliated with a large-scale project using TypeScript as of yet, however I've found uses for it in smaller scales, particularly since it supports ECMAScript 6 syntax, and the transpiler can compile it down to ECMAScript 5, since current browsers don't completely support ECMAScript 6 at the time of writing.

### Demo

Let's get started analyzing the differences between JavaScript and TypeScript currently found in my code.

##### Install

TypeScript can be installed by using `npm`.  I personally suggest installing it both locally and globally as seen below:
```
npm install -g typescript
npm install typescript
```
With that done, let's look at my first few lines of code.

##### Code, part 1
In the first file (Typing.ts), it starts out with an ES6 class:
```typescript
class MeObj {
	constructor(name: string) {
		this.name = name;
	};
	name: string;
	setName(newName: string) {
		this.name = newName;
	};
};
```