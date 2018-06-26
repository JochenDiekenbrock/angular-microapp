# Micro Apps with Web Components and Angular Elements

This example consists of three Angular projects that demonstrate how to use Web Components/ Angular Elements to implement a shell that loads micro apps:

- **shell (/src):** Shell loading micro apps
- **client-a (/projects/client-a)**: Demo micro app
- **client-b (/projects/client-b)**: Another demo micro app

This example is a fork of [Manfred Steyers great Micro app example](https://github.com/manfredsteyer/angular-microapp).
### Changes
25.06.2018 - remove the need for the hash based location strategy (HashLocationStrategy
) and enable the default PathLocationStrategy by syncing the routers

25.06.2018 - add lazy loading of the micro apps

## Install Dependencies

```
npm install
```

## Standalone

For debugging and testing, you can start each of those projects individually. Please note that the shell will throw some exceptions when doing so because it does not find the micro apps that are expected in an sub folder for the sake of simplicity.

Use one of the following commands for this:

```
ng serve --project shell --open
ng serve --project client-a --open
ng serve --project client-b --open
```

## Everything together

For using everything together, you have to build the example and run it:

```
npm run build
npm start
```
