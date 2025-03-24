'use client'
import { Flex, Space, AspectRatio } from "@mantine/core"
import { InternalGuide, ExternalGuide } from "./Guide"
import SocialIcons from "./SocialIcons"
import { ExperienceTimeline, EducationTimeline } from 'app/components/Timeline'
import ResumeButton from '../components/ResumeButton';
import Projects from "./Projects"

const PcComponent: React.FC = () => {
    return (
        <div className="mx-36 my-10 min-w-0">
            <div className='w-full'>
                <Flex direction={'row'} gap={200} className='h-full'>
                    <div className='w-2/5 h-full sticky top-0'>
                        <section className='pt-20'>
                            <div className="flex justify-center mb-8">
                                <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-white">
                                    <img 
                                        src="./assets/icon-transparent.png" 
                                        alt="Fuyuki Matsubara" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <h1 className="text-5xl mb-3 font-bold tracking-tighter text-white">
                                Fuyuki Matsubara
                            </h1>
                            <h2 className='mb-4 text-2xl text-white'>AI Engineer/ Entrepreneur</h2>
                            <h3 className='text-lg text-slate-400 w-3/4'>I love building products that reduce the entropy of the universe.</h3>

                            <div className='my-20'>
                                <InternalGuide title="ABOUT" id="#about" />
                                <Space h="20" />
                                <InternalGuide title="EXPERIENCE" id="#experience" />
                                <Space h="20" />
                                <InternalGuide title="EDUCATION" id="#education" />
                                <Space h="20" />
                                <InternalGuide title="PROJECTS" id="#projects" />
                                <Space h="20" />
                                <InternalGuide title="BLOG" id="#blog" />
                                <Space h="20" />
                            </div>
                            
                            <div className='mt-10'>
                                <SocialIcons />
                            </div>
                        </section>
                    </div>
                    <div className='w-3/5 flex-grow overflow-y-auto'>
                        <section id='about' className='py-20'>
                            <div>
                                <p className="text-xl mb-3 text-slate-400">
                                    <span className='text-white text-4xl mr-3 '>1996</span>, I was born in Japan, Kagawa Prefecture.
                                </p>
                                <p className='text-xl mb-3 text-slate-400'>
                                    I've been building AI software for <span className='text-white'>enterprises</span>, <span className='text-white'>startups</span>, and <span className='text-white'>my own company</span>, occasionally seeking comfort while continuously pushing the boundaries of my potential.
                                </p>
                            
                                <p className='text-xl text-slate-400'>
                                    Outside of building & hacking, I enjoy breakdancing, reading, and spending time with my family. 
                                </p>
                            </div>
                        </section>
                        <section id='experience'>
                            <div className='py-20'>
                                <ExperienceTimeline isSp={false} />
                                <Space h="20" />
                                <div>
                                    < ResumeButton />
                                    <Space h="20" />
                                </div>
                            </div>
                        </section>
                        <section id='education'>
                            <div className='py-20'>
                                <EducationTimeline isSp={false} />
                            </div>
                        </section>
                        <section id='projects'>
                            <div className='py-20'>
                                <Projects isSp={false} />
                            </div>
                        </section>
                        <section >
                            <div>
                                <p className='text-base mb-20 text-slate-400 w-3/4'>
                                    Loosely coded in <span className='text-white'>Cursor</span> by yours trully with. Built with <span className='text-white'>Next.js</span> and <span className='text-white'>Mantine UI</span>, and <span className='text-white'>TailWind CSS</span>, deployed with and <span className='text-white'>Vercel</span>.
                                </p>
                            </div>
                        </section>
                        <section >
                            <div className="w-full flex justify-end">
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
                </Flex>
            </div>
        </div>
    )
}

export default PcComponent