import React, { Component } from 'react'
import Header from 'parts/header';
import Hero from 'parts/hero';
import MostPicked from 'parts/mostPicked';
import Categories from 'parts/categories';
import Testimoni from 'parts/testimoni';
import Footer from 'parts/footer';
import landingPage from 'json/landingPage.json';

export default class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}></Hero>
        <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}></MostPicked>
        <Categories data={landingPage.categories}></Categories>
        <Testimoni data={landingPage.testimonial}></Testimoni>
        <Footer></Footer>
      </>
    )
  }
}
