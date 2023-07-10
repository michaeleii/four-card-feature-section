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
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    icon: "/icon-karma.svg",
    color: "orange",
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
    <section className="bg-[hsl(0_0%_98%)] px-5 py-10">
      <div className="text-center">
        <h2 className="mb-5 text-3xl">
          Reliable, efficient delivery
          <br />
          <span className="font-bold">Powered by Technology</span>
        </h2>
        <p className="mb-10">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {features.map((feature) => (
          <FeatureCard {...feature} />
        ))}
      </div>
    </section>
  );
}
export default App;
