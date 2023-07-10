const variants: {
  [color: string]: string;
} = {
  cyan: "border-t-cyan-500",
  red: "border-t-red-500",
  orange: "border-t-orange-500",
  blue: "border-t-blue-500",
};

function FeatureCard({
  title,
  description,
  icon,
  color,
}: {
  title: string;
  description: string;
  icon: string;
  color: keyof typeof variants;
}) {
  return (
    <div
      className={`border-t-4 ${variants[color]} rounded-xl bg-white p-5 drop-shadow-md`}
    >
      <h2 className="mb-3 text-xl font-bold">{title}</h2>
      <p className="mb-10">{description}</p>
      <img src={icon} alt={`${title} icon`} className="ml-auto" />
    </div>
  );
}
export default FeatureCard;
