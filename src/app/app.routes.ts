import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FiltraToiletsComponent } from './filtra-toilets/filtra-toilets.component';


const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    },
      {
      path: 'filtraToilets',
      component: FiltraToiletsComponent,
      title: 'Filtra toilets'
    }
  ];
  
  export default routeConfig;
  
