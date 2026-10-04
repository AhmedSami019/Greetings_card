import { Lottie } from "lottie-react";
import babyAnimation from '../assets/Lottie/Baby.json'

const Baby = () => {
    return (
        <div className="flex items-center justify-center">
            <Lottie src={babyAnimation} loop autoplay></Lottie>
        </div>
    );
};

export default Baby;