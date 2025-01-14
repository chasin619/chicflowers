import Image from "next/image";

const GallerySection = () => {
  return (
    <div className="bg-purple lg:h-[220vh] mobile:h-[105vh] flex items-center justify-center mt-[-60px]">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-black">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-around z-0">
          <div className="flex flex-wrap gap-4">
            <Image
              src="/g-1.png"
              alt="Event Image 1"
              width={380}
              height={200}
              unoptimized
              className="mobile:hidden lg:flex z-10 absolute top-[-320px] left-[115px] rounded-3xl h-[550px] object-cover"
            />
            <Image
              src="/studio-3.webp"
              alt="Event Image 2"
              width={300}
              height={300}
              className="mobile:hidden lg:flex z-10 absolute top-[-250px] right-70 rounded-3xl"
            />
            <Image
              src="/g-3.png"
              alt="Event Image 3"
              width={300}
              height={250}
              className="mobile:hidden lg:flex z-10 absolute top-[-300px] right-[-130px] rounded-3xl h-[450px]"
            />
            <Image
              src="/g-4.webp"
              alt="Event Image 44"
              width={320}
              height={320}
              className="mobile:hidden lg:flex z-10 absolute top-[-160px] left-[-350px] rounded-3xl"
            />
            <Image
              src="/g-5.jpeg"
              alt="Event Image 5"
              width={450}
              height={450}
              className="mobile:hidden lg:flex z-10 bottom-[-690px] left-[-280px] absolute rounded-3xl h-[550px]"
            />
            <Image
              src="/g-6.jpg"
              alt="Event Image 6"
              width={300}
              height={300}
              unoptimized
              className="mobile:hidden lg:flex z-10 bottom-[-690px] left-[320px] absolute rounded-3xl w-96 h-[550px] object-cover"
            />
            <Image
              src="/g-7.jpg"
              alt="Event Image 7"
              width={300}
              height={250}
              className="mobile:hidden lg:flex z-10 absolute bottom-[-590px] right-[160px] rounded-3xl h-[450px]"
            />
            <Image
              src="/g-8.jpeg"
              alt="Event Image 8"
              width={350}
              height={350}
              className="mobile:hidden lg:flex z-10 absolute bottom-[-490px] right-[-300px] rounded-3xl"
            />
          </div>
        </div>

        <div className="relative z-10 text-center mobile:w-[100vw] lg:w-auto">
          <h1 className="mobile:text-3xl lg:text-7xl font-semibold mt-80">
            WELL-CRAFTED DESIGN ACROSS THE GLOBE.
          </h1>
          <p className="mobile:text-lg lg:text-xl mb-6">
            From weddings and mitzvahs to galas and brand launches, Chic brings
            well-crafted design to the globe, setting the trend for events
            worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
