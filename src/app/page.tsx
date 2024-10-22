import Navbar from "@/components/Navbar";
import Image from "next/image";
import Draggable from "react-draggable";
import Aboutus from "@/components/Aboutus";
import ClientTestimonials from "@/components/ClientTestimonial";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import Footer from "@/components/Footer";
import { Services } from "@/components/Services";

export default function Home(){
  return(
    <>
      <Navbar></Navbar>
      <div className="bg-black">
        <div className="text-gray-400 text-3xl pt-12 text-center md:text-justify mx-auto md:text-7xl md:pt-32 md:ml-44 font-semibold tracking-widest">
          NO TECH CHALLENGE IS TOO <br></br> <span className="text-yellow-400">BANANAS</span> FOR US
        </div>

        <div className="w-[85%] mt-24 h-[60vh] relative mx-auto bg-black">
          <Image
            src="/comptyping.jpg"
            alt="computer typing image"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>


      <div className="flex flex-wrap justify-around gap-8 p-4">
      <div className="w-32 h-32 overflow-hidden filter grayscale transition duration-300 hover:grayscale-0">
        <Image 
          src='/aws.png' 
          alt="AWS" 
          width={128} 
          height={128} 
          className="object-contain w-full h-full" 
        />
      </div>

      <div className="w-32 h-32 overflow-hidden filter grayscale transition duration-300 hover:grayscale-0 ">
        <Image 
          src='/google cloud.png' 
          alt="Google Cloud" 
          width={200} 
          height={200} 
          className="object-contain w-full h-full scale-120 mb-32" 
        />
      </div>

      <div className="w-32 h-32 overflow-hidden filter grayscale transition duration-300 hover:grayscale-0">
        <Image 
          src='/adobe.png' 
          alt="Adobe" 
          width={200} 
          height={200} 
          className="object-contain w-full h-full" 
        />
      </div>

      <div className="w-32 h-32 overflow-hidden filter grayscale transition duration-300 hover:grayscale-0">
        <Image 
          src='/SAP.png' 
          alt="SAP" 
          width={200} 
          height={200} 
          className="object-contain w-full h-full" 
        />
      </div>

      <div className="w-32 h-32 overflow-hidden filter grayscale transition duration-300 hover:grayscale-0">
        <Image 
          src='/salesforce.png' 
          alt="Salesforce" 
          width={200} 
          height={200} 
          className="object-contain w-full h-full" 
        />
      </div>
    </div>

    <Services></Services>

    <Aboutus></Aboutus>

    <ClientTestimonials></ClientTestimonials>

    <PortfolioCarousel></PortfolioCarousel>

    <Footer></Footer>

    </>
  )
}