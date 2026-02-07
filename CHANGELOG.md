# CHANGELOG

> Package changelog.

<section class="release" id="v0.4.1">

## 0.4.1 (2026-02-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.4.0">

## 0.4.0 (2026-01-29)

<section class="features">

### Features

-   [`e4f28df`](https://github.com/stdlib-js/stdlib/commit/e4f28df214f15513bdafeb5a6bbc3bde115dc63b) - add C `ndarray` implementation for `blas/base/ddot` [(#2936)](https://github.com/stdlib-js/stdlib/pull/2936)

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`2035f34`](https://github.com/stdlib-js/stdlib/commit/2035f344a1a469278042b7532f034dc6119933b3) - **docs:** add function documentation _(by Athan Reines)_
-   [`57d4088`](https://github.com/stdlib-js/stdlib/commit/57d40888b041ba88da1d555662d0734deb2f8a10) - **bench:** refactor to use dynamic memory allocation in `blas/base/ddot` [(#8713)](https://github.com/stdlib-js/stdlib/pull/8713) _(by Faraz Ghani, Athan Reines, Philipp Burckhardt)_
-   [`11f3cfa`](https://github.com/stdlib-js/stdlib/commit/11f3cfa5a658d7cb105aeb2578b7d72ea62f1e97) - **refactor:** update include header guards for double precision real packages [(#7711)](https://github.com/stdlib-js/stdlib/pull/7711) _(by Shabareesh Shetty)_
-   [`7c9afed`](https://github.com/stdlib-js/stdlib/commit/7c9afed6a288c9e7d3048dfa0ac8f085759d73f4) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`09c9ceb`](https://github.com/stdlib-js/stdlib/commit/09c9ceb58c6dd23c10f1980094851983c57d693f) - **chore:** fix formatting _(by Athan Reines)_
-   [`51bf6f9`](https://github.com/stdlib-js/stdlib/commit/51bf6f9d2bb027aacecda87e02f957badbc246b0) - **bench:** fix formatting _(by Athan Reines)_
-   [`62364f6`](https://github.com/stdlib-js/stdlib/commit/62364f62ea823a3b52c2ad25660ecd80c71f8f36) - **style:** fix C comment alignment _(by Philipp Burckhardt)_
-   [`e4f28df`](https://github.com/stdlib-js/stdlib/commit/e4f28df214f15513bdafeb5a6bbc3bde115dc63b) - **feat:** add C `ndarray` implementation for `blas/base/ddot` [(#2936)](https://github.com/stdlib-js/stdlib/pull/2936) _(by Aman Bhansali)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 5 people contributed to this release. Thank you to the following contributors:

-   Aman Bhansali
-   Athan Reines
-   Faraz Ghani
-   Philipp Burckhardt
-   Shabareesh Shetty

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-27)

<section class="features">

### Features

-   [`de65e0c`](https://github.com/stdlib-js/stdlib/commit/de65e0c599aff12d7e1bc901749474299da831a0) - add support for specifying integer size

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`5c514c7`](https://github.com/stdlib-js/stdlib/commit/5c514c7ad5828bc5047594ff001d11334f8f5670) - specify integer type to match CBLAS

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`271f5d5`](https://github.com/stdlib-js/stdlib/commit/271f5d5d3e530225bd82f34efebf5df9a944fdde) - **refactor:** reduce code duplication in `blas/base` level 1 routines [(#2517)](https://github.com/stdlib-js/stdlib/pull/2517) _(by Aman Bhansali)_
-   [`6226f32`](https://github.com/stdlib-js/stdlib/commit/6226f32ba8be2b8d880353194c510e629760b53f) - **docs:** update signatures _(by Athan Reines)_
-   [`9ff6e8e`](https://github.com/stdlib-js/stdlib/commit/9ff6e8e2a86e84d30f4bab902b55f43eb85e6b0d) - **refactor:** support building with API suffix _(by Athan Reines)_
-   [`5c514c7`](https://github.com/stdlib-js/stdlib/commit/5c514c7ad5828bc5047594ff001d11334f8f5670) - **fix:** specify integer type to match CBLAS _(by Athan Reines)_
-   [`a847f6b`](https://github.com/stdlib-js/stdlib/commit/a847f6bab25f80db1039bba9494e6823b43b3b6e) - **docs:** remove comments _(by Athan Reines)_
-   [`0d7489e`](https://github.com/stdlib-js/stdlib/commit/0d7489e6288a3e7669927331d66841a5578aee4f) - **docs:** fix description _(by Athan Reines)_
-   [`de65e0c`](https://github.com/stdlib-js/stdlib/commit/de65e0c599aff12d7e1bc901749474299da831a0) - **feat:** add support for specifying integer size _(by Athan Reines)_
-   [`38464b7`](https://github.com/stdlib-js/stdlib/commit/38464b74545be9702eda7bae820c40b56e7e7256) - **docs:** remove comments _(by Athan Reines)_
-   [`f1576ec`](https://github.com/stdlib-js/stdlib/commit/f1576ec5ade09cd8cd034dc0db8c9f5c7d70e3eb) - **docs:** remove comments _(by Athan Reines)_
-   [`8724214`](https://github.com/stdlib-js/stdlib/commit/8724214db4edea41e8da4f5593f06dfe2be5da86) - **refactor:** use macro for creating doubles _(by Athan Reines)_
-   [`6ae034b`](https://github.com/stdlib-js/stdlib/commit/6ae034b8e7538f384eeb00354f9e2932b1b59677) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`0244027`](https://github.com/stdlib-js/stdlib/commit/0244027e1e2c0ceb1cd8ae1808196c24fa77b142) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_
-   [`28433d6`](https://github.com/stdlib-js/stdlib/commit/28433d637a39abec34dddc51d88c59fdc7c38f3a) - **docs:** clean-up C function parameter and return annotations _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Aman Bhansali
-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="bug-fixes">

### Bug Fixes

-   [`401111d`](https://github.com/stdlib-js/stdlib/commit/401111dcb29bb71ad65460fe35ba6814ab9981ed) - remove unnecessary cast

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`004b244`](https://github.com/stdlib-js/stdlib/commit/004b24478b4af2a51f2e568fe2c1efd8cb5ef59d) - **docs:** update examples to use random/array utilities _(by Athan Reines)_
-   [`efc6522`](https://github.com/stdlib-js/stdlib/commit/efc65220a39e226839fd507b59190d6402bebe61) - **bench:** update benchmarks to use random/array utilities _(by Athan Reines)_
-   [`4ec2cd0`](https://github.com/stdlib-js/stdlib/commit/4ec2cd0d22446eac8818845f4a816d2d4a1bfde2) - **docs:** update copy _(by Athan Reines)_
-   [`cbee5b7`](https://github.com/stdlib-js/stdlib/commit/cbee5b72476134d157d3b7f93c73ce13b99a932f) - **build:** add and update wasm configurations _(by Athan Reines)_
-   [`5a36be3`](https://github.com/stdlib-js/stdlib/commit/5a36be3f681bf65914abdc58bbc3142533cb2328) - **style:** resolve lint errors _(by Athan Reines)_
-   [`401111d`](https://github.com/stdlib-js/stdlib/commit/401111dcb29bb71ad65460fe35ba6814ab9981ed) - **fix:** remove unnecessary cast _(by Athan Reines)_
-   [`2705ac1`](https://github.com/stdlib-js/stdlib/commit/2705ac192dbafd930d3ac0c683f792dd2023d777) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`df3c9b3`](https://github.com/stdlib-js/stdlib/commit/df3c9b368d8a3dd7dd38f8768deb53c2a780c055) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-10-04)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-23)

<section class="features">

### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`42c921a`](https://github.com/stdlib-js/stdlib/commit/42c921ab62b8cdf789a9e76b06b18074e850af5e) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`a9f7c78`](https://github.com/stdlib-js/stdlib/commit/a9f7c78cf0414fd5b48418008de73910e71ec02e) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_
-   [`9d552f8`](https://github.com/stdlib-js/stdlib/commit/9d552f8ee1087df295267fd3ddc2e5a04526ed6a) - **docs:** standardize parameter description and update docs _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.10">

## 0.0.10 (2022-11-03)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2022-08-30)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2021-08-23)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-14)

No changes reported for this release.

</section>

<!-- /.release -->

