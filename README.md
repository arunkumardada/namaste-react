# namaste-react

# Parcel

- Dev Build
- Local Server
- HMR (hot module replacement)/Reloads page automatically when any file changes.
- using File Watching Algorithm in C++
- Caching (Faster builds)
- Image Optimization
- Minification
- Bundling
- Compressing
- Code Splitting
- Differential Bundling.(It gives support to older browsers)
- Tree Shaking (Remove unused code)

2 Types of Export/Import

- Default export/import

export default Component;
import Component from "path";

- Named Export/import

export const Component;
import {Component} from "path;

# Two types of Routing in webapps

- Client Side
- Server Side

# React Class Life Cycle methods for Multiple Children under single parent.

- Two types of phases during mounting.

1. Render Phase.
2. Commit Phase.

Once After Children Render phase is completed. DOM Updated in Single Batch Component Didmount.

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# Redux Toolkit

    - Install @redux/toolkit and react-redux
    - Build our own store
    - Connect our store to our app
    - create Slice (cart slice)
    - Dispatch an action
    - Selector

# Types of Testing (developer)

- Unit Testing
- Integration
- End to End

# Setting up Testing in our App

- Install React Testing Library
- INstalled Jest
- Installed babel dependencies
- Configure Babel
- Configure parcel config file to disable default babel transpilation.
- Jest Configuration. ( npx jest --init)
- install jsdom library
- Install @babel/preset-react - to make JSX works in test cases like (<Contact/>)
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom
