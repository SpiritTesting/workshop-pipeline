import { Route } from '@angular/router';

import RegisterComponent from './register.component';

const registerRoute: Route = {
  path: 'register',
  component: RegisterComponent,
  title: 'Registrierung',
};

export default registerRoute;
