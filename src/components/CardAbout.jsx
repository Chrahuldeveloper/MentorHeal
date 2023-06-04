import ayush from "../assets/images/ayush.jpg";

const CardAbout = () => {
  const data = [
    {
      Name: "Ayush Kulkarni",
      Position: "CEO & Founder",
      Image: ayush,
    },
    {
      Name: "Ayush Kulkarni",
      Position: "CEO & Founder",
      Image: ayush,
    },
    {
      Name: "Ayush Kulkarni",
      Position: "CEO & Founder",
      Image: ayush,
    },
    {
      Name: "Ayush Kulkarni",
      Position: "CEO & Founder",
      Image: ayush,
    },
    {
      Name: "Ayush Kulkarni",
      Position: "CEO & Founder",
      Image: ayush,
    },
    {
      Name: "Ayush Kulkarni",
      Position: "CEO & Founder",
      Image: ayush,
    },
  ];

  return (
    <div className="flex flex-col m-8 items-center justify-center">
      <div className="py-8">
        <h1 className="font-bold text-4xl lg:text-5xl text-[#00b8d3]">
          OUR TEAM
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((_, index) => {
          return (
            <div
              key={index}
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={_.Image}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  {_.Name}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {_.Position}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardAbout;
