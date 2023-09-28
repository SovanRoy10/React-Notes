export default function Colour(props) {
  const { color, textColor, bodyColor } = props;
  const capitalizedColor = color.charAt(0).toUpperCase() + color.slice(1);

  const buttonStyle = {
    backgroundColor: color,
    color: textColor,
  };

  const handleClick = () => {
    if (bodyColor) {
      bodyColor(color); 
    }
  };

  return (
    <button  style={buttonStyle} className="m-2 border-black drop-shadow-lg" onClick={handleClick}>
      {capitalizedColor}
    </button>
  );
}
