export const metadata = {
  title: 'Blog',
  description: 'Insights and articles from Appiah Counselling.',
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-zinc-400">
          Articles and insights coming soon.
        </p>
      </div>
    </main>
  )
}
