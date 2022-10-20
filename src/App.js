import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import CustomScrollbars from './components/CustomScrollbar/CustomScrollbars';
import { publicRoutes } from './routes/routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './components/GlobalStyles/App.scss';

function App() {
    return (
        <Router>
            <CustomScrollbars>
                <div className="App">
                    <Route>
                        <Header />
                        <div className="bodypages-app">
                            <Switch>
                                {publicRoutes.map((route, index) => {
                                    const Component = route.component;
                                    return (
                                        <Route
                                            exact
                                            key={index}
                                            path={route.path}
                                            component={Component}
                                        />
                                    );
                                })}
                            </Switch>
                        </div>
                        <Footer />
                    </Route>
                </div>
            </CustomScrollbars>
        </Router>
    );
}

export default App;
