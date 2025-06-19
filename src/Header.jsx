import { UserRound, ShoppingBasket } from "lucide-react";
import { ReactSvg } from "./ReactSvg";
import { Button } from "./Button";

export default function App() {
  return (
    <header className="flex w-full items-center py-4">
      <ReactSvg size="32"></ReactSvg>
      <h1 className="inline-flex items-center gap-2 text-lg font-bold ml-2">
        React Journey
      </h1>
      <div className=" ml-auto flex items-center gap-4">
        <Button variant="ghost">
          <ShoppingBasket />
        </Button>
        <Button variant="ghost">
          <UserRound />
        </Button>
      </div>
    </header>
  );
}
