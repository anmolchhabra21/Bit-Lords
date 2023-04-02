import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';

const Item = (() => ({
  backgroundColor: '#1A2027',
  // padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
}));


function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={3} >
          <h1>xs=4</h1>
        </Grid>
        <Grid item xs={9} >
          <h1>xs=8</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
