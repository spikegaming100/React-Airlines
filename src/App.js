import * as React from 'react';
import Container from '@mui/material/Container';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import {AirBox} from "./MainPage/AirBox";
import {Copyright} from "./SubElements/Copyright";
import {Menu} from "./SubElements/Menu";
import About from "./About";
import Support from "./Support";
import {Content} from "./MainPage/Content";
import {Header} from "./MainPage/Header";

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
                <Header />
                <AirBox count={25} />
                <Menu history={this.props.history} />
                <Content />
                <Copyright history={this.props.history}/>
            </Container>
        );
    }
}



