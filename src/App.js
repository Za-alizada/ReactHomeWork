import React, { Component } from 'react'
import "./App.css";
import Header from './header/Header'
import Article from "./Article/Article";
import Product from "./Product/Product";
import Madal from './Modal/Madal'

export default class Modal extends Component {

  render() {
    const allProducts = [
      {id:1, title:'Asus', image:'images/6.png', price:150, count: 10},
      {id:1, title:'Acer', image:'images/8.jpeg', price:200, count: 12},
      {id:1, title:'HP', price:250, count: 1}
    ]
    return (
      <div className="App">
        <Header />
        <Article />
        <div className="container">
          <Product {...allProducts[0]}>
            <button className="offBtn">OFF 50%</button>
          </Product>
          <Product {...allProducts[1]}>
            <button className="offBtn">OFF 50%</button>
          </Product>
          <Product {...allProducts[2]}>
            <button className="offBtn">OFF 50%</button>
          </Product>
        </div>
        <h1>{7+9}</h1>
        <h1>{Math.pow(5,3)}</h1>
        <Madal>
          <p className="cd-para">پرداخت شما با موفقیت انجام شد</p>
          <ul className="cd-buttons">
            <li><a href="#0">تایید</a></li>
            <li><a href="#0">بازگشت</a></li>
          </ul>
        </Madal>
      </div>
    );
  }
}