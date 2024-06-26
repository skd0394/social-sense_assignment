import { Button } from "@/components/ui/button";
import Frame1 from "./frame1/page";
import Frame2 from "./frame2/page";

export default function Home() {
  return (
    <>
      {/* <Frame1/> */}
      {/* <Frame2/> */}
      <div className="w-full h-screen flex justify-center items-center gap-20">
        <a href="/frame1">
          <Button>Frame1</Button>
        </a>
        <a href="/frame2">
          <Button>frame2</Button>
        </a>
      </div>
    </>
  );
}
