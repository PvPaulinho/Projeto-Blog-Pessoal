import { Button, Container, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import "./CadastrarTema.css"


function CadastrarTema() {

    let Navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [tema, setTema] = useState<Tema>({
        id: 0,
        nome: '',
        descricao: ''
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            Navigate("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            await put(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema atualizado');
        } else {
            await post(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema cadastrado');
        }
        back()

    }

    function back() {
        Navigate('/temas')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>

                <TextField value={tema.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />

                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastrarTema;