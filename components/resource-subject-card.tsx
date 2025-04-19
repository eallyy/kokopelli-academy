import Link from 'next/link';

type ResourceCardProps = {
  title: string
  sources: number
  href: string
}

export default function ResourceSubjectCard({ title, href, sources }: ResourceCardProps) {
  return (
    <Link href={href} className="block">
      <div className="p-4 shadow-sm rounded-lg border border-1 border-cyan-950 bg-gradient-to-tr from-cyan-950 to-black transition duration-300 hover:-translate-y-1">
        <h2 className="font-semibold text-lg pb-2">{title}</h2>
        <div className="px-3 py-1.5 bg-zinc-700 w-fit h-fit rounded-3xl">
          <p className="text-xs text-white">{sources} Kaynak</p>
        </div>
      </div>
    </Link>
  )
}

