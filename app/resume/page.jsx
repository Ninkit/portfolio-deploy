"use client"

import { 
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaFigma, 
    FaNodeJs,
 } from "react-icons/fa";

 import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

 //about data

 const about ={
    title: "About me",
    description: 
        "lorem ipsum dolor sit amar consectetur adipisicing elit. Eaque tenetur.",
        info: [
            {
                fieldName: "Name",
                fieldValue: "Adesina Opeyemi"
            },
            {
                fieldName: "Phone",
                fieldValue: "+(234) 90 218 23200"
            },
            {
                fieldName: "Experience",
                fieldValue: "3+ Years"
            },
            {
                fieldName: "Skype",
                fieldValue: "Adesina Opeyemi"
            },
            {
                fieldName: "Nationality",
                fieldValue: "Nigerian"
            },
            {
                fieldName: "Email",
                fieldValue: "Truesome92@gmail.com"
            },
            {
                fieldName: "Freelance",
                fieldValue: "Available"
            },
            {
                fieldName: "Languages",
                fieldValue: "English, Yoruba",
            },
        ]
 }

 // experience data

const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My experience",
    description: "lorem ipsum dolor sit amar consectetur adipisicing elit. Eaque tenetur.",
    items: [
        {
            company: "Damdam globals.",
            position: "Full Stack Developer",
            duration: "2024 - Present,"
        },
        {
            company: "Blended technologies.",
            position: "Full Stack Developer",
            duration: "January 2023 - april 2023,"
        },
        {
            company: "Megatek ICT academy",
            position: "Front-end developer tutor",
            duration: "2022 - 2023,"
        },
        {
            company: "Synergetics Global Systems",
            position: "Network engineer",
            duration: "2022 - 2023,"
        },
        {
            company: "Megatek ICT academy",
            position: "Front-end developer tutor",
            duration: "2022 - 2023,"
        },
        {
            company: "Synergetics Global Systems",
            position: "Network engineer",
            duration: "2022 - 2023,"
        }
    ]
}

//education data

const education = {
    icon: '/assets/resume/badge.svg',
    title: "My education",
    description: "lorem ipsum dolor sit amar consectetur adipisicing elit. Eaque tenetur.",
    items: [
        {
            institution: "Free code Camp",
            degree: "Full Stack Web Developer Bootcamp",
            duration: "2017 - Present,"
        },
        {
            institution: "Udemy online software development bootcamp",
            degree: "Full Stack Developer",
            duration: "January 2022 - july 2022,"
        },
        {
            institution: "University of Ilorin",
            degree: "Computer Engineering",
            duration: "January 2018 - October 2023,"
        },
        {
            institution: "Megatek ICT academy",
            degree: "Front-end developer tutor",
            duration: "January 2023 - July 2023,"
        },
        {
            institution: "Megatek ICT academy",
            degree: "Front-end developer tutor",
            duration: "January 2023 - July 2023,"
        },
        {
            institution: "Megatek ICT academy",
            degree: "Front-end developer tutor",
            duration: "January 2023 - July 2023,"
        },
        {
            institution: "Megatek ICT academy",
            degree: "Front-end developer tutor",
            duration: "January 2023 - July 2023,"
        },
        {
            institution: "Megatek ICT academy",
            degree: "Front-end developer tutor",
            duration: "January 2023 - July 2023,"
        }
    ]
}

//skills

const skills = {
    title: "My skills",
    description: "lorem ipsum dolor sit amar consectetur adipisicing elit. Eaque tenetur.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "Css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "html 5",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "html 5",
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; 

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1,
            transition: {delay: 2.4,
                duration: 0.4,
                ease: "easeIn"
            },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
        <div className="container mx-auto">
            <Tabs 
            defaultValue="experience" 
            className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-[380px] mx-auto xl:mx-8 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {experience.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index)=> {
                                        return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[268px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                            <div className="flex items-center gap-3">
                                                {/*dot*/}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.company}</p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* education */}
                    <TabsContent value="education" className="w-full">
                       <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {education.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                        <ul className="grid lg:grid-cols-2 gap-[30px]">
                            {education.items.map((item, index)=> {
                                return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                    <span className="text-accent">{item.duration}</span>
                                    <h3 className="text-xl max-w-[268px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                    <div className="flex items-center gap-3">
                                        {/*dot*/}
                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                         <p className="text-white/60">{item.institution}</p>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </ScrollArea>
                </div>
                    </TabsContent>
                    {/* skills */}
                    <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left py-10">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <h3 className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</h3>
                            </div>
                        </div>
                        <ul className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                            {skills.skillList.map((skill, index) => {
                                return <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </li>;
                            })}
                        </ul>
                    </TabsContent>
                    {/* about */}
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[38px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                        </div>
                        <ul className="grid grid-cols-1 xl:grid-cols-2 pt-5 gap-y-6 max-w-[628px] mx-auto xl:mx-0">
                            {about.info.map((item, index)=> {
                                return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                    <span className="text-white/60">{item.fieldName}</span>
                                    <span className="text-xl">{item.fieldValue}</span>
                                </li>
                            })}
                        </ul>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
        </motion.div>
    )
}

export default Resume