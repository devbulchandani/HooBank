import styles from "../style"
import { discount, robot, } from "../assets"
import GetStarted from './GetStarted'

const Hero = () => {
    return (
        // Hero Section 
        <section id='home'
            className={`flex md:flex-row flex-col ${styles.padding}`}
        >
            {/* Hero Content Container (left side) */}
            <div className={`flex-1 ${styles.flexStart} flex-col 
                xl:px-0 sm:px-16 px-6`
            }>
                {/* Discount line on top */}
                <div
                    className="flex flex-row items-center
                    py-[6px] px-4 
                    bg-discount-gradient
                    rounded-[10px] mb-2"
                >
                    {/* Discount Logo */}
                    <img src={discount} alt="discount"
                        className="w-[32px]h-[32px]"
                    />
                    {/* Discount Content  */}
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white">20%</span> Discount For {" "}
                        <span className="text-white">1 month</span> Account
                    </p>
                </div>

                {/* Hero Big Text  */}
                <div className="flex flex-row justify-between items-center
                    w-full"
                >
                    {/* Hero Big Test Heading  */}
                    <h1 className="text-white
                        flex-1 font-poppins font-semibold 
                        ss:text-[72px]     ss:leading-[100px]  text-[52px] leading-[75px]"
                    >
                        The Next <br className="sm:block hidden" /> {" "}
                        <span className="text-gradient">Generation</span> <br />
                    </h1>

                    {/* Hero Get Started Button */}
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>

                {/* Hero Payment Method Heading  */}
                <h1 className="text-white
                        font-poppins font-semibold 
                        ss:text-[68px]     ss:leading-[100px]  
                        text-[52px] 
                        leading-[75px] w-full">
                    Payment Method
                </h1>

                {/* Hero Section Lower Paragraph */}
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}
                >
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
            </div>

            {/* Hero Section Robot Image  */}
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>

            {/* Get tarted in Bottom For Mobile Devices */}
            <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div>

        </section>
    )
}

export default Hero
