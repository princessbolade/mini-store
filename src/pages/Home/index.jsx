import React from "react";
import Hero from "../../components/hero";
import Navbar from "../../components/nav-bar";
import ProdAdvert from "../../components/prod-advert";
import ProductHero from "../../components/product-hero";
import ProductHeroTwo from "../../components/product-hero-two";
import SubNav from "../../components/sub-nav";
import SubNavTwo from "../../components/sub-nav-two";
import TopRating from "../../components/top-rating";

const Home = () => {
  return (
    <>
      <Navbar />
      <SubNav />
      <SubNavTwo />
      <Hero />
      <ProductHero />
      <ProductHeroTwo />
      <ProdAdvert />
      <TopRating />
    </>
  );
};

export default Home;
