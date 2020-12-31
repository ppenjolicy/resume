import './App.css';
import { Container, Grid } from '@material-ui/core'
import Profile from './components/Profile'
import Experience from './components/Experience'

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} style={{background: 'red'}}>
          <Profile/>
        </Grid>
        <Grid item xs style={{background: 'blue'}}>
          <Experience/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
