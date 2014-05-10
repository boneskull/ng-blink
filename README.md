# ng-blink

First they took away `<center>`.  Then, they took away `<font>`.  Now,
they've taken away `<blink>`.  Will *your* favorite tag be... **deprecated**?

Enter **ng-blink**.

To use, simply include the `ng-blink.js` file,

```html
<script type="text/javascript" src="/path/to/ng-blink.js"></script>
```

then include the module,

```js
angular.module('myApp', ['ng.blink']);
```

abuse HTML as per usual,

```html
<blink>Punch the monkey and win!</blink>
```

and your `<blink>` tags are back with a vengeance!

This not offensive enough?  *Really* want to annoy the living shit out of
your visitors?

*Make it faster!*

```html
<blink frequency="500ms">Vote for this site!</blink>
```

## Intended Audience

Developers too stubborn to write CSS.

## Installation

`bower install ng-blink`

## Roadmap

- `v0.5.0`: Lynx support
- `v1.0.0`: Unit tests
- `v2.0.0`: Port to Java applet

## License

[ISC](http://opensource.org/licenses/ISC)

## Author

[Christopher Hiller](http://boneskull.github.io), who has no regrets
