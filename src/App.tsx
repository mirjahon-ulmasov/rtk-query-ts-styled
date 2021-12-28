import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from './components/Layout';
import { CurrencyPage, WeatherPage } from './pages';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/weather" />
        </Route>
        <Route path="/weather" component={WeatherPage} />
        <Route path="/currency" component={CurrencyPage} />
      </Switch>
    </MainLayout>
  );
};

export default App;
