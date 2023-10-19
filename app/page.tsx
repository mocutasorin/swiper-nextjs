import DemoSlider from "./_components/DemoSlider";
import dataSlider from "./_data/slider-data.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <DemoSlider data={dataSlider} />
    </main>
  );
}
