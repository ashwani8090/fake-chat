import { Switch } from 'react-router-dom';

import PublicRoute from './publicRoute';
import { Calendar} from '../screens';

const Routes = () => {
    return (
            <Switch>
                <PublicRoute
                    path="/"
                    component={Calendar}
                    isAuthenticated={false}
                >
                    <Calendar />
                </PublicRoute>

            </Switch>
    );
};

export default Routes;