import { Switch, Route } from 'react-router-dom'
import { UserContextProvider } from '../../context/UserContext'
import BecasForm from '../pages/Becas/BecasForm'
import BecasList from '../pages/Becas/BecasList'
import ValidateMail from '../pages/Becas/ValidateMail'
import HomePage from '../pages/Home/HomePage'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <UserContextProvider>
                <Route exact path="/becas/encontrar-becas" render={() => <BecasForm />} />
                <Route exact path="/becas/validar-mail" render={() => <ValidateMail />} />
                <Route exact path="/becas/becas-opciones" render={() => <BecasList />} />
            </UserContextProvider>


        </Switch>
    )
}

export default Routes