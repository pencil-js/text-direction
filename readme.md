# text-direction
[![NPM Version](https://flat.badgen.net/npm/v/text-direction?icon=npm)](https://www.npmjs.com/package/text-direction)
[![Dependencies update](https://flat.badgen.net/david/dev/pencil-js/text-direction?icon=npm)](https://david-dm.org/pencil-js/text-direction?type=dev)

Get the text direction from an element node.

## Installation

    npm install text-direction


## CDN

If you want to go old-school, you can fetch the script with [unpkg](https://unpkg.com/) or [jsdelivr](https://www.jsdelivr.com/).

```html
    <script src="https://unpkg.com/text-direction"></script>
    <!-- or -->
    <script src="https://cdn.jsdelivr.net/npm/text-direction"></script>
    
    <script>
        console.log(textDirection());
    </script>
```


## Usage

Once installed, add it to your project with common.js or ES6 syntax :

```js
    const textDirection = require("text-direction");
    // or
    import textDirection from "text-direction";
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

Since today's web browser don't support module requirements yet, you need to use a bundler like [webpack](https://webpack.js.org/) or [browserify](http://browserify.org/).

## License

MIT
