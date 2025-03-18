
import Card from "./Card";

export default function Balances() {
  return (
    <div>
    <div className="absolute left-[250px] top-[347px]">
      
      <h2 className="text-black font-semibold text-[16px] leading-[19px]">
        Balances
      </h2>

     

    </div>
    <div className="flex gap-4">
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
    </div>
  );
}
