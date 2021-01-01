import './App.css';
import { Container, Grid } from '@material-ui/core'
import Profile from './components/Profile'
import Experience from './components/Experience'

function App() {
  return (
    <div>
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} className="p-container">
          <Profile/>
        </Grid>
        <Grid item xs className="e-container" >
          <Experience/>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
}

export default App;
