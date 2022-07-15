import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const dispatch = useDispatch();

    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
        navigate('/login')
    }

    var navbarComponent;

    if (token !== ""){
        navbarComponent = 
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link to="/home" className="text-decorator-none">
                        <Box className="cursor">
                            <Typography variant="h4" color="inherit" className="blogPessoal">
                                Blog Pessoal
                            </Typography>
                        </Box>
                    </Link>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/postagens" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioPostagem" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Cadastrar postagem
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className="cursor" onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>
    }


    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;