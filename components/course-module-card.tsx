import Image from 'next/image';
import Link from 'next/link';

type CourseModuleCardProps = {
  title: string
  href: string
  img: string
  desc: string
  sources: number
}

export default function CourseModuleCard({ title, desc, img, sources, href }: CourseModuleCardProps) {
    return (
    <Link href={href}>
      <div className="flex items-center gap-4 border border-cyan-950 rounded-lg bg-gradient-to-tr from-cyan-950 to-black p-4">
        <div className="relative w-32 aspect-video rounded-md overflow-hidden shrink-0">
          <Image
            src={img}
            alt="Lesson Thumbnail"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-md font-semibold">{title}</h3>
          <p className="text-xs font-normal text-zinc-500 py-2">
            {desc}
          </p>
          <div className="px-3 py-1.5 bg-zinc-700 w-fit h-fit rounded-3xl">
            <p className="text-xs text-white">{sources} Kaynak</p>
          </div>
        </div>
      </div>
    </Link>
    )
}
