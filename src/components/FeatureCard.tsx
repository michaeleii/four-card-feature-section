const variants: {
  [color: string]: string;
} = {
  cyan: "border-t-cyan-500",
  red: "border-t-red-500",
  orange: "border-t-amber-500",
  blue: "border-t-blue-500",
};

function FeatureCard({
  title,
  description,
  icon,
  color,
  middle,
}: {
  title: string;
  description: string;
  icon: string;
  color: keyof typeof variants;
  middle?: boolean;
}) {
  return (
    <div
      className={`border-t-4 ${
        variants[color]
      } row-span-2 max-w-sm rounded-b-lg bg-white p-8 drop-shadow-lg xl:first:row-start-2 xl:last:col-start-3 xl:last:row-start-2 ${
        middle ? "xl:col-start-2" : ""
      }`}
    >
      <h2 className="mb-3 text-2xl font-bold text-heading">{title}</h2>
      <p className="mb-10 leading-relaxed text-content">{description}</p>
      <img src={icon} alt={`${title} icon`} className="ml-auto" />
    </div>
  );
}
export default FeatureCard;
