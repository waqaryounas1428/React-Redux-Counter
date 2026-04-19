import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './demo08/store.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)

library.add(fas);
library.add(far);
library.add(fab);

