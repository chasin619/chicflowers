import Image from "next/image";

const GallerySection = () => {
  return (
    <div className="bg-purple lg:h-[220vh] mobile:h-[105vh] flex items-center justify-center mt-[-60px]">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-black">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-around z-0">
          <div className="flex flex-wrap gap-4">
            <Image
              src="/g-1.webp"
              alt="Event Image 1"
              width={380}
              height={380}
              className="z-10 lg:top-[-250px] lg:left-20 mobile:top-32 mobile:left-10 absolute rounded-3xl lg:w-96 mobile:w-48"
            />
            <Image
              src="/g-2.webp"
              alt="Event Image 2"
              width={300}
              height={300}
              className="mobile:hidden lg:flex z-10 absolute top-[100px] right-70 rounded-3xl"
            />
            <Image
              src="/g-3.webp"
              alt="Event Image 3"
              width={500}
              height={250}
              className="mobile:hidden lg:flex z-10 absolute top-[-260px] right-[-330px] rounded-3xl"
            />
            <Image
              src="/g-4.webp"
              alt="Event Image 3"
              width={320}
              height={320}
              className="mobile:hidden lg:flex z-10 absolute top-[-160px] left-[-350px] rounded-3xl"
            />
            <Image
              src="/g-5.webp"
              alt="Event Image 1"
              width={450}
              height={450}
              className="mobile:hidden lg:flex z-10 bottom-[-690px] left-[-380px] absolute rounded-3xl"
            />
            <Image
              src="/g-6.webp"
              alt="Event Image 2"
              width={300}
              height={300}
              className="z-10 absolute lg:bottom-[-490px] mobile:bottom-[-210px] lg:right-[520px] rounded-3xl lg:w-96 mobile:w-48"
            />
            <Image
              src="/g-7.webp"
              alt="Event Image 3"
              width={250}
              height={250}
              className="mobile:hidden lg:flex z-10 absolute bottom-[-590px] right-[160px] rounded-3xl"
            />
            <Image
              src="/g-8.webp"
              alt="Event Image 3"
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
