import { Lottie } from "lottie-react";
import familyAnimation from '../assets/Lottie/Family.json'

const Family = () => {
    return (
        <div className="flex items-center justify-center">
            <Lottie src={familyAnimation} loop autoplay></Lottie>
        </div>
    );
};

export default Family;