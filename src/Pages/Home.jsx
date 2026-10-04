import { useContext } from "react";
import myPic from "../assets/PXL_20260702_162334271~2.jpg";
import DataContext from "../Context/DataContext";
import DownScroll from "../Components/DownScroll";
import NameForm from "../Components/NameForm";

const Home = () => {
  const { name } = useContext(DataContext);
  console.log(name);

  return (
    <div className="min-h-screen bg-gray-50 px-2 py-10">
      {/* Hero Section */}
      <section className="mx-auto flex flex-col items-center justify-center gap-5 rounded-2xl bg-[#6c63ff] py-10 px-5">
        <h2 className="urbanist text-center text-3xl font-bold text-white">
          Welcome to Sami's Hospitality
        </h2>

        <div className="avatar">
          <div className="w-24 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
            <img src={myPic} alt="Sami" />
          </div>
        </div>
      </section>

      {/* Content below hero */}
      <section className="mx-auto mt-10 space-y-3 max-w-3xl">
        <h3 className="text-xl text-center font-semibold">Please fill this form ☺️</h3>
        <DownScroll />
        <NameForm></NameForm>
      </section>
    </div>
  );
};

export default Home;
