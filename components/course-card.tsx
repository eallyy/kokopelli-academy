'use client'
import Image from 'next/image';
import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/24/outline';

type CourseCardProps = {
  image: string
  alt: string
  href?: string
  locked?: boolean
}

export default function CourseCard({ image, alt, href, locked }: CourseCardProps) {
  const CardContent = (
    <div className="relative aspect-[5/8] w-full overflow-hidden rounded-lg shadow-lg group transition duration-300 hover:-translate-y-1">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
      />

      {/* Locked Overlay */}
      {locked && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 pointer-events-auto">
            <LockClosedIcon className="h-12 w-12" />
        </div>
      )}
    </div>
  )

  return locked || !href ? (
    <div className="pointer-events-none">{CardContent}</div>
  ) : (
    <Link href={href}>{CardContent}</Link>
  )
}

