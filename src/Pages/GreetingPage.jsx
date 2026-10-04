import { useContext } from "react";
import DataContext from "../Context/DataContext";
import Family from "../Components/Family";
import Baby from "../Components/Baby";

const GreetingPage = () => {
  const { BabyName, FatherName, MotherName } = useContext(DataContext);

  console.log(BabyName, FatherName, MotherName);

  return (
    <div className="flex flex-col justify-center items-center mt-10 mx-5 text-center space-y-4">
      <section>
        <p className="bg-[#da6556] text-white font-semibold w-full text-center p-3 rounded-2xl mb-5">
          Greetings from Sami
        </p>
        <h2 className="text-3xl font-bold">Hello!</h2>
        <p className="text-4xl font-semibold">
          <span className="text-[#DA6556] font-extrabold">{FatherName} </span>{" "}
          and{" "}
          <span className="text-[#DA6556] font-extrabold">{MotherName} </span>
        </p>
        {/* <p className="text-xl">You are Welcome to born a New Baby Name <span className="text-[#DA6556] font-extrabold">{BabyName} </span></p> */}
      </section>

      {/* second section */}
      <section>
        <Family></Family>
      </section>

      {/* third section */}
      <section className="bg-linear-to-r from-[#5003C0] to-[#AB03A9] rounded-2xl">
        <div className="bg-[#F5EFE1] rounded-2xl m-0.5 p-5">
          <p>
            বাবা-মা হওয়ার জন্য আন্তরিক অভিনন্দন! 👶💕 আপনাদের ছোট্ট সোনামণি যেন
            আপনাদের জীবনে অফুরন্ত সুখ, ভালোবাসা ও অসংখ্য সুন্দর মুহূর্ত নিয়ে
            আসে। আপনাদের এই নতুন পরিবারটির জন্য রইল সারাজীবনের সুস্বাস্থ্য,
            আনন্দ ও ভালোবাসায় ভরা অসংখ্য সুন্দর স্মৃতির শুভকামনা। ❤️
          </p>
        </div>
      </section>

      {/* 4th section */}
      <section>
        <h3 className="text-3xl text-[#DA6556] font-extrabold">{BabyName}</h3>
        <p className="text-xl font-semibold">You are Welcome on this Earth 🌎</p>
        <Baby></Baby>
      </section>
    </div>
  );
};

export default GreetingPage;
