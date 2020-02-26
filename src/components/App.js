import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';

import AppContainer from './AppContainer';

function App() {
    return (
        <div>
            <ThemeProvider>
                <AppContainer />
            </ThemeProvider>
        </div>
    );
}

export default App;