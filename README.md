# react-native-ameelio-library

## Getting started

Clone this repo, then run `yarn install` to get dependencies.

Run `yarn start` to launch the expo server. Install the Expo app for Android or iOS, and then connect your phone to the expo server to view the Storybook.

Publish the package with `yarn release`

### Creating a component

In the `src` folder, identify or create a higher level folder that your component fits well under. Usually, this is the name of whatever section it falls under in the component library section of the figma.

Create a file `YourComponent.react.tsx`. The component should be entirely self-contained in this file (except assets). As much as you can, use colors, spacings, and stylings from the `styles` folder. If you component needs a color / spacing / style that is not in a GlobalStyle file but you think would make a good addition, feel free to add it. Do try to stick to naming conventions observed in those files.

Be sure to add a line in `src/index.ts` importing / exporting your component, organized with other components of the parent directory. This is important so that when the source code is used to build the npm repository, your code is correctly included.

### Creating a story

During development, you will likely want to make a story to test your component. Stories go in the `storybook/stories` folder, and should be sorted into folders to mirror the structure of the `src` directory. Story files should end in `.stories.tsx`. The story should be named `<ParentDirectory>/<Component>`. For example, the story for the `Header` component in the `Typography` folder is named `Typography/Header`.

To get your story to show up in the app, you will need to add `import './stories/<ParentDirectory>/<Component>.stories';` to `storybook/index.js`. For the sake of organization, please keep these imports alphabetical by name of story. This structure preserves the higher level structure of the components and makes them easier to find.
