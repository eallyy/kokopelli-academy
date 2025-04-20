import { BackButton } from '@/components/back-button';
import Image from 'next/image';
import Link from 'next/link';
import { PlayIcon } from '@heroicons/react/24/solid';
import CourseModuleCard from '@/components/course-module-card';

export default function Course() {
  return (
      <>
        <div className="pb-5">
          <BackButton />
          <h1 className="text-2xl font-bold mt-4">Eğitimler</h1>
        </div>
        <div className="overflow-hidden shadow-sm rounded-lg border border-1 border-cyan-950"> 
            <div className="grid grid-cols-3 gap-4 p-4">
                <div className="col-span-3">
                    <div className="relative w-full overflow-hidden rounded-lg isolate lg:border-0 border-1 border-cyan-950 py-4">
                      <Image
                        src="/images/course-3-progress-banner.png"
                        alt="Course Banner"
                        fill
                        className="hidden lg:block object-cover z-0 inset-shadow-2xl inset-shadow-white"
                        sizes="100vw"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950 via-black/30 to-transparent z-10" />

                      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 px-8 py-6 text-white">

                        <div className="space-y-4">
                          <h2 className="text-2xl font-bold text-shadow-lg">Temel Barista Eğitimi</h2>

                          <div className="flex items-center gap-4 drop-shadow-lg mb-8">
                            <div className="bg-white text-black text-xs font-semibold rounded-full px-4 py-1">
                              56/69 ders
                            </div>
                            <div className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden drop-shadow-lg">
                              <div className="h-full bg-sky-500 w-[82%] rounded-full"></div>
                            </div>
                            <span className="text-sm font-medium">82%</span>
                          </div>

                          {/* Video card and button */}
                          <Link href="/courses/1/modules/1/lessons/1">
                              <div className="flex items-center gap-4 drop-shadow-lg">
                                <div className="relative aspect-video w-32 rounded-md overflow-hidden">
                                  <Image
                                    src="/images/example-video-thumbnail.png"
                                    alt="Lesson Thumbnail"
                                    fill
                                    className="object-cover"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <PlayIcon className="h-5 w-5 drop-shadow-lg" />
                                    </div>
                                  </div>
                                  <div className="absolute bottom-2 right-2 text-4xl font-extrabold text-white/50">4</div>
                                </div>

                                <div className="flex flex-col">
                                  <p className="text-sm text-shadow-lg">Kahvenin Doğuşu: Etiyopya Efsaneleri ve Gerçekler</p>
                                  <div className="w-fit mt-1 flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-full text-sm font-semibold drop-shadow-lg">
                                    <PlayIcon className="w-4 h-4" />
                                    Devam Et
                                  </div>
                                </div>
                              </div>
                          </Link>
                        </div>

                        <div />
                      </div>
                    </div>
                </div>
                <div className="col-span-3 lg:col-span-2">
                  <div className="flex flex-col gap-4">
                    <CourseModuleCard title="Kahvenin Köklerine Yolculuk"
                                      desc="Kahvenin binlerce yıllık serüvenine birlikte başlıyoruz. Bu derste kahvenin Afrika’daki keşfinden Osmanlı’ya ve oradan tüm dünyaya yayılışını keşfedeceğiz. Kültürel etkileri, tarihi önemi ve bugün hâlâ nasıl bir tutkuya dönüştüğünü anlamaya hazır mısın?"
                                      sources={58}
                                      href="/courses/1/modules/1"
                                      img="/images/example-video-thumbnail.png" />
                    <CourseModuleCard title="Kahvenin Köklerine Yolculuk"
                                      desc="Kahvenin binlerce yıllık serüvenine birlikte başlıyoruz. Bu derste kahvenin Afrika’daki keşfinden Osmanlı’ya ve oradan tüm dünyaya yayılışını keşfedeceğiz. Kültürel etkileri, tarihi önemi ve bugün hâlâ nasıl bir tutkuya dönüştüğünü anlamaya hazır mısın?"
                                      sources={58}
                                      href="/courses/1/modules/1"
                                      img="/images/example-video-thumbnail.png" />
                    <CourseModuleCard title="Kahvenin Köklerine Yolculuk"
                                      desc="Kahvenin binlerce yıllık serüvenine birlikte başlıyoruz. Bu derste kahvenin Afrika’daki keşfinden Osmanlı’ya ve oradan tüm dünyaya yayılışını keşfedeceğiz. Kültürel etkileri, tarihi önemi ve bugün hâlâ nasıl bir tutkuya dönüştüğünü anlamaya hazır mısın?"
                                      sources={58}
                                      href="/courses/1/modules/1"
                                      img="/images/example-video-thumbnail.png" />
                  </div>
                </div>
                <div className="col-span-1">
                    <h2 className="text-lg font-bold">Bu kursta neler var?</h2>
                    <p className="text-sm font-normal text-zinc-500 py-4">Espresso makinesi kullanımı, kahve çekirdeği seçimi ve süt köpürtme gibi baristalığın temel tekniklerini öğreneceksin. Gerçek kafe deneyimine hazırlanırken hem teorik bilgileri hem de pratik uygulamaları adım adım keşfedeceksin.</p>
                    <div className="flex items-center gap-2">
                        <div className="px-3 py-1.5 bg-zinc-700 w-fit h-fit rounded-3xl">
                          <p className="text-xs text-white">6 Modül</p>
                        </div>
                        <div className="px-3 py-1.5 bg-zinc-700 w-fit h-fit rounded-3xl">
                          <p className="text-xs text-white">58 Kaynak</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}
