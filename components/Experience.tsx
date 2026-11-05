interface ExperienceProps {
  title: string;
  period: string | string[];
  bullets: string[];
  variant?: "bullets" | "paragraph";
}

export function Experience({
  title,
  period,
  bullets,
  variant = "bullets",
}: ExperienceProps) {
  const periods = Array.isArray(period) ? period : [period];

  return (
    <div className="print:break-inside-avoid">
      <h3 className="text-sm font-semibold">{title}</h3>
      {periods.map((line) => (
        <p
          key={line}
          className="text-sm font-medium text-muted-foreground mb-0.5"
        >
          {line}
        </p>
      ))}
      {bullets.length === 0 ? null : variant === "bullets" ? (
        <ul className="text-sm list-dash pl-3">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm">{bullets.join(" ")}</p>
      )}
    </div>
  );
}
