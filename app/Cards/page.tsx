"use client";

import { Grid } from "@nextui-org/react";
import { Card1 } from '../../components/Card';
// import { Card2 } from './Card2';import { Card3 } from './Card3';import { Card4 } from './Card4';import { Card5 } from './Card5';
import Header from "../../components/Header"; 

export default function App() {
    return (
        
        <Grid.Container gap={2} justify="center">
            <Header />
            <Grid xs={12} sm={4}>
                <Card1 />
            </Grid>
            <Grid xs={12} sm={4}>
                <Card1 />
            </Grid>
            <Grid xs={12} sm={4}>
                <Card1 />
            </Grid>
            <Grid xs={12} sm={5}>
                <Card1 />
            </Grid>
            <Grid xs={12} sm={7}>
                <Card1 />
            </Grid>
        </Grid.Container>
    );
}
