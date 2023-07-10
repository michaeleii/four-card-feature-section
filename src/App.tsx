import FeatureCard from "./components/FeatureCard";

const features = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    icon: "/icon-supervisor.svg",
    color: "cyan",
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    icon: "/icon-team-builder.svg",
    color: "red",
    middle: true,
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    icon: "/icon-karma.svg",
    color: "orange",
    middle: true,
  },
  {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    icon: "/icon-calculator.svg",
    color: "blue",
  },
];

function App() {
  return (
    <section className="py-15 h-screen bg-[hsl(0_0%_98%)] p-10">
      <div className="mx-auto max-w-xl  text-center">
        <h2 className="mb-5 text-3xl font-light  leading-[3rem] text-heading xl:text-4xl xl:leading-[3rem]">
          Reliable, efficient delivery
          <br />
          <span className="font-bold ">Powered by Technology</span>
        </h2>
        <p className="mb-10 leading-relaxed text-content">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="mx-auto mt-10 grid grid-cols-1 gap-10 xl:grid-cols-3 xl:grid-rows-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default App;
