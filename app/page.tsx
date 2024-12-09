import MainPage from "@/components/main";
import FirstCarousel from "@/components/firstcarousel";
import Image from "next/image";
import SecondCarousel from "@/components/secondcarousel";
import Services from "@/components/services";
import Subscribe from "@/components/subscribe";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="">
      <MainPage/>
      <FirstCarousel/>
      <SecondCarousel/>
      <Services/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}
