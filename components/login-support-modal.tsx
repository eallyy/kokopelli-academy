'use client'
import { Button } from '@/components/button';
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

export function LoginSupportModal() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button className="w-fit" type="button" plain onClick={() => setIsOpen(true)}>
        <ExclamationTriangleIcon stroke="white" />
        Sorun mu yaşıyorsun?
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-hidden"
          >
            <span className="sr-only">Close</span>
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <DialogTitle>Giriş Yapma Sorunlarını Giderme</DialogTitle>
        <DialogBody className="text-sm/6 text-zinc-900 dark:text-white">
          <p className="mt-4">
            Güvenlik nedeniyle (<Link href="https://tr.wikipedia.org/wiki/Tekrarlama_sald%C4%B1r%C4%B1s%C4%B1" className="underline">tekrarlama saldırılarını</Link> önlemek için), cihazınızın saatinin doğru olması çok önemlidir. En iyi yöntem, saatinizi otomatik olarak ayarlanacak şekilde ayarlamaktır.
          </p>
          <p className="mt-4">
            Eğer saati manuel olarak ayarladıysanız, zamanla senkronizasyon bozulmuş olabilir ve bu da giriş sorunlarına neden olabilir.
          </p>
          <p className="mt-4">
            Bilgisayarınızın saat ayarını “otomatik” konuma getirin, bu sayfayı yenileyin ve tekrar deneyin.
          </p>
          <h3 className="mt-6 font-bold">Hâlâ giriş yapamıyor musunuz?</h3>
          <p className="mt-4">
            Hiç endişelenmeyin, size yardımcı olmaktan memnuniyet duyarız!
            Lütfen bizimle iletişime geçin: <Link href="mailto:destek@kokopelliakademi.com" className="underline">destek@kokopelliakademi.com</Link>
          </p>
        </DialogBody>
      </Dialog>
    </>
  )
}
