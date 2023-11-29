import { useCoinContext } from "../CoinContext";

const CoinResult = () => {
  const {displayText} = useCoinContext();

  return (
    <div className="mb-4">
      <p className="text-2xl font-mono">{displayText}</p>
    </div>
  );
};

export default CoinResult;
