import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  sliderImage1,
  sliderImage2,
  sliderImage3,
  sliderImage4,
  sliderImage5,
} from "../../assets/images";
import { useRef, useState } from "react";
import AppendDotsSlider from "./AppendDotsSlider";
import CostumArrowSlider from "./CostumArrowSlider";

const imageSlider: string[] = [
  sliderImage1,
  sliderImage2,
  sliderImage3,
  sliderImage4,
  sliderImage5,
];

export default function Carousel() {
  let arrowRef = useRef<Slider | null>(null);
  const [toggleArrowSlider, setToggleArrowSlider] = useState(false);

  // Options for carousel
  let heightCarousel: string = "350";

  var settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    appendDots: (dots: any) => (
      <AppendDotsSlider dots={dots} />
    ),
  };

  const next = () => {
    arrowRef?.current?.slickNext();
  };

  const prev = () => {
    arrowRef?.current?.slickPrev();
  };

  return (
    <div className="relative" onMouseLeave={() => setToggleArrowSlider(false)}>
      <Slider
        {...settings}
        ref={(slider) => {
          arrowRef.current = slider;
        }}
        className={`rounded-2xl bg-black h-[${heightCarousel}px] w-full overflow-clip`}
      >
        {imageSlider.map((image, index) => (
          <div className={`bg-blue-700 h-[${heightCarousel}px]`} key={index}>
            <img onMouseOver={() => setToggleArrowSlider(true)}
              src={image}
              alt={`Slider Image ${index + 1}`}
              className="w-full h-full"
            />
          </div>
        ))}
      </Slider>
      <a
        href="#"
        className="text-[10px] bg-[#212121] text-white w-fit rounded-md absolute z-10 bottom-0 right-0 mr-2 mb-3 p-1"
      >
        Lihat Promo Lainnya
      </a>
      <CostumArrowSlider type="next" onClick={next} isActive={toggleArrowSlider} />
      <CostumArrowSlider type="prev" onClick={prev} isActive={toggleArrowSlider} />
    </div>
  );
}
