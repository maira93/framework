import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Postagens from '../components/Postagens';
import Albuns from '../components/Albuns';
import Todos from '../components/Todos';
import Menu from '../components/Menu/Menu'
const Index = () => {

    return(
        <>
        <div className="App">
        <Menu />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} render={(props) => <Postagens {...props} /> }/>
                    <Route path="/albuns" exact={true} render={(props) => <Albuns {...props} /> }/>
                    <Route path="/todos" exact={true} render={(props) => <Todos {...props} /> }/>
                </Switch>
            </BrowserRouter>
        </div>
        </>
    )
}
export default Index;