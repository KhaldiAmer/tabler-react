# Tabler React

> Work in progress React implementation of the [Tabler Dashboard UI Kit](https://github.com/tabler/tabler)

[![NPM](https://img.shields.io/npm/v/tabler-react.svg)](https://www.npmjs.com/package/tabler-react) ![Type definitions](https://img.shields.io/badge/type%20definitions-flow-green.svg)

**[View the demo](https://tabler.github.io/tabler-react/)** | **[track our progress towards version 1](https://github.com/tabler/tabler-react/projects/1)** | **[get involved](https://github.com/tabler/tabler-react/issues)** | **[chat to us on Slack](https://tabler-ui.slack.com/messages/CA55LDVHU/)**.

## Install

Make sure you have [Node.js](https://nodejs.org/) 8+ and [npm](https://npmjs.com/) installed.

`npm install --save tabler-react` or `yarn add tabler-react`

## Usage

```jsx
import React, { Component } from "react";

import { Card, Button } from "tabler-react";

class MyCard extends Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Body>
          <Button color="primary">A Button</Button>
        </Card.Body>
      </Card>
    );
  }
}
```

For more examples see the [demo website](https://tabler.github.io/tabler-react/)

## Contributing

[There are plenty of opputunities to get involved](https://github.com/tabler/tabler-react/issues). Pick an outstanding task, let us know what you are working on and fire away with any questions.

The package is made up of 2 main folders:

* /src contains all the Tabler React components
* /example is our [create-react-app](https://github.com/facebook/create-react-app/) based demo website

To setup and run a local copy:

1.  Clone this repo with `git clone https://github.com/tabler/tabler-react`
2.  Run `yarn` or `npm install` in the root folder
3.  Run `yarn` or `npm install` in the example folder
4.  In seperate terminal windows, run `yarn start` in the root and example folders.

You should now be up and running with live browser reloading of the example website while you work on Tabler React components in the /src folder.

When you're done working on your changes, submit a PR with the details and include a screenshot if you've changed anything visually.

## License

MIT © [jonthomp](https://github.com/jonthomp), [AaronCoplan](https://github.com/AaronCoplan) and [the contributors](https://github.com/tabler/tabler-react/graphs/contributors).
