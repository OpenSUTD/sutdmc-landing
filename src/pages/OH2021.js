import React from 'react';

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import PageBanner from '../components/PageBanner';
import SubHeader from "../components/SubHeader";
import Text from "../components/Text";
import FeatureCardSection from '../components/FeatureCardSection';
import CTA from '../components/CTA';

const gameCardDetails = {
    jth: {
       title: 'Treasure Hunt',
       href: '/oh2021/treasure_hunt',
       imgSource: require('../assets/images/oh2021-games/treasure_hunt.png'),
       description: 'Slow day? Explore every nook and cranny of our school to find treasure chests.'
    },
    theatre: {
        title: 'Redstone Rush',
        href: '/oh2021/redstone_rush',
        imgSource: require('../assets/images/oh2021-games/redstone_rush.png'),
        description: 'Test your Boolean logic as fast as possible in our ISTD inspired game and complete the gauntlet!'
    },
    gallery: {
        title: 'Speed Bakers',
        href: '/oh2021/speed_bakers',
        imgSource: require('../assets/images/oh2021-games/speed_bakers.png'),
        description: 'Optimise your very own cake supply chain in our ESD inspired game!'
    }
};

const ASDBtnStyles = {
    width: '50%',
    margin: '0 auto'
};

const bannerText = (
    <>
        <h2>Discover a better world by <span style={{textDecoration: 'line-through'}}>design</span> Minecraft!</h2>
        <p>Come discover what the SUTD life is like by visiting our campus in-game, interacting with our students and playing competitive games modelled after our academic programmes.
        Join us in game or tune in to our livestream on 6th of March!</p>
        <p style={{textAlign: 'center'}}>
            <h3 style={{textDecoration: 'underline'}}>Connection Information</h3>
            <h4>
                <ul>
                    <li>Java Edition 1.16.5</li>
                    <li>game.sutdmc.opensutd.org</li>
                </ul>
            </h4>
        </p>
        <p style={{textAlign: 'center'}}>
            <h3 style={{textDecoration: 'underline'}}>Opening Hours</h3>
            <h4>
                <ul>
                    <li>Friday (5 Mar): 2pm to 6pm</li>
                    <li>Sat ~ Mon (6 ~ 8 Mar): 9am to 6pm</li>
                </ul>
            </h4>
        </p>
    </>
)
const sectionText = {
    'text-align': 'center',
    'margin-top': '0px'
}

const OH2021Comp = () => {
    return (
        <PageBase>
            <PageHeader>Open House 2021</PageHeader>
            <PageBanner imgSource={require('../assets/images/oh2021/oh2021-main.png')}>
                <Text>
                {bannerText}
                </Text>
            </PageBanner>
            <SubHeader>Games</SubHeader>
            <Text style={sectionText}>Starbucks, GV and Gong Cha vouchers to be won, first come first serve!</Text>
            <FeatureCardSection cardDetails={gameCardDetails}></FeatureCardSection>
            <SubHeader >View our ASD Projects</SubHeader>
            <CTA href="/asd2020" style={ASDBtnStyles}>ASD Projects</CTA>
        </PageBase>
    )
}

export default OH2021Comp;