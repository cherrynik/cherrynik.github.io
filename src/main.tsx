import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/theme/global';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
