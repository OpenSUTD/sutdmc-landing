import React from 'react';
import styled from 'styled-components';

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import PageBanner from '../components/PageBanner';
import Text from "../components/Text";
import FeatureCardSection from '../components/FeatureCardSection';
import Instruction from '../components/InstructionComp';

const formattedBannerText = (
    <>
        <h1>Experience iconic local architecture in minecraft</h1>
        <h3>In Collaboration with SUTD Architecture and Sustainable Design (ASD) Pillar</h3>
    </>
);

const featureCardDetails = {
    jth: {
       title: 'Jurong Town Hall',
       href: '/asd2020/jurong_town_hall',
       imgSource: require('../assets/images/asd-landing/Jurong Town Hall.png'),
       description: 'Click to find out more'
    },
    theatre: {
        title: 'Theatre',
        href: '/asd2020/theatre',
        imgSource: require('../assets/images/asd-landing/National Theatre.png'),
        description: 'Click to find out more' 
    },
    gallery: {
        title: 'National Design Centre',
        href: '/asd2020/design_centre',
        imgSource: require('../assets/images/asd-landing/National Design Centre.png'),
        description: 'Click to find out more'
    }
};

const instructionDetails = {
    step2: {
        description: 'At the entrance to the grand hall with the SUTD logo, turn left to follow a grass path',
        step: 2
    },
    step3: {
        description: 'You will be greeted by a Chinatown-esque gate with shophouses lined up behind it.',
        step: 3
    },
    step4: {
        description: 'Enter the portal of each of the houses to visit their location in game. You have the ability to fly in these worlds.',
        step: 4
    },
}

const instructionsList = [];

for (const instructionObj of Object.values(instructionDetails)) {
    instructionsList.push(
        <Instruction asd stepNum={instructionObj.step}>
            <Text>{instructionObj.description}</Text>
        </Instruction>
    );
}

const sectionHeader = {
    textTransform: 'uppercase',
    fontSize: '30px',
    color: 'var(--color-accent)',
    marginTop: '20px'
}

const InstructionHeader = styled.h3`
    font-family: var(--font-primary);
    line-height: 1.4;
    color: var(--color-accent);
    text-transform: uppercase;
    font-size: 30px;

    @media (max-width: 1200px) {
        font-size: 24px;
    }

    @media (max-width: 896px) {
        font-size: 20px;
    }

    @media (max-width: 576px) {
        font-size: 18px;
    }
`;

const InstructionWrapper = styled.div`
    width: auto;
    height: auto;
`;

const SingularPhoto = styled.img`
    width: 70%;
    margin: 10px auto;

    @media (max-width: 896px) {
        width: 100%;
    }
`;

const underlineText = {textDecoration: 'underline'}

const noMarginTop = {marginTop: '0'}

const ASDProjectsComp = () => {
    return (
        <PageBase>
            <PageHeader>ASD 2020 projects</PageHeader>
            <PageBanner imgSource={require('../assets/images/asd-landing/Golden Mile Complex.png')}>
                {formattedBannerText}
            </PageBanner>
            <Text>In Summer 2020, 27 students from the 02.231 Conservation Theories and Approaches to Built Heritage module took to the blocky world of Minecraft as a challenge to distill the architecture design of buildings through a reductive thinking process. A total of 7 iconic local buildings were built as part of their coursework. Their builds now live in the SUTD Minecraft Server Network for the public to visit.</Text>
            
            {/* <Text style={sectionHeader}>Watch the Video</Text> */}

            <Text style={sectionHeader}>The Buildings</Text>
            <Text style={underlineText}>Featured Builds</Text>
            <Text style={noMarginTop}>Read about how our ASD students did it</Text>
            <FeatureCardSection cardDetails={featureCardDetails}></FeatureCardSection>
            <Text style={underlineText}>All Builds</Text>
            <Text style={noMarginTop}>Golden Mile Complex – Bedok Marketplace – Tampines Junior College – Old Singapore Power Building </Text>
        
            <Text style={sectionHeader}>Visit Us</Text>
            <Text style={underlineText}>Visiting it ingame</Text>
            <InstructionHeader>Step 1</InstructionHeader>
            <Text style={noMarginTop}>Refer to instructions on <a href="/campus" style={underlineText}>how to connect to our server network</a></Text>
            <InstructionWrapper>
                {instructionsList}
            </InstructionWrapper>
            <SingularPhoto src={require('../assets/images/asd-landing/instructions/step_4b.png')}></SingularPhoto>


            <Text style={underlineText}>Visit in your browser</Text>
            <Text style={noMarginTop}>Open the 3D maps <a href="#" style={underlineText}>here</a> (coming soon)!</Text>
        
        </PageBase>
    );
}

export default ASDProjectsComp;