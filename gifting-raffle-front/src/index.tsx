import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/themes/default/assets/fonts/icons.woff';
import 'semantic-ui-css/themes/default/assets/fonts/icons.woff2';
import 'semantic-ui-css/themes/default/assets/fonts/icons.ttf';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
