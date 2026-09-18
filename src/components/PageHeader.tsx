import { Reveal } from "./Reveal";
import { HibiscusOutline } from "./HibiscusOutline";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
};

export function PageHeader({ eyebrow, title, description, image, imageAlt }: Props) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt={imageAlt} className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/55 to-foreground/45" />
      </div>
      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-40 lg:px-8">
        <Reveal>
          <div className="relative">
            <HibiscusOutline className="pointer-events-none absolute -left-8 -top-16 size-40 text-accent/30 sm:size-48" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.28em] text-card/80">{eyebrow}</p>
              <h1 className="gradient-heading mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              {description ? (
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-card/90">{description}</p>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
