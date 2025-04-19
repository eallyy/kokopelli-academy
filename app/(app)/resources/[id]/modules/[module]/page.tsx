import { BackButton } from '@/components/back-button';
import Link from 'next/link'
import Image from 'next/image'
import ResourceDownloadCard from '@/components/resource-download-card';

export default function ResourceModule() {
  return (
      <>
        <div className="pb-5">
          <BackButton />
        </div>
        <div className="overflow-hidden shadow-sm rounded-lg border border-1 border-cyan-950"> 
            <div className="grid grid-cols-2 gap-4 p-4">
                <div className="col-span-2">
                    <div>
                        <Link
                          href="https://instagram.com/kokopellicoffeeco"
                          className="block aspect-[3/1] lg:aspect-[5/1] relative w-full overflow-hidden rounded-lg inset-shadow-2xl inset-shadow-white"
                        >
                          <Image
                            src="/images/1.png"
                            alt="Course Banner"
                            fill
                            className="object-cover"
                            sizes="100vw"
                          />
                        </Link>
                    </div>
                </div>
                <div className="col-span-2 p-2">
                  <h1 className="text-2xl font-bold mt-4">Temel Barista Eğitimi</h1>
                  <p className="mt-2 max-w-4xl text-base text-slate-300 font-normal">
                    Kaynaklar
                  </p>
                </div>
                <div className="col-span-2 lg:col-span-1 gap-2">
                    <ResourceDownloadCard title="Varyeteler Rehberi" href="#"/>
                </div>
                <div className="col-span-2 lg:col-span-1 gap-2">
                    <ResourceDownloadCard title="Çekirdekler Hakkında Genel Rehber" href="#"/>
                </div>
                <div className="col-span-2 lg:col-span-1 gap-2">
                    <ResourceDownloadCard title="Ekipmanların Özellikleri" href="#"/>
                </div>
            </div>
        </div>
      </>
  );
}
