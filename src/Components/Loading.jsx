import { Lottie } from 'lottie-react';
import loadingData from "../assets/Lottie/Loading.json"

const Loading = () => {
    return (
       <div className="flex items-center justify-center">
            <Lottie src={loadingData} loop autoplay></Lottie>
        </div>
    );
};

export default Loading;