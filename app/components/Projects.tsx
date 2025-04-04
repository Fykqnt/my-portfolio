
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
    isSp: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isSp }) => {

    return (
        <div className="flex flex-col gap-8">
            <ProjectCard
                isSp={isSp}
                isExit={false}
                title="Flare"
                affiliation="Personal Project"
                imageURL="./assets/flare_icon_logo.png"
                description="An AI Agent that builds a Flutter app from natural language, winning
                 Best Flutter + Firebase Award @ Google AI Agent Hackathon 💙🔥"
                tags={["Flutter", "Firebase", "Next.js", "Vertex AI", "Google AI Studio"]}
                link={"https://flare--flare-pilot.asia-east1.hosted.app/"}
            />
            <ProjectCard
                isSp={isSp}
                isExit={false}
                title="AI BUILDERS' COMMUNITY"
                affiliation="KERNEL"
                imageURL="./assets/abc.jpg"
                description="Established with the aim of accelerating social implementation through chemical reactions produced by the fusion of developers' craftsmanship and researchers' scientific mindsets."
                tags={["AI-Driven Development", "AI-Driven Research", "AI Agents"]}
                link={"https://ai-builders-community.connpass.com/"}
            />

            <ProjectCard
                isSp={isSp}
                isExit={false}
                title="BlitzMe"
                affiliation="Arrowheads, Inc."
                imageURL="./assets/blitzme_en.png"
                description="BlitzMe is a social media platform that allows to like the content from the users' smile."
                tags={['Product Management', 'Flutter', 'Next.js', 'Firebase', 'Django', 'PostgreSQL', 'Cloud SQL', 'Cloud Run', 'Cloud CDN', 'Revenue Cat']}
                link={"http://blitzme-app.com/en/"}
            />
           
        </div>
    );
}

export default Projects


