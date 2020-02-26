import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, theme } from '@chakra-ui/core'
import { Button } from "@chakra-ui/core";
import Header from "./components/Header";

ReactDOM.render(

    <ThemeProvider theme={theme}>
        <Header></Header>
        <Button variantColor="green">Button</Button>
    </ThemeProvider>,

    document.getElementById('root')
)