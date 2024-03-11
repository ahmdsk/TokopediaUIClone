import chevronIcon from "../../assets/icons/chevron.svg";
import { useSpring, animated } from "react-spring";

interface Props {
  onClick: () => void;
  type: "next" | "prev";
  isActive?: boolean;
}

export default function CostumArrowSlider(props: Props) {
  const animationNext = useSpring({
    opacity: props.isActive ? 1 : 0,
    transform: props.isActive
      ? "translateX(100%)"
      : "translateX(0%)",
  });

  const animationPrev = useSpring({
    opacity: props.isActive ? 1 : 0,
    transform: props.isActive
      ? "translateX(-100%)"
      : "translateX(0%)",
  });

  return (
    <div className="relative">
      <animated.div
        style={props.type === "next" ? animationNext : animationPrev}
        className={`rounded-full bg-white shadow-md w-10 h-10 absolute z-10 cursor-pointer ${
          props.type === "next"
            ? "right-5 bottom-[130px]"
            : "left-5 bottom-[130px]"
        }`}
        onClick={props.onClick}
      >
        <img
          src={chevronIcon}
          className={`w-full transform ${
            props.type === "next" ? "rotate-90" : "-rotate-90"
          }`}
          alt={props.type === "next" ? "Next" : "Prev"}
        />
      </animated.div>
    </div>
  );
}
