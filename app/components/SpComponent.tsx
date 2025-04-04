'use client'
import { Flex, Space, AspectRatio } from "@mantine/core"
import { InternalGuide, ExternalGuide } from "./Guide"
import SocialIcons from "./SocialIcons"
import { ExperienceTimeline, EducationTimeline } from 'app/components/Timeline'
import Projects from "./Projects"
import ResumeButton from "./ResumeButton"

const SpComponent: React.FC = () => {
    return (
        <div className='mx-5'>
            <div className='h-full'>
                <section className='pt-10'>
                <div className="flex justify-center mb-8">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white">
                                    <img 
                                        src="./assets/icon-transparent.png" 
                                        alt="Fuyuki Matsubara" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                    <h1 className="text-4xl mb-3 font-bold tracking-tighter text-white">
                        Fuyuki Matsubara
                    </h1>
                    <h2 className='mb-4 text-xl text-white'>AI Engineer/ Entrepreneur </h2>
                    <h3 className='text-lg text-slate-400 w-3/4'>I love building products that reduce the entropy of the universe.</h3>
                </section>
            </div>
            <div className="mt-10">
                <SocialIcons />
            </div>
            <div className=' flex-grow overflow-y-auto'>
                <section id='about' className='py-20'>
                    <div className="text-lg text-white font-bold mb-8">ABOUT</div>
                    <div>
                                <p className="text-xl mb-3 text-slate-400">
                                    I was born in Japan, Kagawa Prefecture.
                                </p>
                                <p className='text-xl mb-3 text-slate-400'>
                                    I’ve been building AI software for <span className='text-white'>enterprises</span>, <span className='text-white'>startups</span>, and <span className='text-white'>my own company</span>, occasionally seeking comfort while continuously pushing the boundaries of my potential.
                                </p>
                            
                                <p className='text-xl text-slate-400'>
                                    Outside of building & hacking, I enjoy breakdancing, reading, and spending time with my family. 
                                </p>                        
                    </div>
                </section>
                <section id='experience'>
                    <div className="text-base text-white font-bold mb-10">EXPERIENCE</div>
                    <div className=''>
                        <ExperienceTimeline isSp={true} />
                        <ResumeButton />
                        <Space h="40" />
                    </div>
                </section>
                <section id='education'>
                    <div className="text-base text-white font-bold mb-7">EDUCATION</div>
                    <div className=''>
                        <EducationTimeline isSp={true} />
                    </div>
                </section>
                <section id='projects'>
                    <div className="text-base text-white font-bold mb-7">PROJECTS</div>
                    <div className=''>
                        <Projects isSp={true} />
                    </div>
                </section>
                <section >
                    <div>
                        <p className='text-sm mb-10 text-slate-400 w-3/4'>
                            Loosely coded in <span className='text-white'>Cursor</span> by yours trully with. Built with <span className='text-white'>Next.js</span> and <span className='text-white'>Mantine UI</span>, and <span className='text-white'>TailWind CSS</span>, deployed with and <span className='text-white'>Vercel</span>.
                        </p>
                    </div>
                </section>
                <section>
                    <div className="w-full flex justify-end mb-10">
                        <div className="w-1/4">
                            <AspectRatio ratio={1000 / 900} maw={200} >
                                <img
                                    src={'./assets/icon-transparent.png'}
                                    alt="project image"
                                />
                            </AspectRatio>
                        </div>
                    </div>
                </section>
            </div>
        </div >
    )
}

export default SpComponent