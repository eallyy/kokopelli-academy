'use client'
import { Button } from '@/components/button';
import { Dialog, DialogBody, DialogTitle } from '@/components/dialog';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

export function VideoSupportModal() {
    let [isOpen, setIsOpen] = useState(false)

    const getBrowserInfo = () => {
        const userAgent = navigator.userAgent;
        let browser = 'Unknown';
        let version = 'Unknown';

        if (/chrome|crios/i.test(userAgent) && !/edge|edg|opr|opera/i.test(userAgent)) {
            browser = 'Chrome';
            version = userAgent.match(/(?:chrome|crios)\/(\d+)/i)?.[1] || 'Unknown';
        } else if (/safari/i.test(userAgent) && !/chrome|crios|edge|edg|opr|opera/i.test(userAgent)) {
            browser = 'Safari';
            version = userAgent.match(/version\/(\d+)/i)?.[1] || 'Unknown';
        } else if (/firefox/i.test(userAgent)) {
            browser = 'Firefox';
            version = userAgent.match(/firefox\/(\d+)/i)?.[1] || 'Unknown';
        } else if (/edg/i.test(userAgent)) {
            browser = 'Edge';
            version = userAgent.match(/edg\/(\d+)/i)?.[1] || 'Unknown';
        }

        let os = 'Unknown';
        if (/Mac/i.test(userAgent)) os = 'Apple Macintosh';
        else if (/Windows/i.test(userAgent)) os = 'Windows';
        else if (/iPhone/i.test(userAgent)) os = 'iPhone';
        else if (/Android/i.test(userAgent)) os = 'Android';

        return { os, browser, version };
    };

    const browserInfo = getBrowserInfo();

    return (
        <>
            <Button outline className="w-fit cursor-pointer" type="button" onClick={() => setIsOpen(true)}>
                <ExclamationTriangleIcon stroke="white" />
                Video Sorunu?
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
                <DialogTitle>Video Oynatma Sorunlarını Giderme</DialogTitle>
                <DialogBody className="text-sm/6 text-zinc-900 dark:text-white">
                    <p className="mt-4 text-xs">
                        Şu anda kullandığınız tarayıcı sürümü: <span className="text-sky-500">{browserInfo.os} - {browserInfo.browser} (v{browserInfo.version})</span>
                    </p>
                    <p className="mt-4">
                        Satın aldığınız değerli içeriği korumak için, videonun üzerinde adınız ve e-posta adresinizi içeren dinamik bir filigran görünebilir. Bu özellik, içeriğin yasa dışı şekilde paylaşılmasını önlemeye yardımcı olur ve kötü niyetli kişilerin tespit edilmesini sağlar.
                    </p>
                    <p className="mt-4">
                        İçerik güvenliği ve gizliliğiniz için tarayıcınızın en güncel sürümünü kullandığınızdan emin olun.
                    </p>
                    <p className="mt-4">
                        Farklı cihazlara göre tavsiye edilen tarayıcılar:
                    </p>
                    <p className="mt-4 font-bold">
                        Masaüstü / Dizüstü (Mac):
                    </p>
                    <p>
                        Safari’nin en güncel sürümünü kullanın.
                    </p>
                    <p className="mt-4 font-bold">
                        Masaüstü / Dizüstü (Windows):
                    </p>
                    <p>
                        Chrome’un en güncel sürümünü kullanın. İndirmek için: <a target="_blank" href="https://google.com/chrome" className="underline text-sky-500">google.com/chrome</a>
                    </p>
                    <p className="mt-4 font-bold">
                        iPhone (iOS):
                    </p>
                    <p>
                        Safari’nin en güncel sürümünü kullanın.
                    </p>
                    <p className="mt-4 font-bold">
                        Android telefon:
                    </p>
                    <p>
                        Chrome’un en güncel sürümünü kullanın (varsayılan tarayıcıdır).
                    </p>
                    <p className="text-xs">
                        *Bazı nadir durumlarda Chrome düzgün çalışmayabilir. Böyle bir durumda Firefox tarayıcısını indirmeniz önerilir.
                    </p>
                    <p className="mt-4 text-xs">
                        Hâlâ sorun yaşıyorsanız, lütfen <Link href="mailto:destek@kokopelliakademi.com" className="underline text-sky-500">destek@kokopelliakademi.com</Link> adresine mail atarak bize ulaşın. Sorununuzu en kısa zamanda çözüme kavuşturalım.
                    </p>
                </DialogBody>
            </Dialog>
        </>
    )
}
