import React from "react";
import Teams from "./Contents/Teams";
import Infos from "./Contents/Infos";
import Intro from "./Contents/Intro";
import Growth from "./Contents/Growth";

function Home() {
  const infos = [
    {
      id: 1,
      title: "Marketing",
      description: "Focus on the best leads",
      url: "https://bridgesuite.ai/assets/image/about/1-about.png",
    },
    {
      id: 2,
      title: "Sales",
      description: "Break new sales record",
      url: "https://bridgesuite.ai/assets/image/about/2-about.png",
    },
    {
      id: 3,
      title: "Service Support",
      description: "Make your customer satisfied",
      url: "https://bridgesuite.ai/assets/image/about/support-1.png",
    },

    {
      id: 4,
      title: "Integration",
      description: "More visibility with ERP Integration",
      url: "https://bridgesuite.ai/assets/image/about/support.png",
    },
  ]

  const pin = [
    {
      id: 1,
      title: "Vista",
      description:
        "Elevate business with world-class solutions for remarkable sales growth.",
      url: "http://cdn.onlinewebfonts.com/svg/img_427010.png",
    },
    {
      id: 2,
      title: "Serve",
      description:
        "Hassle-free support platform for optimized Customer Service experience",
      url: "https://www.freepnglogos.com/uploads/server-png/server-icon-download-icons-17.png",
    },
    {
      id: 3,
      title: "Omni",
      description:
        "Tailored billing Solutions for efficient Accounts analytics anywhere, anytime.",
      url: "https://cdn-icons-png.flaticon.com/512/5431/5431243.png",
    },

    {
      id: 4,
      title: "Nexus",
      description:
        "Your Next-Gen Contact sharing for seamless Digital Networking.",
      url: "https://www.freeiconspng.com/thumbs/nexus-icon/nexus-icon-2.jpg",
    },
    {
      id: 5,
      title: "Pulse",
      description:
        "Get Effortless Shopping with intergrated Browseand responsive Support System.",
      url: "http://getdrawings.com/free-icon-bw/icon-for-support-5.png",
    },
    {
      id: 6,
      title: "Drive",
      description:
        "Optimized Delivery Operations form assignment to Real-Time Tracking",
      url: "https://pngimg.com/uploads/google_drive/google_drive_PNG6.png",
    },
  ]

  const growth = [
    {
      id: 1,
      title: "ang india",
      description: "security and serveillance",
      url: "https://bridgesuite.ai/assets/image/logo/ang-india.png",
    },
    {
      id: 2,
      title: "shivtara",
      description: "flour milling",
      url: "https://bridgesuite.ai/assets/image/logo/shivtara.png",
    },
    {
      id: 3,
      title: "mantra e-bikes",
      description: "electric vehicles",
      url: "https://bridgesuite.ai/assets/image/logo/mantra.png",
    },

    {
      id: 4,
      title: "blair remedies",
      description: "pharamaceutical",
      url: "https://bridgesuite.ai/assets/image/logo/blair.png",
    },
  ]

  return (
    <div>
      <div>
        <Intro />
      </div>
      <div className="bg-chose-10 text-white mt-6 p-2 md:mt-10">
      <div className="mt-10">
        <div className="flex justify-center mt-10">
          <h4 className="font-bold text-xl md:text-4xl">
            Discover what Bridge can do for you
          </h4>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {infos.map((data) => (
            <Teams
              title={data.title}
              image={data.url}
              desc={data.description}
            />
          ))}
        </div>
        </div>
      </div>

      <div className="bg-chose-10 text-white p-16 w-full">
      <div className="md:mt-40 md:h-96">
        <div className="flex flex-col justify-center items-center w-full -ml-14 md:ml-0 md:items-center md:w-full">
          <h4 className="font-bold text-xl md:text-4xl">
            Everything Your Business Needs in One Place
          </h4>
          <p className="mt-3 text-slate-300 ">
            Streamline business processes in a single platform.
          </p>
        </div>
        <div className="flex flex-col justify-center p-5 md:flex-row mt-16 md:justify-center gap-10">
          {pin.map((items) => (
            <Infos
              title={items.title}
              desc={items.description}
              Icon={items.url}
            />
          ))}
        </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-96 -ml-14 mt-20 md:mt-72 md:ml-0 md:w-full">
        <h4 className="font-bold text-xl ml-32 md:m-0 md:text-4xl ">Our <span className="text-chose-10">Bridge</span> has Benifited</h4>
        <div className="flex flex-col justify-center p-5 md:flex-row mt-16 md:justify-center gap-10">
        {
            growth.map((data)=>(
                <Growth
                title={data.title}
                desc={data.description}
                Icon={data.url}
                />
            ))
        }
        </div>
      </div>
    </div>
  );
}

export default Home;
