# Flash Dash [![Build Status](https://travis-ci.org/asm-products/flash-dash.svg?branch=master)](https://travis-ci.org/asm-products/flash-dash)


## Customizable dashboards for everyone

This is a product being built by the Assembly community. You can help push this idea forward by visiting [https://assembly.com/flash-dash](https://assembly.com/flash-dash).

### How Assembly Works

Assembly products are like open-source and made with contributions from the community. Assembly handles the boring stuff like hosting, support, financing, legal, etc. Once the product launches we collect the revenue and split the profits amongst the contributors.

Visit [https://assembly.com](https://assembly.com) to learn more.


### How to install

1. `git clone https://github.com/asm-products/flash-dash.git`
2. `cd flash-dash`
3. `npm install`
4. `grunt serve`

### How to create a component

1. Install `yeoman` [Yeoman](http://yeoman.io)
2. Install `yo react-webpack` generator. [Check more details](https://github.com/newtriks/generator-react-webpack)
3. Type `yo react-webpack:component YourComponentName`. It will create three different files for you:
  - `create src/scripts/components/YourComponentName.jsx`
  - `create test/spec/components/YourComponentName.js`
  - `create src/styles/YourComponentName.less`

### How to run tests

1. Type `grunt test` in terminal

### Build your stuff

1. `grunt build` will bundle main.js
2. `grunt connect` will create a local server `0.0.0.0:8000` is the address

### How to write tests

_TBD_

### Buttons

- `Router.Link`
- Anchor
- Button

Props:

- `buttonClass`
  - only when you don't want to use `button` class, you can overwrite it using this prop
- `buttonExtraClass`
  - if you want to add extra classes, you should use this prop
- `buttonColor`
  - `blue (default) | red | green | yellow | dark-blue | dark-red | dark-green | dark-yellow`
- `buttonState`
  - `active | disabled | none (default)`
- `href` for `<a>`
  - `null (default)`
- `routeTo` for `Router.Link`
  - `null (default)`
- `type` for `<button>`
  - `null (default)`


React Example:

For `Router.Link` you need to add `routeTo` prop. E.g.

```javascript
<Button routeTo="home" buttonColor="yellow"> Home </Button>
```

`<button>` is set by default

```javascript
<Button buttonColor="red" buttonExtraClass="add-dashboard"> Add Dashboard </Button>
```

`<a>` is added into the DOM when `href=""` is added as prop. E.g.

```javascript
<Button href="http://www.assembly.com"> Go to Assembly.com </Button>
```
