import Preview from "@/components/Frame1/preview";
import SideBar from "@/components/Frame1/sidebar";
import ThemeSelector from "@/components/Frame1/themeSelector";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-1/5 border-2 h-screen">
          <SideBar />
        </div>
        <div className="w-4/5 border-2 px-7 py-2 flex flex-col gap-4">
          <div className="flex w-full h-fit justify-between items-center ">
            <p className="text-base font-semibold">Themes</p>
            <div className=" bg-slate-300 flex gap-2 p-2 items-center justify-center rounded-md">
              <p>Shivkant Dubey</p>
              <div className="w-6 h-6 rounded-full bg-slate-500"></div>
            </div>
          </div>
          <div className="rounded-lg w-full border-2 h-16 px-6 flex justify-between items-center">
            <p className="text-base font-medium">
              Apply a skin to your profile
            </p>
            <div className="flex gap-2">
              <Button variant="outline">+ Custom</Button>
              <Button>Save</Button>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-1/3">
              <ThemeSelector />
            </div>
            <div className="w-2/3 h-full">
              <Preview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
