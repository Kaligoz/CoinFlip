import { useCoinContext } from "../CoinContext";

const FlipCoin = () => {
  const { setCoinResult, setDisplayText } = useCoinContext();

  const handleClick = () => {
    const a = Math.floor(Math.random() * 2);
    setDisplayText(a === 1 ? "heads" : "tails");
    setCoinResult(a);
  };

  return (
    <button
      onClick={handleClick}
      className="text-2xl font-bold border border-solid border-black px-4 py-1 rounded-2xl font-mono"
    >
      Click me
    </button>
  );
};

export default FlipCoin;
