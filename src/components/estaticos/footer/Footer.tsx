import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";

function Footer (){
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/PvPaulinho" target="_blank">
                                <GitHub style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/paulo_victor_damasceno_silva/" target="_blank">
                                <Instagram style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/paulo-victor-damasceno-e-silva-0184ba183/" target="_blank">
                                <LinkedIn style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://blog-pessoal-paulovictor.herokuapp.com">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Paulo Victor Damasceno e Silva</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;