# text-direction
[![NPM Version](https://flat.badgen.net/npm/v/text-direction?icon=npm)](https://www.npmjs.com/package/text-direction)
[![Package Size](https://flat.badgen.net/packagephobia/install/text-direction?icon=packagephobia)](https://packagephobia.com/result?p=text-direction)

Get the text direction from an element node.

## Installation

    npm install text-direction


## Usage

```js
    import textDirection from "text-direction";
    // Or using a CDN without installation
    import textDirection from "https://unpkg.com/text-direction";
```

Then, you can start to use it on your code :

```js
    const nodeDirection = textDirection(myNode); // With a node as argument for its specific direction
    const globalDirection = textDirection(); // Without argument to target <body>
```

Returned value are :
 * "ltr" if direction is right-to-left
 * "rtl" if direction is left-to-right
 * "" if the element specified has no style (not attached to a DOM)

## License

MIT
