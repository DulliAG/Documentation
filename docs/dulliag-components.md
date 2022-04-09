---
sidebar_position: 3
sidebar_label: '@dulliag/components'
---

# @dulliag/components

![npm](https://img.shields.io/npm/v/@dulliag/components?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/@dulliag/components?label=Downloads&style=for-the-badge)
![NPM](https://img.shields.io/npm/l/@dulliag/components?style=for-the-badge)
![Issues](https://img.shields.io/github/issues-closed/dulliag/dulliag-components.svg?style=for-the-badge)
![Issues](https://img.shields.io/github/issues/dulliag/dulliag-components.svg?style=for-the-badge)

---

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## Setup

### Installation

1. Install the required dependencies

   ```shell
   npm i @dulliag/components react-router-dom
   ```

   :::tip If youre using TypeScript...

   ... make sure to have the types for react-router-dom installed by using `npm i -D @types/react-router-dom`

   :::

2. Import the stylesheet for the icons by addin this into your static html-file

   ```html title="public/index.html"
   <head>
     <link
       rel="stylesheet"
       href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
     />
   </head>
   ```

3. Import the required stylesheet in your index-file
   ```jsx title="src/index.(jsx|tsx)"
   import '@dulliag/components/style/master.scss';
   import 'bootstrap/dist/css/bootstrap.min.css';
   import 'bootstrap/dist/js/bootstrap.min.js';
   import 'popper.js/dist/popper.min.js';
   import 'jquery/dist/jquery.min.js';
   ```

## Use @dulliag/components

### CookieDisclaimer

```tsx
import { CookieDisclaimer } from '@dulliag/components';

<CookieDisclaimer cookieName="accept_cookies" />;
```

### Breadcrumb

```tsx
import { BreadcrumbProps, Breadcrumb } from '@dulliag/components';

<Breadcrumb defaultPathName="DulliAG" />;
```

### Toast

```tsx title="src/App.tsx"
import { ToastContextProvider } from '@dulliag/components';
import Form from './Form';

const App = () => {
  return (
    <>
      <ToastContextProvider>
        <Form />
      </ToastContextProvider>
    </>
  );
};

export default App;
```

:::danger Deprecated

Don't use `setToasts` anymore. Instead push the toast by using `addToast`.

:::

```tsx title="src/Form.tsx"
import { useEffect, useContext } from 'react';
import { ToastContext } from '@dulliag/components';
import Form from './form';

const Form = () => {
  const { addToast } = useContext(ToastContext);
  const [name, setName] = useState<string>('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addToast({
      type: 'info',
      text: `Welcome ${name}`,
      close: {
        text: 'Logout',
        action: () => {
          /*code...*/
        },
      },
    });
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
      </form>
    </>
  );
};

export default Form;
```

### Navbar

```tsx
import { NavbarLink, NavbarProps, Navbar } from '@dulliag/components';

<Navbar
  brand="DulliAG"
  badge="Beta"
  links={NavbarLink[]}
/>;
```

### Footer

```tsx
import { FooterLink, FooterAd, FooterAuthor, FooterProps, Footer } from '@dulliag/components';

<Footer
  links={FooterLink[]}
  partner={FooterLink[]}
  other={FooterLink[]}
  ad={FooterAd}
  author={FooterAuthor}
  version={string}
/>;
```

### Spinner

```tsx
import { SpinnerProps, Spinner } from '@dulliag/components';

<Spinner small={true} large={false} />;
```
