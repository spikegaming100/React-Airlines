import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import {AirBox} from "./AirBox";
import {Copyright} from "./Copyright";
import {Menu} from "./Menu";
import Box from "@mui/material/Box";
import About from "./About";
import Support from "./Support";
import {Content} from "./Content";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/support" component={Support} />
                <Route path="/" component={Main} />
            </Switch>
        </Router>
  );
}

class Main extends React.Component {
    render() {
        return (
            <Container maxWidth={"lg"}>
                <Box sx={{ borderRadius: 10}}>
                    <Typography variant="h2" align="center">Авиатуры на любой вкус</Typography>
                </Box>
                <Menu history={this.props.history} />
                <AirBox count={25} />
                <Content />

                <Copyright history={this.props.history}/>
            </Container>
        );
    }
}



