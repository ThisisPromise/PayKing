
import Card from "./Card";

export default function Balances() {
  return (
    <div className="w-full">
      <h2 className="text-black font-semibold text-[16px] leading-[19px] mb-2">
        Balances
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
