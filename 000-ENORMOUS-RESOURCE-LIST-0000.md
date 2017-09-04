
# OOP 2 - Prototypical Inheritance
___
#### Table of Contents
* [intro]()
* [Absolute Must Learn Fundamentals](#prototypical-fundamentals)
    * [proto lookup chain](#proto-lookup-chain)
    * [dot create](#dot-create)
    * [dot assign](#dot-assign)
    * [resources](#fundamental-resources)
* [Using Inheritance Fundamentals](#using-inheritance-fundamentals)    
    * [factories](#factories)
    * [factories and closures](#factories-and-closures)
    * [recommeded design patterns](#recomended-design-patterns)
    * [resources](#factory-resources)
* [Other Ways to Inherit](#other-ways-to-inherit)
    * [Constructor Functions](#constructor-functions)
    * [Classes with Constructor Functions](#classes-with-constructor-functions)
    * [ES6 classes](#es6-classes)
    * [resources](#other-ways-resources)
* [Op Eds](#comprehensive-resources)
___
___
## Prototypical Fundamentals
[TOP](#table-of-contents)
___
### Proto Lookup Chain
[TOP](#table-of-contents)
___
### Dot Create
[TOP](#table-of-contents)
___
### Dot Assign 
[TOP](#table-of-contents)
___
### Fundamental Resources
[Proto Fundamentals](#Prototypicla-fundamentals)
[TOP](#table-of-contents)
___
___
## Using Inheritance Fundamentals
[TOP](#table-of-contents)
___
### Factories
[TOP](#table-of-contents)
___
### Factories and Closures
[TOP](#table-of-contents)
___
### Recommended Design Patterns
[TOP](#table-of-contents)
___
### Factory Resources 
[Inheritance Fundamentals](#using-inheritance-fundamentals)
[TOP](#table-of-contents)
___
___
## Other Ways to Inherit
[TOP](#table-of-contents)
___
### Constructor Functions
[TOP](#table-of-contents)
___
### Classes with Constructor Functions 
[TOP](#table-of-contents)
___
### ES6 Classes 
[TOP](#table-of-contents)
___
### Other Ways Resources 
[Other Ways](#other-ways-to-inherit)
[TOP](#table-of-contents)
___
___
## Op Eds
[TOP](#table-of-contents)
___



____________
Using JS for object oriented programming is cheating yourself.  JS is like the clay of life, it can be molded into anything.  But many things are a betrayal to it's true nature.  The beauty of the language lies it's functional aspects and its lack of classical inheritance.  If you know what that means, ignore it.  If you don't, forget about it.

In JS objects are the players, not the game.   The game is Functional Programming (closure, pure functions), the players are objects. If you have experience in most other programming languages this will take adjustment.  

JS is to classical programming as legos are to play-mobile.

The freedom can be overwhelimg.  It is easy to fall into common Classical design patterns, bad in the long run.  

This lesson will teach you the fundamentals of O-O inheritance in JS and provide you with 2 simple design patterns you can use.

great if you know something about programming already
	https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3

The seminal “Design Patterns” book by the Gang of Four is built around two foundational principles:
“Program to an interface, not an implementation,” and “favor object composition over class inheritance.”


https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e

midway down.  retailor objects and this lesson to use factories? be more js-specific?
	+ correct
	+ not see so many conflictings
	- more complicated (?)
	- will see classes everywhere
	- this opens slippery slopes
do classes but say what this article does
say this 'class' thing is one of MANY design patterns in js.  it's a good one to start with because it is easier to wrap your head around at first.  but as your understaniding of js grows, you can make cooler things

object.create, object.assign

https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a
	let animal = {
	  animalType: 'animal',
	 
	  describe () {
	    return `An ${this.animalType} with ${this.furColor} fur, 
	      ${this.legs} legs, and a ${this.tail} tail.`;
	  }
	};
	 
	let mouseFactory = function mouseFactory () {
	  return Object.assign(Object.create(animal), {
	    animalType: 'mouse',
	    furColor: 'brown',
	    legs: 4,
	    tail: 'long, skinny'
	  });
	};

	let mickey = mouseFactory();

	closures for data privacy


use factories not constructors.  ignore Classes
	close over values in returned objects


change data-structures problems from classes
	or leave it? 
	change it

patterns
	http://radar.oreilly.com/2014/03/javascript-without-the-this.html
	http://davidshariff.com/blog/javascript-inheritance-patterns/ 
		- function from crockford (each no centralized methods)
		- prototypal - best to teach?


___________________



class exercise:  convert .protos to classes

NO CLASSES.  IN 'OBJECTS' SAY NEVER TO USE CONSTRUCTORS.  WHEN READING MODULES SAY HOW THEY COULD ALL BE DONE WITHOUT INHERITANCE.



Other good alternatives include making better use of JavaScript modules as an alternative to inheritance (I recommend npm and ES6 modules with Browserify or WebPack), or simply cloning objects by copying properties from a source object to a new object (e.g. `Object.assign()`, `$.extend()`, `_.extend()`, etc…).




# OOP 2 - Classes and Inheritance
In the last installment you saw how to build programs from units of code called objects.  In the code-series 'Objects' you saw functions that produce objects.  This lesson you will see the next conceptual step (Inheritance) and the JS language feature for implementing it (Classes).
___
### Why Not Literals ?
Object literals are great for representing single objects, but the fail to capture the relationships between single objects.

An intuitive analogy is the tree of life:
* All mammals have hair and warm blood.
* Some mammals have wings and others don't, but they all still have hair.
* Mammals and reptiles all have a spine, but don't share warm blood.
* No two animals have an identical genome.
* ...

There is a hierarchy of traits in the animal kingdom.  Some traits are unique to single animals, some traits are unique to a species, some to a genus, ... until you arrive at a few traits common to ALL animals.

With object literals there is no efficient way to model this, you'd have to go object-by-object and make sure that the jelly fish has what it needs, the bat has what it needs, the lizard, ...  
Wouldn't it be nice if there was a way to simply say 'this object is a lizard' and automatically give it all lizard properties? And if we wanted to change shared properties of lizards without having to find ALL lizards and change them ALL one at a time?

There is with classes and inheritance.
___
### Why Classes and Inheritance ?
* _Dynamic Control_: Modify the behavior of your entire program from a single location (the Class definition).
* _Code Reuse_: Make endless objects without needing to write endless objects by hand.
* _Effective Modeling_: Create large and accurate models of the real world in your program by mimicking real-world classifications (ie. novels and thesauri are both books).

Understanding inheritance allows you to achieve more with less code. With Class syntax it's not only more with less, it's completely new possiblities.  
___
  
instances and classes  
  
what goes in class, what goes in instance?

* [outstanding video](https://www.youtube.com/watch?v=SS-9y0H3Si8)

