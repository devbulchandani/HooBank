import { apple, bill, google } from "../assets"
import styles, { layout } from "../style"

const Billing = () => {
    return (
        // Billing Section 
        <section id="product" className={`${layout.sectionReverse}`}>
            {/* Billing Section Image on left  */}
            <div className={`${layout.sectionImgReverse}`}>
                <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

                {/* Background Gradient for image  */}
                <div className="absolute z-[3] -left-0.5 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
                <div className="absolute z-[0] -left-0.5 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
            </div>

            {/* Rigth Side Text of billing section  */}
            <div className={`${layout.sectionInfo}`}>
                {/* Heading on top */}
                <h2 className={`${styles.heading2}`}>
                    Easily control your <br className="sm:block hidden" /> billing & invoicing.
                </h2>

                {/* Paragraph */}
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                </p>

                {/* Google and Apple buttons  */}
                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    {/* Apple Store  */}
                    <img src={apple} alt="apple store" className="w-[128px] h-[42px] object-contain m-5 cursor-pointer" />

                    {/* Google Play  */}
                    <img src={google} alt="google play" className="w-[128px] h-[42px] object-contain m-5 cursor-pointer" />
                </div>
            </div>


        </section>
    )
}

export default Billing
