# TYPESCRIPT AND WEBPACK DEMO

This repo is created to demonstrate the use of TypeScript.  All files in this repo with the file extension `.ts` or `.tsx` are designated TypeScript files, and where the focus is for this repo.  This project doesn't show a finished product such as a fully-functioning website, but only goes over some of the basics of TypeScript


### What is TypeScript?

**[Typescript](http://www.typescriptlang.org)** is a superset of JavaScript--it extends the functionality of vanilla JavaScript by allowing to statically type variables as well as to use future ECMAScript syntax (though if you prefer to have a larger library for future ECMAScript syntax, I would suggest looking into [Babel](https://babeljs.io)).  I like using TypeScript for a few different reasons:
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
``` npm
npm install -g typescript
npm install typescript
```
With that done, let's look at my first few lines of code.

##### Code, part 1
In the first file (Typing.ts), it starts out with an ES6 class:
```typescript
class MeObj {
  // constructor function for new objects
	constructor(name: string) {
		this.name = name;
	};
  
  // properties on that object
	name: string;
	setName(newName: string) {
		this.name = newName;
	};
};
```

Later on, I wanted to create a new `MeObj` that represented myself, but I accidentally tried passing it my age instead of a string:
```typescript
var me = new MeObj(23);
```

My text editor checks the type of what I passed in (`23` or a `number`) against the type I'd specified in the constructor (`string`) and promptly underlines the errant value (`23`) with a red squiggly line.  If I were to try to transcompile this to JavaScript at that moment, the compiler would throw an error saying that I need to fix that line of code.  Realizing this, I fixed my code to sending the constructor my name instead of my age:
```typescript
var me = new MeObj('Sam Skeen');
```

Seeing that I'm now properly sending the constructor the correct type, it will successfully create a new object with my name.

Time goes on and I realized that I wanted to go by a code name to a Star Wars party.  I set up a method in order to do this in my class, but I also wanted to do it in another way, so I created a global function which would do the same thing:
```typescript
function setName_me(newName:string) {
	me.name = newName;
}
```

This time, I wanted to make sure it worked, so I tested it.  I tried to use both the method and the global function to change my code name, and passed it incorrect data types to make sure it worked:
```typescript
me.setName(5);

setName_me({
	name: 'Jar Jar'
});
```

Same thing happened with these lines of code as happend above.  Since these data types are different from the data types I had suggested at first (plus who would want a code name of Jar Jar?), the compiler will realize this and ask me to fix it.  As such, I added both of these lines of code and they worked:
```typescript
me.setName('R2-D2');
setName_me('C-3PO');
```

And, as it turns out, I guess I went to the party as C-3PO.

Now, at this point, I want to transcompile it to JavaScript in case I wanted to add this awesome functionality to my web app.  I would then go to my command line and type as a command in the folder where my `.ts` file is located:
``` command
tsc Typing.ts
```

This base command is built into the npm TypeScript install we did earlier.  It copies the name of the `.ts` file referenced as the first option after the command and then transpiles the TypeScript to JavaScript.  This is what the output looks like:
```javascript
var MeObj = (function () {
    function MeObj(name) {
        this.name = name;
    }
    ;
    MeObj.prototype.setName = function (newName) {
        this.name = newName;
    };
    ;
    return MeObj;
})();
;
// var me = new MeObj(23);
var me = new MeObj('Sam Skeen');
function setName_me(newName) {
    me.name = newName;
}
// me.setName(5);
// setName_me({
// 	name: 'Jar Jar'
// });
me.setName('R2-D2');
setName_me('C-3PO');
```

We can also set the transpiler to watch for changes in the source files by using the `-w` or `--watch` options preceeding the file name in the command line, like so:
```command
tsc -w Typing.ts
```
If you have more than just that one file, you do have the option to reference the file (with the relative path) separated by spaces:
```command
tsc -w Typing.ts Typing2.ts public/Typing3.ts
```
The downside to this is that you have to reference **EVERY SINGLE FILE** in your project you want to be transcompiled and watched in order to have this command work like you'd want, which means that if you add another `.ts` or `.tsx` file to your project, you would stop the current compiling watcher, add the file to the long line of files already in your project, and then start it up again.  This could be *REALLY* annoying.  That's why I suggest using a build service such as Grunt, Gulp, or Webpack.  As you probably already guessed, I am using Webpack in this repo.

### What is Webpack?

[Webpack](https://webpack.github.io) is a module bundler for websites.  It can automate the process for several things such as transcompiling SASS, LESS, ES6, ES7, or TypeScript into formats the browsers will understand as well as put everything all together into one file so that your index.html scripts or links go from referencing 20+ files and having to add a new one if you created a new file to only having to reference one file, and Webpack will take care of doing that.  You can also set it to watch your files for any changes, and auto-concatenate without having to return to the command line.  Webpack requires loaders for transpiling, and I'll be using the [ts-loader](https://github.com/TypeStrong/ts-loader) to do the work for me.

#### Installing and Configuring Webpack

You can install Webpack and the TypeScript loader through npm:
```command
npm install -g webpack
npm install --save-dev webpack ts-loader
```

Once that has installed, you need to configure Webpack so that it knows what to do.  I created a file called `webpack.config.js` which is the starting point for our Webpack configuration.  The explanation for each portion is found in a comment next to it.
```javascript
module.exports = {
	entry: './Typing.ts',  // relative path to the main file of your project
	
	devtool: 'eval',   // Webpack tool to allow any errors that the browser encounters while
                     // executing your code in the bundle.js to point instead to the original
                     // file.  SUPER wordy, I know, but trust me, it helps a bunch.
	
	resolve: {
		extensions: ['', '.webpack.js', '.seb.js', '.ts', '.tsx', '.js']
	},         // defines allowed extensions so webpack doesn't ignore the wrong file types
	
	module: {
		loaders: [
			{test: /\.tsx$|\.ts$/, exclude: /node_modules/, loaders: ['ts-loader']}
		]        // defines the module and loaders you want to use in this project
	},         // if you are confused about the regular expressions found on the "test" property,
             // just know that all that does is looks for and selects the typescript files only
             // so that this loader can interact with them the way it needs to.
	
	output: {
		path: './',               // relative path to where you want the output file to go
		filename: './bundle.js'   // and then you define the file name that you want Webpack to
	}                           // dump the files into
};
```

With that set up, Webpack will run.  However, in order to make sure that the TypeScript compiling will behave like you'd want to, you need to add another file, a `tsconfig.json`, in order to make it work.  This is how I set mine up:
```json
{
	"compilerOptions": {    // "options that would've been added to the command line had you" 
                          // "done that in the first place"
		"target": "ES5",      // the target version of ECMAScript for the TypeScript to be
                          // compiled to
		"sourceMap": true,    // option for adding a source map to your original code
		"jsx": "react"        // if you use jsx syntax at all in your project, TypeScript 
	},                      // requires you to add this option; since this repo doesn't handle
                          // any jsx, this was added purely so that I could show you how 
                          // to add it if you are using it
	
	"files": [                         // you stick all of the type definition files in this 
		"typings/angular/angular.d.ts"   // array so that your code editor and transpiler would 
	]                                  // recognize the otherwise unrecognized keywords from 
}                                    // the frameworks you're trying to use and not throw an
                                     // error saying that it can't find such-and-such variable
```