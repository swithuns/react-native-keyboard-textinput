# react-native-keyboard-textinput

A react native package to provide a versatile and easy to implement solution to the overcomplicated problem of how to handle keyboards on different screens throughout a mobile app.

The package is designed for true separation of concerns when it comes to your screens and keyboard interactions. It also allows much easier handling on accessability and user experience.

![App Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjE0cjZhZ2lzc3pwdGxlbW04cG5ibDYwaWx5c2hlYzRvYXFheDJzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JE2zLcz00x0OhIGDSI/giphy.gif)

# Installation

```bash
npm i @swithuns/react-native-keyboard-textinput
```

# Usage

Place the handler at your root component, optional to wrap your app in the dismiss handler if you want keyboard to dismiss when user presses outside of inputs and pressables.

```jsx
import {
  InputKeyboardHandler,
  KeyboardDismissWrapper,
} from "react-native-keyboard-textinput";

export default function App() {
  return (
    <KeyboardDismissWrapper>
      ...rest of app
      <InputKeyboardHandler style={styles.textInputStyle} />
    </KeyboardDismissWrapper>
  );
}
```

## Usage across app

```jsx
import { TextInput } from "react-native-keyboard-textinput";

<TextInput {...props} />;
```

## Future Plans

Additional supportive package that gives custom keyboard sticky inputs, cases to do:
-Search keyboard with tags (as seen in example 3)
-Chat messanger ui with gif and image upload for users to plugin handlers for.
-Short form with check boxes and/or radios and a single textbox.

Please feel free to message me with additional ideas, or look at example 3 for how to implement customs and fire in a PR for me to add to the new package.

tim.frank@hotmail.co.uk
