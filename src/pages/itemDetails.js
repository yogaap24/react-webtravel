import React, { Component } from 'react'
import Header from 'parts/header';
import Testimoni from 'parts/testimoni';
import Footer from 'parts/footer';
import ItemDetails from 'json/itemDetails.json';


export class itemDetails extends Component {
  render() {
    return (
        <>
        <Header {...this.props}></Header>
        <Testimoni data={ItemDetails.testimonial}></Testimoni>
        <Footer></Footer>
        </>
    )
  }
}

export default itemDetails
