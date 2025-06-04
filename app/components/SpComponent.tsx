'use client'
import { Flex, Space, AspectRatio } from "@mantine/core"
import { InternalGuide, ExternalGuide } from "./Guide"
import SocialIcons from "./SocialIcons"
import { ExperienceTimeline, EducationTimeline } from 'app/components/Timeline'
import Projects from "./Projects"
import ResumeButton from "./ResumeButton"
import Link from 'next/link'

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
                    <h2 className='mb-4 text-xl text-white'>ML Engineer/ Entrepreneur </h2>
                    <h3 className='text-lg text-slate-400 w-3/4'>I love building products that reduce the entropy of the universe.</h3>
                </section>
            </div>
            <div className="mt-10">
                <SocialIcons />
            </div>
            <div className=' flex-grow overflow-y-auto'>
                <section id='about' className='py-20'>
                    <div className="text-lg text-white font-bold mb-8">ABOUT ME</div>
                    <div>
                                <p className="text-xl mb-3 text-slate-400">
                                    I was born in Japan, Kagawa Prefecture.
                                </p>
                                <p className='text-xl mb-3 text-slate-400'>
                                    I've been building AI software for <span className='text-white'>enterprises</span>, <span className='text-white'>startups</span>, and <span className='text-white'>my own company</span>.
                                    <br/>
                                    I'm also Passionate about implementing the concept of <span className='text-white'>"Maxwell's Demon"</span> in real-world.
                                </p>
                            
                                <p className='text-xl text-slate-400'>
                                Outside of building & hacking, I enjoy breakdancing, practicing Street Fighter 6, and spending time with my family. 
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
                <section id='publications'>
                    <div className="text-base text-white font-bold mb-7">SELECTED PUBLICATIONS & INVITED TALKS</div>
                    <div className='space-y-6'>
                    <Link href="" className="block publication-item transition duration-300 ease-in-out transform hover:bg-slate-800 hover:shadow-lg hover:scale-[1.02] rounded-2xl p-4">
                                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#5CE6D1]">Smile to Like: Effects of Facial Expression-Based Evaluation on Media Engagement and Emotional Self-Awareness
                                        <br/><i>(TOP10%)</i></h3>
                                        <p className="text-sm text-slate-400">ACM Symposium on Applied Perception (SAP2025)</p>
                                        <p className="text-sm text-slate-400 mt-1">Authors: Ryo Ohara, Fuyuki Matsubara and Takuji Narumi</p>
                                    </Link>
                                    <Link href="BlitzMe: A Social Media Platform Combining Smile Recognition and Human Computation for Positive Mood Enhancement" className="block publication-item transition duration-300 ease-in-out transform hover:bg-slate-800 hover:shadow-lg hover:scale-[1.02] rounded-2xl p-4">
                                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#5CE6D1]">BlitzMe: A Social Media Platform Combining Smile Recognition and Human
                                        Computation for Positive Mood Enhancement
                                        <br/><i>(Best Demonstration Paper Award 👑)</i></h3>
                                        <p className="text-sm text-slate-400">The Twelfth AAAI Conference on Human Computation and Crowdsourcing (HCOMP2024)</p>
                                        <p className="text-sm text-slate-400 mt-1">Authors: Fuyuki Matsubara</p>
                                    </Link>
                                    <Link href="https://sigfin.org/?plugin=attach&refer=026-12&openfile=12_SIG-FIN-26.pdf" className="block publication-item transition duration-300 ease-in-out transform hover:bg-slate-800 hover:shadow-lg hover:scale-[1.02] rounded-2xl p-4">
                                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#5CE6D1]">Stock Price Prediction Using Limit Order Book Data with Data Stratification and Multi-Phase Pre-training</h3>
                                        <p className="text-sm text-slate-400">JSAI SIG-FIN 2021</p>
                                        <p className="text-sm text-slate-400 mt-1">Authors: Fuyuki Matsubara, Kiyoshi Izumi and Hiroki Sakaji</p>
                                    </Link>
                                    
                                    <Link href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2020/0/JSAI2020_1K4ES205/_pdf/-char/ja" className="block publication-item transition duration-300 ease-in-out transform hover:bg-slate-800 hover:shadow-lg hover:scale-[1.02] rounded-2xl p-4">
                                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#5CE6D1]">Analysis of Value and Momentum Factors in Japanese Government Bond
                                        and Stock Index Using Machine Learning</h3>
                                        <p className="text-sm text-slate-400">JSAI 2020</p>
                                        <p className="text-sm text-slate-400 mt-1">Authors: Fuyuki Matsubara, Kiyoshi Izumi, Hiroki Sakaji and Hiroyasu Matsushima</p>
                                    </Link>

                                    <Link href="https://informatics.kanto-gakuin.ac.jp/faculty/yoshikawa/" className="block publication-item transition duration-300 ease-in-out transform hover:bg-slate-800 hover:shadow-lg hover:scale-[1.02] rounded-2xl p-4">
                                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#5CE6D1]">Human-Computer Interaction</h3>
                                        <p className="text-sm text-slate-400">Guest Lecturer at Kanto Gakuin University</p>
                                    </Link>
                    </div>
                </section>
                <section>
                    <div>
                        <p className='text-sm mb-10 text-slate-400 w-3/4'>
                            Loosely coded in <span className='text-white'>Cursor</span> by yours trully with. Built with <span className='text-white'>Next.js</span> and <span className='text-white'>TailWind CSS</span>, deployed with and <span className='text-white'>Vercel</span>.
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