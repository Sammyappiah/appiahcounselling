import Image from "next/image";

const platforms = [
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/gb/podcast/appiah-counselling-podcast/id1863535119",
    logo: "/images/podcast/apple-podcasts.svg",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/2uDLEiwEVlGYZOmGLHI9Cr?si=85adb074c6e0484c",
    logo: "/images/podcast/spotify.svg",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@AppiahCounselling",
    logo: "/images/podcast/youtube.svg",
  },
  {
    name: "Amazon Music",
    href: "https://music.amazon.co.uk/podcasts/7322a3ce-4831-475e-9313-b5ff489884a4/appiah-counselling-podcast",
    logo: "/images/podcast/amazon-music.svg",
  },
  {
    name: "Pocket Casts",
    href: "https://pca.st/3gc1lf2g",
    logo: "/images/podcast/pocketcasts.svg",
  },
];

export default function PodcastPage() {
  return (
    <main className="min-h-screen bg-[#F4EFE7]">

      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center">

        <p className="text-[11px] uppercase tracking-[0.35em] text-[#C89A54]">
          Podcast
        </p>

        <div className="mx-auto mt-7 h-px w-24 bg-[#C89A54]" />

        <p className="mx-auto mt-8 max-w-xl text-[18px] leading-9 text-[#6d655e]">
          Counselling insights for everyday life. Thoughtful conversations that
          help you better understand yourself, your relationships and the human
          experience.
        </p>

      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">

          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-3xl
                border
                border-[#DDD3C5]
                bg-white
                py-8
                px-4
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#C89A54]
                hover:shadow-lg
              "
            >
              <Image
                src={platform.logo}
                alt={platform.name}
                width={46}
                height={46}
                className="mx-auto h-11 w-11 object-contain"
              />

              <p className="mt-5 text-[16px] font-medium text-[#171412]">
                {platform.name}
              </p>

            </a>
          ))}

        </div>

      </section>

    </main>
  );
}
