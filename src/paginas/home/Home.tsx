
import React from 'react';
import { Button, Paper } from '@material-ui/core';
import './Home.css';
import { Box } from '@mui/material';

function Home() {
    return (
        <>
           <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>Título</h1>
                    </Box>
                    <img src="https://img.olhardigital.com.br/wp-content/uploads/2021/11/One-Piece-Sem-Borda.jpg" alt="Imagem de One Piececap. 1000" style={{ width: "100%" , height: "100%" }} />
                    <Box display="flex" justifyContent="center" p={3}>
                        <Button variant='contained' color='primary'>Botão 1</Button>
                        <Button variant='contained' color='secondary'>Botão 2</Button>
                    </Box>
                </Box>
           </Paper>
        </>
    );
}

export default Home;