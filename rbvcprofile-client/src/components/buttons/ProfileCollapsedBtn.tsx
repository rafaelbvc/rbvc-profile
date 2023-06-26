import { useVisibilityContext } from "../../contexts/VisibilityContext";

const ProfileCollapsedBtn = (props) => {
  const { widthSVG, fillColor, onClick } = props;

  const {setPVisibilityState} = useVisibilityContext()

  console.log(onClick,"propopop")

  return (
    <button className="animate-bounce" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="down-arrow"
        width={widthSVG}
      >
        <g data-name="Layer 2">
          <g data-name="arrowhead-down">
            <path
              d="M17.37 12.39 12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"
              fill={fillColor}
            ></path>
            <path
              d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"
              fill={fillColor}
            ></path>
          </g>
        </g>
      </svg>
    </button>
  );
};

export default ProfileCollapsedBtn;
