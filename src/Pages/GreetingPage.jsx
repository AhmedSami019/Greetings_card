import { useRef } from "react";
import Family from "../Components/Family";
import Baby from "../Components/Baby";

const GreetingPage = () => {

  const savedData = localStorage.getItem("nameData");

  const nameData = savedData ? JSON.parse(savedData) : null;
  // to control the modal
  const noRef = useRef(null);
  const yesRef = useRef(null);

  return (
    <div className="flex flex-col justify-center items-center my-10 mx-5 text-center space-y-4">
      <section>
        <p className="bg-[#da6556] text-white font-semibold w-full text-center p-3 rounded-2xl mb-5">
          Greetings from Sami
        </p>
        <h2 className="text-3xl font-bold">Hello!</h2>
        <p className="text-4xl font-semibold">
          <span className="text-[#DA6556] font-extrabold">
            {nameData ? nameData.father : "Father"}{" "}
          </span>{" "}
          and{" "}
          <span className="text-[#DA6556] font-extrabold">
            {nameData ? nameData.mother : "Mother"}{" "}
          </span>
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
          <p className="hind-siliguri font-medium">
            বাবা-মা হওয়ার জন্য আন্তরিক অভিনন্দন! 👶💕 আপনাদের ছোট্ট সোনামণি যেন
            আপনাদের জীবনে অফুরন্ত সুখ, ভালোবাসা ও অসংখ্য সুন্দর মুহূর্ত নিয়ে
            আসে। আপনাদের এই নতুন পরিবারটির জন্য রইল সারাজীবনের সুস্বাস্থ্য,
            আনন্দ ও ভালোবাসায় ভরা অসংখ্য সুন্দর স্মৃতির শুভকামনা। ❤️
          </p>
        </div>
      </section>

      {/* 4th section */}
      <section>
        <h3 className="text-3xl text-[#DA6556] font-extrabold">
          {nameData ? nameData.baby : "Baby"}
        </h3>
        <p className="text-xl font-semibold">
          You are Welcome on this Earth 🌎
        </p>
        <Baby></Baby>
        <p className="hind-siliguri text-xl font-semibold mb-5">
          পরিবার এর সকলের সুস্থতা কামনা করছি{" "}
        </p>
        <div className="divider"></div>
        <div>
          <h2 className="text-2xl font-bold">Are you impressed</h2>
          <div className="flex items-center justify-center gap-5 mt-4">
            <button onClick={() => noRef.current.showModal()} className="btn">
              No
            </button>
            <button
              onClick={() => yesRef.current.showModal()}
              className="btn btn-primary"
            >
              Yes
            </button>
          </div>
        </div>
      </section>

      {/* modal section */}
      <section>
        <dialog ref={noRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box hind-siliguri">
            <h3 className="font-bold text-lg">
              পাগলামি করে লাভ নাই impress হইতেই হবে 😁
            </h3>
            <p className="py-4">
              ভালোই ভালোই Yes এ click করেন নাইলে কিন্তু খবর আছে । <br />
              পরে কিন্তু বইলেন না আমি আগে কেন জানাই নাই !
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <dialog ref={yesRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box hind-siliguri">
            <h3 className="font-bold text-lg">
              {" "}
              <span className="text-[#DA6556]">ধন্যবাদ</span> আপনাকে 😊
            </h3>
            <p className="py-4">
              তবে ভাগ্য ভালো আপনি no select করেন নাই। <br /> করলে কিন্তু কাহিনী
              হয়ে যেত <br /> whatever now You can send{" "}
              <span className="text-[#DA6556] font-semibold">Message</span> to
              me!
            </p>
            <div className="modal-action">
              <form
                className="flex items-center justify-center w-full"
                method="dialog"
              >
                <button className="btn">Close</button>
                <button
                  onClick={() => {
                    window.location.href =
                      "https://www.facebook.com/ahmedsami019/";
                  }}
                  className="btn bg-[#3077d4] text-white border-[#005fd8] mx-2"
                >
                  <svg
                    aria-label="Facebook logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="white"
                      d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
                    ></path>
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </section>
    </div>
  );
};

export default GreetingPage;
