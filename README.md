# SABI BUTTON

Create beauitful UI buttons with ease in React

## 🌈 Features

- Tiny size
- Clean user interface
- Typescipt ready
- Highly customisable
- Custom icon support

## 📝 Installation

Install sabi-button with npm

```bash
  npm i react-sabi-button
```

## 💪 Usage/Examples

```javascript
import { BtnStack, SabiBtn } from 'react-sabi-button'
import { MdEmail } from 'react-icons/md'

function App() {
  return (
    <BtnStack direction='row'>
      <SabiBtn size='s' leftIcon={<MdEmail />} theme='pink'>
        This is a Button
      </SabiBtn>
    </BtnStack>
  )
}
```

## 🧩 BtnStack Props

The BtnStack collects and stacks SabiBtn components, Hence can't be called without passing SabiBtn as a child component.

| Prop           | Description                            | Type     | default |
| -------------- | -------------------------------------- | -------- | ------- |
| border         | Sets the border of the BtnStack        | `string` |
| height         | Sets the height of the BtnStack        | `string` |
| minHeight      | Sets the minHeight of the BtnStack     | `string` |
| maxHeight      | Sets the maxHeight of the BtnStack     | `string` |
| minWidth       | Sets the minWidth of the BtnStack      | `string` |
| maxWidth       | Sets the maxWidth of the BtnStack      | `string` |
| width          | Sets the width of the BtnStack         | `string` | auto    |
| display        | Sets the property of display           | `string` | flex    |
| direction      | Sets property of flex-direction.       | `string` | row     |
| align          | Sets property of align-items           | `string` | center  |
| justifyContent | Sets property of justify-content       | `string` |
| gridColumns    | Sets property of grid-template-rows    | `string` |
| gridRows       | Sets property of grid-template-columns | `string` |
| whiteSpace     | Sets property of white-space           | `string` |
| wrap           | Sets property of flex-wrap             | `string` |
| overflow       | Sets property of overflow              | `string` |
| shadow         | Sets property of box-shadow            | `string` |

## 🪄 SabiBtn Props

These props define the structure and look of the button component

| Prop         | Description                                                                                                                                                                                     | Type                                         | default |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------- |
| btnType      | Specifies the button type based on structure. The specs are : `solid` `outline` `glance` `glow` `faint`                                                                                         | `string`                                     | glance  |
| size         | Specifies the size of the button. The specs are: `xs` `s` `m` `l` `xl`                                                                                                                          | `string`                                     | s       |
| theme        | Specifies the color theme of the button. The specs are: `black` `white` `cool` `green` `pink` `orange` `purple` `yellow` `blue` `cyan` `blossom` `blossom-shade` `tint` `cream` `red` `default` | `string`                                     | blue    |
| width        | Sets the width of the button                                                                                                                                                                    | `string`                                     |
| fontSize     | Sets font-size of the button                                                                                                                                                                    | `string`                                     |
| height       | Sets the height of the button                                                                                                                                                                   | `string`                                     |
| leftIcon     | Adds icon to the left side of the button                                                                                                                                                        | `React.ReactNode`                            |
| rightIcon    | Adds icon to the right side of the button                                                                                                                                                       | `React.ReactNode`                            |
| borderRadius | Sets property of border-radius of the button                                                                                                                                                    | `string`                                     | 1.5px   |
| shadow       | Sets property of shadow                                                                                                                                                                         | `string`                                     |
| border       | Sets property of border to the button                                                                                                                                                           | `string`                                     |
| transition   | Sets property of transition to button                                                                                                                                                           | `string`                                     |
| onFocus      | Function to trigger when button is focused on.                                                                                                                                                  | `React.FocusEventHandler<HTMLButtonElement>` |
| onClick      | Function to trigger when button is clicked                                                                                                                                                      | `React.MouseEventHandler<HTMLButtonElement>` |

## ☛ Guide

When consuming the SabiBtn components. The following needs to be considered.

1. To avoid bugs, The BtnStack and SabiBtn are both required to accept props as children.
2. The btnType, theme and size props in SabiBtn component can't be an empty string. Either remove it or make use of it.
3. Every Prop should accept required inputs
4. "glow" btnType prop must accept "white" as theme prop

## ⚖️ License

[MIT](c) [Etombi Maxwell](https://github.com/Maxetoo)
