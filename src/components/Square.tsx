interface SquareProps {
  value?: string;
  onclick?: () => void;
}

const Square: React.FC<SquareProps> = (props) => {
  return (
    <div className="square" onClick={props.onclick}>
      {props.value}
    </div>
  );
};

export default Square;
