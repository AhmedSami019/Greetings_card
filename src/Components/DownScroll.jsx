import {Lottie} from "lottie-react";
import scrollData from "../assets/Lottie/ScrollDownArrow.json";

const DownScroll = () => {

  return (
    <div className="flex items-center justify-center">
      <Lottie src={scrollData} loop={true} autoplay className="w-24 h-24" />
    </div>
  );
};

export default DownScroll;
