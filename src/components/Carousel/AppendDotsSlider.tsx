export default function AppendDotsSlider(props: any) {
  const { dots } = props;
  return (
    <div className="absolute bottom-0 w-full flex justify-start items-center pl-4 h-10 z-10">
      <ul className="flex justify-center items-center">
        {dots.map((dot: any, index: number) => (
          // can click on the dots to go to that slide
          <li key={index} className="mx-1">
            <button
              className={`w-2 h-2 rounded-full bg-white opacity-55 ${
                dot.props.className === "slick-active" ? "opacity-100" : ""
              }`}
            ></button>
          </li>
        ))}
      </ul>
    </div>

    // <div className="absolute bottom-0 w-full pl-4 h-10 z-10 bg-transparent">
    //   <ul className="flex justify-start items-center">
    //     {dots.map((dot: any, index: number) => (
    //       <li key={index} className="mx-1">
    //         {dot}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}
