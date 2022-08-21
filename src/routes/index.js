import { Switch } from 'react-router-dom';
import { Messenger } from '../screens';
import PublicRoute from './publicRoute';

const Routes = () => {
    return (
            <Switch>
                <PublicRoute
                    path="/"
                    component={Messenger}
                    isAuthenticated={false}
                >
                </PublicRoute>

            </Switch>
    );
};

export default Routes;