
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Manufacturers from './components/Manufacturers'

import ErrorPage from './pages/Error'
import ManufacturersPage from './pages/Manufacturers'
import ProductsPage from './pages/Products'

render(
  <BrowserRouter>
    <Switch>
     <Route path="/products" component={ProductsPage} />
      <Route exact path="/" component={Manufacturers} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)