<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# ddot

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Calculate the dot product of two double-precision floating-point vectors.

<section class="intro">

The [dot product][dot-product] (or scalar product) is defined as

<!-- <equation class="equation" label="eq:dot_product" align="center" raw="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" alt="Dot product definition."> -->

<div class="equation" align="center" data-raw-text="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" data-equation="eq:dot_product">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/929657146427564b61e3e6bdda76949ebe2ce923/lib/node_modules/@stdlib/blas/base/ddot/docs/img/equation_dot_product.svg" alt="Dot product definition.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-ddot
```

</section>

<section class="usage">

## Usage

```javascript
var ddot = require( '@stdlib/blas-base-ddot' );
```

#### ddot( N, x, strideX, y, strideY )

Calculates the dot product of vectors `x` and `y`.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );

var z = ddot( x.length, x, 1, y, 1 );
// returns -5.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.
-   **y**: input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to calculate the dot product of every other value in `x` and the first `N` elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

var N = floor( x.length / 2 );

var z = ddot( N, x, 2, y, -1 );
// returns 9.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var N = floor( x0.length / 2 );

var z = ddot( N, x1, -2, y1, 1 );
// returns 128.0
```

#### ddot.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Calculates the dot product of `x` and `y` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );

var z = ddot.ndarray( x.length, x, 1, 0, y, 1, 0 );
// returns -5.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to calculate the dot product of every other value in `x` starting from the second value with the last 3 elements in `y` in reverse order

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

var N = floor( x.length / 2 );

var z = ddot.ndarray( N, x, 2, 1, y, -1, y.length-1 );
// returns 128.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   `ddot()` corresponds to the [BLAS][blas] level 1 function [`ddot`][ddot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var Float64Array = require( '@stdlib/array-float64' );
var ddot = require( '@stdlib/blas-base-ddot' );

var x;
var y;
var i;

x = new Float64Array( 10 );
y = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( randu() * 100.0 );
    y[ i ] = round( randu() * 10.0 );
}
console.log( x );
console.log( y );

var z = ddot( x.length, x, 1, y, -1 );
console.log( z );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-ddot.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-ddot

[test-image]: https://github.com/stdlib-js/blas-base-ddot/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/blas-base-ddot/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-ddot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-ddot?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-ddot.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-ddot/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-ddot/main/LICENSE

[dot-product]: https://en.wikipedia.org/wiki/Dot_product

[blas]: http://www.netlib.org/blas

[ddot]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[@stdlib/array/float64]: https://github.com/stdlib-js/stdlib

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
