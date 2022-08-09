import React from 'react';
import Hero from "../components/Jumbotron/Hero"
import Feature from "../components/Feature/Feature";
import Faq from "../components/Faq/Faq";
import SocialProof from '../components/SocialProof/SocialProof';
import Cta from '../components/Cta/Cta';
import Contact from '../components/Contact/Contact';



const Home = () => {
    return (
      <>
        <Hero />
        <Feature />
        <Faq />
        <Cta
          title="Construisez votre patrimoine simplement"
          content="Quel que soit votre objectif, une solution sur mesure est possible du fait de la grande souplesse d’utilisation. De se constituer un patrimoine ou d’acheter un logement pour y vivre, BuyByBlock vous permet de facilement répondre à vos besoins"
          buttonContent="Nous vous aidons"
        />
        <SocialProof />
        <Cta
          title="Maitrisez vos placements"
          content="Avec une gestion facile et intuitive, BuyByBlock vous permet de consacrer du temps à ce qui est important – et de faire fructifier votre épargne en toute transparence."
          buttonContent="Découvrez plus"
        />
        <Contact />
      </>
    );
}

export default Home;
