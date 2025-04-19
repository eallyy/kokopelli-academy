import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

type ResourceCardProps = {
  title: string
  href: string
}

export default function ResourceDownloadCard({ title, href }: ResourceCardProps) {
  return (
    <a href={href} className="block" download>
      <div className="p-2 gap-2 shadow-sm rounded-lg border border-1 border-cyan-950 bg-gradient-to-tr from-cyan-950 to-black transition duration-300 hover:-translate-y-1 flex justify-between items-center">
        <h2 className="font-semibold text-sm">{title}</h2>
        <ArrowDownTrayIcon className="w-4 h-4" />
      </div>
    </a>
  )
}

