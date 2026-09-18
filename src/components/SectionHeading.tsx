import { Reveal } from "./Reveal";
import { HibiscusOutline } from "./HibiscusOutline";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <Reveal
      className={
        align === "center"
          ? "relative mx-auto max-w-2xl text-center"
          : "relative max-w-2xl text-left"
      }
    >
      <HibiscusOutline
        className={`pointer-events-none absolute -top-9 size-28 text-accent/[0.09] sm:size-36 ${
          align === "center" ? "left-1/2 -translate-x-1/2" : "-left-7"
        }`}
      />
      <div className="relative">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="gradient-heading mt-3 font-script text-4xl leading-[1.15] sm:text-5xl md:text-[3.25rem]">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
