import React from 'react' ;
import CollectionOverview from '../../Components/collection-overview/overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../../pages/collection/collection.component';



const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;