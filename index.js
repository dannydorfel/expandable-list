import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import List from './views/List'
import 'react-fastclick'

render(
    <AppContainer
        component={List}
    />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./views/List', () => {
        render(
            <AppContainer
                component={require('./views/List').default}
            />,
            document.getElementById('root')
        );
    });
}
