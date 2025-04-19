import WhatsNewSlider from '@/components/whats-new-slider';
import Link from 'next/link'
import Image from 'next/image'

export default function Dashboard() {
  return (
      <>
        <div className="pb-5">
          <h1 className="text-2xl font-bold">Ana Sayfa</h1>
          <p className="mt-2 max-w-4xl text-base text-slate-300 font-normal">
            Kokopelli Akademi'ye Hoşgeldiniz!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden shadow-sm rounded-lg border border-1 border-cyan-950">
              <div className="px-4 pt-4 text-base text-slate-300 font-semibold">Yeni Ne Var?</div>
              <WhatsNewSlider />
            </div>
            <div className="col-span-2 lg:col-span-1 overflow-hidden shadow-sm rounded-lg border border-cyan-950">
              <div className="px-4 pt-4 text-base text-slate-300 font-semibold">Son İzlediğin Video</div>

              <div className="p-4">
                <Link
                  href="#"
                  className="block aspect-video relative w-full overflow-hidden rounded-lg"
                >
                  {/* Background Image */}
                  <Image
                    src="/images/example-video-thumbnail.png"
                    alt="Last Watched Video"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />

                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-cyan-700 text-white text-xs font-semibold px-4 py-2 rounded-full shadow">
                    İzlemeye Devam Et
                  </span>

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="absolute left-4 bottom-4 text-white">
                    <h3 className="text-lg font-bold text-shadow-lg">
                      Ekipmanlarımızı Tanıyalım 
                    </h3>
                    <p className="text-base font-semibold text-zinc-300 text-shadow-lg">
                      Temel Barista Eğitimi
                    </p>
                  </div>

                  {/* Time badge */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-semibold px-4 py-2 rounded-full">
                    00:00:00
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 overflow-hidden shadow-sm rounded-lg border border-1 border-cyan-950">
              <div className="px-4 pt-4 text-base text-slate-300 font-semibold">İletişimde Kalın</div>
                <div className="p-4">
                    <Link
                      href="https://instagram.com/kokopellicoffeeco"
                      className="block aspect-video relative w-full overflow-hidden rounded-lg"
                    >
                      <Image
                        src="/images/community-banner.png"
                        alt="Last Watched Video"
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </Link>
                </div>
            </div>
        </div>
      </>
  );
}
