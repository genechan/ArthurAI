# My default setup

Empty project.

## Building and running on localhost

First install dependencies:

```sh
yarn install
```

To run in hot module reloading mode:

```sh
yarn start
```

To create a production build:

```sh
yarn run build-prod
```

## Testing

To run jest unit test

```sh
yarn test
```

To run cypress.io integration test.
This will launch parcel localhost along with cypress. Cypress won't test a site unless it's running first.

```sh
yarn integration
```

To run Storybook demo / manual test

```sh
yarn storybook
```

## Running

Open `http://localhost:1234` in your browser

## Credits

Started with parceljs form [createapp.dev](https://createapp.dev/)

Unit test with [testing library](https://testing-library.com/)

Integration Test from [cypress.io](https://www.cypress.io/)

Storybook from [Story book](https://storybook.js.org/)
