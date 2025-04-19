'use client'
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation'

export function BackButton() {
    const router = useRouter()

    return (<button
              type="button"
              onClick={() => router.back()}
              className="cursor-pointer rounded-full p-2 text-white shadow-xs bg-cyan-950 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <ArrowLeftIcon aria-hidden="true" className="size-4" />
            </button>)
}
