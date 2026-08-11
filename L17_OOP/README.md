# Object-Oriented Programming

Another style of programming (another way we write our code) — organizing our code into objects.

## Procedural Programming

**Procedure** => a set of step-by-step instructions => a function.

## Object-Oriented Programming (OOP)

**OOP** = organize our code into objects.

```javascript
let variable; // shortcut for
let variable = undefined;
```

**Method** = a function inside an object.

`this` gives us the outer object.

### Why Do We Use OOP?

**Object-Oriented Programming** tries to represent the real world.

```javascript
import '../data/cart-oop.js'; // another way to import
```

Another reason: it's easy to create multiple objects.

## Naming Convention

In OOP, use **PascalCase** for things that generate objects.

**PascalCase** = start every word with a capital.

## Classes

Object-Oriented Programming has a feature called **Class**.

**Class** = object generator.

Each object we generate from a class = an **instance**.

```javascript
console.log(businessCart instanceof Cart); // true/false
```

Classes are a feature that helps us generate these objects.

### Benefits of Classes

Classes have extra features for Object-Oriented Programming.

### Constructor

**Constructor** = lets us run setup code.

More details about the constructor:
1. Has to be named `constructor`
2. Should not return anything

> Basically, a class is a better way to generate objects in object-oriented programming.

## Private Properties and Methods

**Private** = it can only be accessed inside the class.

### Private Fields/Properties

```javascript
class Cart {
    cartItems; // public property
    #localStorageKey; // private property
}
```

### Private Methods

```javascript
class Cart {
    #loadFromStorage() { // private method

    }
}
```

# Inheritance