import React from 'react';
import styled from 'styled-components';

import FeatureCard from './FeatureCard';

const FeatureCardSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FeatureCardSectionComp = React.forwardRef(({ cardDetails, children, ...others }, ref) => {
    const featureCardList = [];

    for (const projectObj of Object.values(cardDetails)) {
        featureCardList.push(
        <FeatureCard href={projectObj.href}
                     title={projectObj.title}
                     imgSource={projectObj.imgSource}
                     description={projectObj.description}
                     key={projectObj.href}
        />);
    }

    return (
        <FeatureCardSection ref={ref} {...others}>
            {featureCardList}
        </FeatureCardSection>
    );
});

export default FeatureCardSectionComp;