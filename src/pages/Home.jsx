import React from "react";
// import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
// import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
// import ExploreMore from "../components/core/HomePage/ExploreMore";
// import { ReviewSlider } from "../components/common/ReviewSlider";


const Home = () =>{

    return(
        <div>
            
            {/* section 1 */}
            <div className="mt-10 max-w-maxContent relative mx-auto flex flex-col w-11/12 item-center text-white justify-between ">
                
                <Link to={"/signup"}>

                    {/* <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit ">
                        <div className="flex flex-row items-center gap-2 rounded-full px-2 text-[10px] md:text-[20px] md:px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 ">
                            <p>Become and Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div> */}
                    
                </Link>
            
                <div className="text-center text-4xl font-semibold mt-7">
                    Empower Your Future with 
                    <HighlightText text={" Coding Skills"} />
                </div>

                <div className="w-[90%] text-center text-lg font-bold text-richblack-300 mt-4 ">
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                </div>

                <div className="flex flex-row gap-7 mt-8 mx-auto">
                    <CTAButton active={true} linkto={"/signup"}> 
                        Learn More 
                    </CTAButton>

                    {/* <CTAButton active={false} linkto={"/login"} >
                        Book a Demo
                    </CTAButton> */}
                </div>

                <div className=" shadow-blue-200 mx-7 my-12  ">
                    <video className="box-shadow-class" muted loop autoPlay>
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>

                {/* code section 1 */}
                <div>
                    <CodeBlocks 
                    position={"lg:flex-row"} 
                    heading={<div className="text-4xl font-bold">Unlock your <HighlightText text="coding potential" /> with our online courses.</div>}  
                    subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                    ctabtn1={
                        {
                            btnText : "Try it yourself" ,
                            linkto : "/signup",
                            active : true ,
                        }
                    }
                    ctabtn2={
                        {
                            btnText : "Learn more" ,
                            linkto : "/login",
                            active : false ,
                        }
                    }
                    codeColor={"text-yellow-25"}
                    codeblock={
                        `<!DOCTYPE html>
                        <html>
                        <head><title>Example</title><linkrel="stylesheet"href="styles.css">
                        </head>
                        <body>
                        <h1><ahref="/">Header</a>
                        </h1>
                        <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
                        </nav>`
                    }  
                    backgroundGradient={<div className="codeblock1 absolute"></div>} 
                    />
                </div>

                {/* codesection2  */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                        <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                            Start 
                            <HighlightText text={" coding in seconds"} />
                        </div>
                        }
                        subHeading={
                        "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                        }
                        ctabtn1={{
                        btnText: "Continue Lesson",
                        link: "/signup",
                        active: true,
                        }}
                        ctabtn2={{
                        btnText: "Learn More",
                        link: "/signup",
                        active: false,
                        }}
                        codeColor={"text-white"}
                        codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                        backgroundGradient={<div className="codeblock2 absolute"></div>}
                    />
                </div>

                {/* <ExploreMore /> */}

            </div>

            {/* section 2 */}

                <div className="bg-pure-greys-5 text-richblack-700 ">
                    
                    {/* 3 cards and 2 btns */}
                    <div className="h-[25px] mx-auto">

                        <div className="w-11/12 max-w-maxContent flex flex-col mx-auto gap-5 ">

                            {/* 3 cards */}
                            <div className="h-[15px] ">
                                
                            </div>
                            
                            {/* btns */}
                            {/* <div className="flex mx-auto flex-row gap-7 text-white ">
                                <CTAButton linkto={"/signup"} active={true} > 
                                    <div className="flex items-center gap-2">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                    </div>
                                    
                                </CTAButton>
                                
                                <CTAButton linkto={"/signup"} active={false}>
                                    <div>
                                        Learn More
                                    </div>
                                </CTAButton>
                            </div> */}
                        </div>

                    </div>

                    {/* get the skill you need  for a job that is in demand */}
                    <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-7 ">
                        <div className="flex flex-col md:flex-row gap-5 mt-10">
                            <div className="font-semibold text-4xl ">
                                Get the skills you need for a <HighlightText text={"job that is in demand."} />
                            </div>
                            <div className="flex flex-col gap-10 width-[40%] items-start">
                                <div>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</div>
                                <CTAButton active={true} linkto={"/signup"}>
                                    <div>Learn More</div>
                                </CTAButton>
                            </div>
                        </div>

                        {/* time line section */}
                        <TimeLineSection />

                        {/* Learning Language Section */}
                        {/* <LearningLanguageSection /> */}

                    </div>

                </div>

            {/* section 3 */}

            <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between bg-richblue-900 gap-8 text-white">
                
                <InstructorSection />

                <h2 className="text-center text-4xl font-semibold mt-10 mb-10"> 
                        Review from other learners
                </h2>

                {/* review slider here */}
                {/* <ReviewSlider /> */}
                

            </div>

            {/* footer */}
            <Footer />
        </div>

    )
}

export default Home ;