import React from 'react';
import { Grid, CircularProgress } from "@mui/material";

const Loading: React.FC = (props) => {

  return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ padding: 30 }} >
        <CircularProgress />
        <span style={{ maxWidth: '85vw', textAlign: 'center', marginTop: 30 }} >
          Carregando...
        </span>
      </Grid>
  );
}

export default Loading
