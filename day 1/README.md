##  Variables and Data Types

# Variables are Containers for Storing Data.
    
    JavaScript Variables can be declared in 4 ways:
    Automatically
    var
    let
    const

# Note:


    The var keyword was used in all JavaScript code from 1995 to 2015.

    The let and const keywords were added to JavaScript in 2015.

    The var keyword should only be used in code written for older browsers.


# When to Used var, let, or const?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you must support old browsers.

    const = can't be re-assigned a value and can't be declared again  (block scope)
    let = can be re-assigned a value but can't be declared again (block scope)
    var = it can be re-assigned a value and it can also be declared again  (Global scope)

    => Never use var in your code instead of let because of block and functional scope issues.

# Data Types

 -- JavaScript has 8 Datatypes
    
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object


# Interview question :

Q1. What the datatype of Undefined ?
 
A. Undefined. 

Q2. What the datatype of Null ?

A. Object. 