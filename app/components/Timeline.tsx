
import TimelineCard from "./TimelineCard";
import { Flex } from "@mantine/core";


interface ExperienceTimelineProps {
    isSp: boolean;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ isSp }) => {

    return (
        <Flex direction={"column"}>
            <TimelineCard
                isSp={isSp}
                title={'Founder & CEO/AI Engineer'}
                affiliation={'Arrowheads, Inc.'}
                date={'Jul. 2022 - Present'}
                description={`Led development of BlitzMe from ideation to launch, leveraging user data to conduct joining-research with academic institution, validate core features. Scaled technical operations by recruiting and managing a cross-functional team of engineers, UX designers, and researchers, resulting in launch of BlitzMe with 10,000+ early adopters`}
                tags={['Product Management', 'Flutter', 'Next.js', 'Firebase', 'Django', 'PostgreSQL', 'Cloud SQL', 'Cloud Run', 'Cloud CDN']}
            />
            <TimelineCard
                isSp={isSp}
                title={'Equity Derivatives Trader'}
                affiliation={'J.P. Morgan Securities Asia Pacific Limited'}
                date={'Mar. 2021 - Jul. 2022'}
                description={`Focused on Japan single stock options market making for institutional clients. Automated 90% of the options market making operations by gathering unique dataset for non-listed options to train ML models.`}
                tags={['Python', 'TensorFlow', 'PyTorch', 'Docker']}
            />
            <TimelineCard
                isSp={isSp}
                title={'Hedge Fund Quant Analyst(Intern)'}
                affiliation={'GCI Asset Management'}
                date={'Jun. 2019 - Mar. 2021'}
                description={`Architected and deployed production-grade ML models for systematic trading, leveraging research in market microstructure and behavioral finance to generate consistent alpha across multiple asset classes`}
                tags={['Python', 'TensorFlow', 'PyTorch', 'Docker']}
            />

        </Flex>
    );
}

interface EducationTimelineProps {
    isSp: boolean;
}



export const EducationTimeline: React.FC<EducationTimelineProps> = ({ isSp }) => {

    return (
        <Flex direction={"column"}>
            <TimelineCard
                isSp={isSp}
                title={'Master of Engineering / Machine Learning'}
                affiliation={'The University of Tokyo'}
                date={'2019 - 2021'}
                description={`Majored in Machine Learning, focusing on research in applying deep learning to financial data. My master’s thesis was titled: 
                    "Stock Price Prediction Using Limit Order Book Data with Data Stratification and Multi-Phase Pre-training"`}
                tags={['Python', 'Deep Learning', 'Transfer Learning', 'Financial Engineering', 'Time Series Analysis']}
            />
            <TimelineCard
                isSp={isSp}
                title={'Bachelor of Interdisciplinary Science / Data Science'}
                affiliation={'The University of Tokyo'}
                date={'2014 - 2019'}
                description={`Bboying`}
                tags={['Python', 'Data Science', 'Thermodynamics','Mobile Apps', '#C', 'Unity']}
            />
        </Flex>
    );
}