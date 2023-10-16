# React Ticker Tape

A lightweight and flexible react library that allows you to build fully functional ticker tape. This react library is built using react.js, sass and adheres to latest ECMAScript specs. This library is intended to be used along with react.js.
Supports IE10+, all major browsers and even mobile. You can view live demo [here](https://tickertapedemo.netlify.app/).

## Inspiration

Originally, this was a pure vanilla js module which I had developed for one of my client as per their unique requirement. Now, I have upgraded this library to have more control over ticker tape such as text to be displayed, speed animation, background & color changes and positions to be displayed.


## Installation

You can install this package using below command:

```bash
npm install react-ticker-tape
```

**Note**: You are to use this library along with react.js, since it is a pure react component under the hood.

## Usage

Import the Ticker Tape component in your desired react component using following code:


```javascript

import {Ticker} from 'react-ticker-tape'

```

Then, simply use it with below code.


```javascript

<Ticker text='Hi there! This is ticker tape version 1. Please check documentation on how to embed this library to your react project. Cheers!' />
```


## Props || Options

Below are the options to control Slider component as per requirement:

**`text {type: string}`**: text for ticker tape **`*Required`**

**`animationSpeed {type: integar}`**: sets the speed of the ticker animation, in seconds **`Default: 10 || 10s`**

**`bg {type: string}`**: sets background color for ticker. You can pass name, hex or rgba code. **`Default: blueviolet`**

**`color {type: string}`**: sets color for ticker text. You can pass name, hex or rgba code. **`Default: white`**

**`fix {type: string}`**: sets the postion of ticker tape **`Default: null`** **`Values: top || bottom || left || right`**


## Author
Bivek Jang Gurung