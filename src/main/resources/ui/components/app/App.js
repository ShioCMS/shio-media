import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import theme from '../theme/theme'
import AppContainer from './AppContainer';

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <AppContainer />
            </ThemeProvider>
        </div>
    );
}

export default App;