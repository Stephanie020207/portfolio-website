import Link from "next/link";
import NextImage from "@/components/ui/NextImage";
import { Typography } from "@/components/ui/Typography";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative isolate min-h-screen overflow-hidden bg-ink pt-16"
    >
      <NextImage
        src="/images/dekor-about.svg"
        alt=""
        width={396}
        height={486}
        className="about-decoration pointer-events-none absolute top-0 right-0 z-0 h-auto w-48 opacity-60 sm:w-64 md:w-[22rem] min-[2560px]:w-[48rem]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-48 bg-[radial-gradient(ellipse_100%_100%_at_50%_100%,rgba(255,255,255,0.18)_0%,transparent_100%)] min-[2560px]:h-96" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-[1100px] grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2 md:gap-28 md:px-4 md:py-10 min-[2560px]:max-w-[2400px] min-[2560px]:gap-64 min-[2560px]:px-12">
        <div className="flex flex-col items-start">
          <NextImage
            src="/images/tag-html.svg"
            alt=""
            width={271}
            height={155}
            className="about-enter about-enter-1 mb-7 h-auto w-32 sm:w-40 md:w-48 min-[2560px]:mb-12 min-[2560px]:w-[38rem]"
          />

          <Typography
            as="p"
            font="mono"
            color="mist"
            size="small"
            className="about-enter about-enter-2 mb-3 min-[2560px]:mb-6 min-[2560px]:!text-2xl"
          >
            Fullstack Developer | Data Science Enthusiasts
          </Typography>

          <h1
            id="about-title"
            className="about-enter about-enter-3 mb-5 flex flex-wrap items-baseline tracking-[-0.06em]"
          >
            <Typography
              as="span"
              font="display"
              color="paper"
              size="heading-01"
              className="!text-[clamp(3.75rem,9vw,6.5rem)] !leading-[0.95] min-[2560px]:!text-[clamp(9rem,8vw,14rem)]"
            >
              Port
            </Typography>
            <Typography
              as="span"
              font="display"
              color="signal-blue"
              size="heading-01"
              className="italic !text-[clamp(3.75rem,9vw,6.5rem)] !leading-[0.95] min-[2560px]:!text-[clamp(9rem,8vw,14rem)]"
            >
              folio
            </Typography>
          </h1>

          <Typography
            font="editorial"
            color="mist"
            size="small"
            className="about-enter about-enter-4 mb-5 max-w-[450px] !leading-[1.45] min-[2560px]:mb-9 min-[2560px]:max-w-[920px] min-[2560px]:!text-[1.75rem] min-[2560px]:!leading-[1.5]"
          >
            An Information Systems IUP student at Institut Teknologi Sepuluh
            Nopember (ITS) with strong interest in Web Development and Data
            Science field. Experienced in developing and maintaining websites,
            and communicating technical concepts clearly.
          </Typography>

          <div className="about-enter about-enter-5 flex flex-wrap items-center gap-3">
            <Link
              href="/Work"
              className="rounded-full bg-signal-blue px-5 py-2.5 font-sans text-sm font-semibold text-paper transition-colors hover:bg-blue-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper min-[2560px]:px-10 min-[2560px]:py-5 min-[2560px]:text-2xl"
            >
              See Projects
            </Link>
            <Link
              href="/Contact"
              className="rounded-full border border-paper px-5 py-2.5 font-sans text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper min-[2560px]:px-10 min-[2560px]:py-5 min-[2560px]:text-2xl"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="about-photo-enter group relative z-0 mx-auto aspect-square w-full max-w-[22rem] rounded-lg shadow-[0_0_30px_rgba(255,255,255,0.35),0_0_70px_rgba(255,255,255,0.16)] transition-transform duration-500 ease-out hover:z-20 hover:scale-110 md:mx-0 md:justify-self-end min-[2560px]:max-w-[704px] min-[2560px]:rounded-2xl motion-reduce:transition-none motion-reduce:hover:scale-100">
          <NextImage
            src="/images/profile-photo.webp"
            alt="Portrait of Maria Stephanie Febryana Kristijanto"
            fill
            sizes="(max-width: 767px) 75vw, (min-width: 2560px) 704px, 352px"
            className="rounded-lg object-cover min-[2560px]:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
