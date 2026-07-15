'use client';

type CategoryBarProps = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export default function CategoryBar({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryBarProps) {
  return (
    <section className="py-10 border-y border-[#e3d8cb] bg-[#f7f3ed]">

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="overflow-x-auto">

          <div className="flex gap-3 min-w-max">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`h-[46px] px-6 rounded-full text-[0.72rem] tracking-[0.22em] uppercase whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#171412] text-white"
                    : "bg-white border border-[#ddd3c7] text-[#171412] hover:border-[#c89b4d]"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
