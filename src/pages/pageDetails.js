import React, { Component } from "react";
import Header from "parts/header";
import PageDetailTitle from "parts/pageDetailTitle";
import FeaturedImage from "parts/featuredImage";
import PageDetailDesc from "parts/pageDetailDesc";
import BookingForm from "parts/bookingForm";
import Categories from "parts/categories";
import Testimoni from "parts/testimoni";
import Footer from "parts/footer";
import ItemDetails from "json/itemDetails.json";
import Fade from "react-reveal/Fade";

export class itemDetails extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDesc data={ItemDetails}></PageDetailDesc>
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={ItemDetails}></BookingForm>
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories}></Categories>
        <Testimoni data={ItemDetails.testimonial}></Testimoni>
        <Footer></Footer>
      </>
    );
  }
}

export default itemDetails;
