# Widgets

Widgets is a simple React application that demonstrates the implementation of various UI components like Accordion, Search, Dropdown, and Language Translate. The project focuses on building these components using both class-based and functional React components, as well as creating navigation without using React Router.

## Table of Contents

- [Widgets](#widgets)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Features](#features)
  - [Usage](#usage)
    - [Accordion](#accordion)
    - [Search](#search)
    - [Dropdown](#dropdown)
    - [Language Translate](#language-translate)
  - [Components](#components)
  - [Screenshots](#screenshots)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/colson0x1/widgets.git
   ```

2. Navigate to the project directory:

   ```bash
   cd widgets
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## Features

- Accordion: Expandable/collapsible sections with title and content.
- Search: Search functionality powered by Wikipedia API.
- Dropdown: Custom dropdown component for selecting options.
- Language Translate: Translate text into different languages using Google Translate API.
- Vanilla Navigation: Navigation between components without using React Router.

## Usage

The project is structured to demonstrate the usage of various components. Each component is self-contained and can be easily integrated into other projects. Here's a brief overview of how to use each component:

### Accordion

```jsx
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JavaScript framework.',
  },
  // Add more items as needed
];

<Accordion items={items} />;
```

### Search

```jsx
import Search from './components/Search';

<Search />;
```

### Dropdown

```jsx
import Dropdown from './components/Dropdown';

const options = [
  {
    label: 'Option 1',
    value: 'value1',
  },
  // Add more options as needed
];

<Dropdown
  label='Select an option'
  options={options}
  selected={selected}
  onSelectedChange={setSelected}
/>;
```

### Language Translate

```jsx
import Translate from './components/LanguageTranslate';

<Translate />;
```

## Components

- **Accordion:** Expandable sections with dynamic content.
- **Dropdown:** Custom dropdown component for selecting options.
- **Header:** Navigation header with links to different components.
- **LanguageConvert:** Component for translating text into different languages.
- **LanguageTranslate:** Interface for entering text and selecting a language for translation.
- **Link:** Custom link component for handling navigation.
- **Route:** Simple route component for rendering components based on the current URL path.
- **Search:** Component for searching Wikipedia articles.

## Screenshots

![widgets](https://i.imgur.com/NotDL36.png)

![widgets](https://i.imgur.com/xWja47b.png)

![widgets](https://i.imgur.com/nf8TDfu.png)

![widgets](https://i.imgur.com/JXgHAPP.png)

![widgets](https://i.imgur.com/Qmakoxf.png)

![widgets](https://i.imgur.com/4rb6hkL.png)

![widgets](https://i.imgur.com/TsbyMAf.png)

![widgets](https://i.imgur.com/R17Z6Zi.png)

![widgets](https://i.imgur.com/JwWZepY.png)

![widgets](https://i.imgur.com/NIDh7LT.png)

![widgets](https://i.imgur.com/XrcXyDm.png)

![widgets](https://i.imgur.com/vuZCdCj.png)

![widgets](https://i.imgur.com/iOmvUwF.png)
