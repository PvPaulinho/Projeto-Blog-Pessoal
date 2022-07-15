import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])

    
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    let navigate = useNavigate();

    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa estar logado', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            navigate("/login")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])


    async function getTema() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(()=>{
        getTema()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [temas.length])

    
    return (
        <>
        {
            temas.map(tema => (
                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Tema
                            </Typography>
                            <Typography variant="h4" component="h2">
                                {tema.nome}
                            </Typography>
                            <Typography variant="h6" component="h2">
                                {tema.descricao}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5} >
                                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size='small' color="secondary">
                                            deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            ))
        }
        </>
    );
}

export default ListaTema