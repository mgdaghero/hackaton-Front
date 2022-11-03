import React from 'react'
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouterApp from 'routes'

import TopMenu from 'components/TopMenu/TopMenu';
import Home from './pages/home/Home';
import ListItem from 'pages/ListItem/ListItem';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import ItemDetail from 'pages/ItemDetail/ItemDetail';
import Checkout from 'pages/Checkout/Checkout';
import Payment from 'pages/Payment/Payment';
import Error404 from 'pages/Error404/Error404';

const App = () => {

  const { Header, Content } = Layout;

  return (
    <Layout>
    <Router>
      <Header style={{ zIndex: 1 }}>
        <TopMenu />
      </Header>
      <Content>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ListItem" element={<ListItem />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Item/:id" element={<ItemDetail />}></Route>
          <Route path="/Checkout/:id" element={<Checkout />}></Route>
          <Route path="/Payment/:id" element={<Payment />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Content>
    </Router>
  </Layout>
  )
}

export default App
