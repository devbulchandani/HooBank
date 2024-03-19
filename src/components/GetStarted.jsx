import styles from "../style"
import { arrowUp } from "../assets"


const GetStarted = () => {
    return (
        // Get Started Button Circe Div 
        <div className={`${styles.flexCenter} 
            w-[140px] h-[140px] 
            rounded-full bg-blue-gradient 
            cursor-pointer p-[2px] `}
        >
            {/* Text Container  */}
            <div className={`${styles.flexCenter}
                flex-col bg-primary 
                w-[100%] h-[100%] rounded-full`}
            >
                {/* First Line  */}
                <div className={`${styles.flexStart}
                    flex-row`}
                >
                    <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                        <span className="text-gradient">Get</span>
                    </p>
                    <img src={arrowUp} alt="arrowUP" className="
                        w-[23px] h-[23px] object-contain" />
                </div>

                {/* Second Line  */}
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-gradient">Started</span>
                </p>
            </div>
        </div>
    )
}

export default GetStarted
