# Typescript BigNumber

A native big decimal NPM library for typescript using BigInt class to support 18 digit floating point number arithmetics with high precision in the range -1e36 to 1e36, inclusive.

[![npm version](https://img.shields.io/npm/v/typescript-bignumber.svg)](https://www.npmjs.com/package/typescript-bignumber)
[![npm downloads](https://img.shields.io/npm/dw/typescript-bignumber)](https://www.npmjs.com/package/typescript-bignumber)

## Features

* Support for floating-point numbers in the range [-1e36, 1e36] with 18 digit precision.

* Include all methods of JS `Number` class.

* **Static Constructors**: `copysign()`, `fromBigInt()`, `fromString()`. The library does not include a `fromNumber()` function to preserve precision.

* **Static Constants** (18 precision digits): `BigNumber.EULER` (`BigNumber.E`), `BigNumber.INF` (`BigNumber.POSITIVE_INFINITY`), `BigNumber.NEG_INF` (`BigNumber.NEGATIVE_INFINITY`), `BigNumber.LN_10`, `BigNumber.LN_2`, `BigNumber.PI`.

* **Type Conversion Methods**: `toBigInt()` (rounds to closest `BigInt`), `toString()`, `toInteger` (rounds to closest integer `string`). You may use these methods for printing or memory-optimized storing.

* **Type Check Methods**: `isInteger()` and `isPositive()`.

* **Arithmetic Conversion Methods**: `abs()`, `ceil()`, `floor()`, `inv()`, `neg()`, `round()`, `trunc()`. All these methods act identic to JS `Math` class equivalent methods.

* **Logic Comparison Methods**: `equals()`, `greaterThan()`, `greaterThanOrEqual()`, `lessThan()`, `lessThanOrEqual()`.

* **Arithmetic Operations**: `add()`, `sub()`, `mul()`, `div()`, `mod()`. The `mod()` method may differ from JS `Number` class the mod operator (`%`) in some cases. Please see below for details.

See below about the details of methods and properties of the class.

## Installation

You can include the library in any npm project. See below about the details of methods and properties of the class.

```
npm install -s typescript-bignumber
```

## Usage

Once imported, you can use `BigNumber` on any typescript project.

```ts
import { BigNumber } from 'typescript-bignumber'

const x = BigNumber.fromString("1.28");

console.log(x.toString());
```

## Static Constructors

You can create a new `BigNumber` by these methods. Because of security and precision reasons, the class does not include a public constructor.

### BigNumber.copysign()

This function takes two `BigNumber` as argument and returns the first argument with the sign of the second argument.

```ts
const x = BigNumber.fromString("1.2");
const y = BigNumber.fromString("-1");

const z = BigNumber.copysign(x, y);

console.log(z.toString()); // Prints -1.2
```

### BigNumber.fromBigInt()

You can create a `BigNumber` directly from a `BigInt`. Only integers may be created by this method.

```ts
const x = BigNumber.fromBigInt(12489203475n); // or BigNumber.fromBigInt(BigInt(12489203475));
```

### BigNumber.fromString()

You may create a floating-point number using this method from a string.

```ts
const x = BigNumber.fromString("12.374738");
```

The library also supports using a comma (",") instead of a dot (".") to seperate the decimal part.

```ts
const y = BigNumber.fromString("12,374738");
```

You may also use a scientific notation string to create a `BigNumber`.

```ts
const z = BigNumber.fromString("1.27e-5");
```

The number is rounded to 18th decimal if more than 18 decimals exist.

```ts
const w = BigNumber.fromString(1.9999999999999999999);

console.log(w.toString()); // Prints 2.000000000000000000
```

## Static Constants

Commonly used mathematical constants are defined under the class rounded to the 18th decimal precision.
You can access positive and negative infinities to have boundries on the `BigNumber` elements. All members of this class are in between these boundries, inclusive.

### BigNumber.E

You may also use `BigNumber.EULER`.

```ts
console.log(BigNumber.E.toString()); // 2.718281828459045235
```

### BigNumber.INF

You may also use `BigNumber.POSITIVE_INFINITY`.

```ts
console.log(BigNumber.INF.toString()); // 1e36
```

### BigNumber.NEG_INF

You may also use `BigNumber.NEGATIVE_INFINITY`.

```ts
console.log(BigNumber.NEG_INF.toString()); // -1e36
```

### BigNumber.LN_10

```ts
console.log(BigNumber.LN_10.toString()); // 2.302585092994045684
```

### BigNumber.LN_2

```ts
console.log(BigNumber.LN_2.toString()); // 0.693147180559945309
```

### BigNumber.PI

```ts
console.log(BigNumber.LN_10.toString()); // 3.141592653589793238
```

## Type Conversion Methods

Use these methods for printing or memory-optimized storing.

### BigNumber.toBigInt()

Rounds and returns the closest `BigInt` to this instance.

```ts
const x = BigNumber.fromString("12.54");

console.log(x.toBigInt()); // Prints 13n
```

### BigNumber.toString()

Serializes this instance to a `string`.

```ts
const x = BigNumber.fromString("12.54");

console.log(x.toString()); // Prints 12.54
```

### BigNumber.toInteger()

Rounds this instance to the closest integers and returns it as a `string` .

```ts
const x = BigNumber.fromString("12.54");

console.log(x.toInteger()); // Prints 13
```

## Type Check Methods

Check type-related properties of `BigNumber` instances.

### BigNumber.isInteger()

Returns a `boolean` representing if this instance is an `integer`.

```ts
const x = BigNumber.fromString("12.54");
const y = BigNumber.fromString("13");

console.log(x.isInteger()); // Prints false
console.log(y.isInteger()); // Prints true
```

Please note the default precision of the library is 18 digits.

```ts
const x = BigNumber.fromString("12.9999999999999999995"); // This number is rounded to 13 as it has more than 18 floating-point numbers.

console.log(x.isInteger()); // Prints true
```

### BigNumber.isPositive()

Returns a `boolean` representing if this instance is positive.

```ts
const x = BigNumber.fromString("12.54");
const y = BigNumber.fromString("-45.233");

console.log(x.isPositive()); // Prints true
console.log(y.isPositive()); // Prints false
```

## Arithmetic Conversion Methods

Convert instances of the `BigNumber` class using different mathematical functions.

**Important**: These methods are identical to the their equivalent in the standart `Math` library of javascript.

### BigNumber.abs()

Returns the absolute value of this instance.

```ts
const x = BigNumber.fromString("-34.90");

console.log(x.abs()); // Prints 34.90
```

### BigNumber.ceil()

Always rounds up and returns the smaller `integer` greater than or equal to this instance.

```ts
const x = BigNumber.fromString("34.90");
const y = BigNumber.fromString("34.0");

console.log(x.ceil()); // Prints 35
console.log(y.ceil()); // Prints 34
```

### BigNumber.floor()

Always rounds down and returns the largest `integer` less than or equal to this instance.

```ts
const x = BigNumber.fromString("34.90");
const y = BigNumber.fromString("34.0");

console.log(x.floor()); // Prints 34
console.log(y.floor()); // Prints 34
```

### BigNumber.inv()

Takes the inverse of this instance.
It is equivalent to dividing 1 by this instance: `BigNumber.fromString("1").div(this)`.

```ts
const x = BigNumber.fromString("34.90");

console.log(x.inv()); // Prints 0.028653295128939828
```

### BigNumber.neg()

Takes the negation of this instance.
It is equivalent to multipliying this instance with -1. `this.mul(BigNumber.fromString("-1"))`.

```ts
const x = BigNumber.fromString("34.90");

console.log(x.inv()); // Prints -34.9
```

### BigNumber.round()

Returns the value of this instance rounded to the nearest integer.

```ts
const x = BigNumber.fromString("34.5");
const y = BigNumber.fromString("34.49");

console.log(x.round()); // Prints 35
console.log(y.round()); // Prints 34
```

### BigNumber.trunc()

Returns the integer part of this instance by removing any fractional digits.

```ts
const x = BigNumber.fromString("34.9");
const y = BigNumber.fromString("-34.9");

console.log(x.trunc()); // Prints 34
console.log(y.trunc()); // Prints -34
```

## Logic Comparison Methods

### BigNumber.equals

Returns a `boolean` representing if this instance equal to the given argument.

```ts
const x = BigNumber.fromString("67.9");
const y = BigNumber.fromString("67.9");

console.log(x.equals(y)); // Prints true
```

### BigNumber.greaterThan _or_ BigNumber.gt

Returns a `boolean` representing if this instance is strictly greater than the given argument.
`BigNumber.greaterThan` and `BigNumber.gt` are totally equivalent, the long or short syntax may be preferred.

```ts
const x = BigNumber.fromString("67.9");
const y = BigNumber.fromString("67.8");

console.log(x.greaterThan(y)); // Prints true
console.log(x.gt(y)); // Prints true
```

### BigNumber.greaterThanOrEqual _or_ BigNumber.gte

Returns a `boolean` representing if this instance is greater than or equal to the given argument.
`BigNumber.greaterThanOrEqual` and `BigNumber.gte` are totally equivalent, the long or short syntax may be preferred.

```ts
const x = BigNumber.fromString("67.9");
const y = BigNumber.fromString("67.9");

console.log(x.greaterThanOrEqual(y)); // Prints true
console.log(x.gte(y)); // Prints true
```

### BigNumber.lessThan _or_ BigNumber.lt

Returns a `boolean` representing if this instance is strictly less than the given argument.
`BigNumber.lessThan` and `BigNumber.lt` are totally equivalent, the long or short syntax may be preferred.

```ts
const x = BigNumber.fromString("67.8");
const y = BigNumber.fromString("67.9");

console.log(x.lessThan(y)); // Prints true
console.log(x.lt(y)); // Prints true
```

### BigNumber.lessThanOrEqual _or_ BigNumber.lte

Returns a `boolean` representing if this instance is less than or equal to the given argument.
`BigNumber.lessThanOrEqual` and `BigNumber.lte` are totally equivalent, the long or short syntax may be preferred.

```ts
const x = BigNumber.fromString("67.9");
const y = BigNumber.fromString("67.9");

console.log(x.lessThanOrEqual(y)); // Prints true
console.log(x.lte(y)); // Prints true
```

## Arithmetic Operations

### BigNumber.add

Adds this instance to the given argument and returns the result.

```ts
const x = BigNumber.fromString("126.289");
const y = BigNumber.fromString("34.433");

console.log(x.add(y).toString()); // Prints 160.722
```

### BigNumber.sub

Substracts the given argument from this instance and returns the result.

```ts
const x = BigNumber.fromString("126.289");
const y = BigNumber.fromString("34.433");

console.log(x.sub(y).toString()); // Prints 91.856
```

### BigNumber.mul

Multiplies this instance with the given argument and returns the result.

**Note**: Rounds to the 18th precision.

```ts
const x = BigNumber.fromString("126.289");
const y = BigNumber.fromString("34.433");

console.log(x.mul(y).toString()); // Prints 4348.509137
```

### BigNumber.div

Divides this instance with the given argument and returns the result.

**Note**: Rounds to the 18th precision.

```ts
const x = BigNumber.fromString("126.289");
const y = BigNumber.fromString("34.433");

console.log(x.mul(y).toString()); // Prints 3.667673452792379403
```

### BigNumber.mod

Returns the reminder of the division of this instance by the given argument.

**Important**: This method uses `BigNumber.div` and `BigNumber.mul` to calculate the result of the reminder. As a result, in some rare cases including negative numbers the behaviour of this method may differ from the javascript `Number` class and the mod operator (`%`).

```ts
const x = BigNumber.fromString("126.289");
const y = BigNumber.fromString("34.433");

console.log(x.mod(y).toString()); // Prints 22.99
```