import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon, PlayIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

type CourseVideoCardProps = {
  title: string
  href: string
  img: string
  duration: string
  watched?: boolean
  active?: boolean
  progress: number
}

export default function CourseVideoCard({ href, title, img, duration, watched, active, progress }: CourseVideoCardProps) {
    return (
        <Link href={href}>
          <div
            className={clsx(
              "flex items-center gap-4 border rounded-lg bg-gradient-to-tr from-cyan-950 to-black p-4 transition duration-300 hover:-translate-y-1",
              active ? "border-sky-500" : "border-cyan-950"
            )}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video flex-[0_0_30%] max-w-[40%] rounded-md overflow-hidden border border-cyan-950">
              <Image
                src={img}
                alt="Lesson Thumbnail"
                fill
                className="object-cover"
                sizes="100vw"
              />

              {watched ? (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                  <CheckIcon className="w-8 h-8" />
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <PlayIcon className="w-8 h-8" />
                </div>
              )}

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black/30">
                <div className="h-full bg-sky-500" style={{ width: `${progress}%` }} />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2 min-w-0 flex-1">
              <h3
                className={clsx(
                  "text-xs font-semibold leading-tight break-words",
                  active ? "text-sky-500" : "text-white"
                )}
              >
                {title}
              </h3>
              <div
                className={clsx(
                  "px-2 py-0.5 w-fit h-fit rounded-3xl",
                  active ? "bg-sky-500" : "bg-white"
                )}
              >
                <p className="text-xs text-black">{duration}</p>
              </div>
            </div>
          </div>
        </Link>
    )
}
