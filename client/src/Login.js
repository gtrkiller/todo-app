import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button, Container, Grid} from '@material-ui/core';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  
  return <Container display="flex">
  <Grid container justify="center" alignSelf="center" spacing={3}>
    <Grid item xs={6} sm={2} alignSelf="center" style={{ paddingTop: '25%'}}>
      <Button style={{backgroundColor: "#888888"}} variant="contained" size="large" fullWidth onClick={() => loginWithRedirect()}>Login</Button>
    </Grid>
  </Grid>
</Container>
};
