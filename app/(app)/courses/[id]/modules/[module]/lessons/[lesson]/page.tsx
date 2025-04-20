import { BackButton } from '@/components/back-button';
import { Field } from '@/components/fieldset';
import { Select } from '@/components/select';
import CourseVideoCard from '@/components/course-video-card';
import MaterialDownloadCard from '@/components/material-download-card';
import { VideoPlayer } from '@/components/video-player';

export default function CourseVideo() {
  return (
      <div className="flex flex-col w-full h-full">
        <div className="pb-5">
          <BackButton />
        </div>
        <div className="flex flex-col w-full h-full overflow-hidden shadow-sm rounded-lg border-1 border-cyan-950"> 
            <div className="grid grid-cols-3 gap-4 p-4">
                <div className="col-span-3 lg:col-span-2 gap-4">
                  <VideoPlayer />

                  <div className="flex flex-col gap-4 mt-4">
                    <h1 className="text-xl font-bold">Kahvenin Doğuşu: Etiyopya Efsaneleri ve Gerçekler</h1>
                    <p className="text-sm font-normal text-zinc-500 py-2">Bu videoda kahvenin tarihsel yolculuğuna çıkıyoruz. Efsanevi keçi çobanı Kaldi’den, Etiyopya’nın kahveyle özdeşleşen köylerine kadar kahvenin kökenine dair hem efsaneleri hem de tarihsel gerçekleri keşfedeceğiz. Kahvenin kültürel mirasını anlamak, bir baristanın kahveye olan yaklaşımını derinleştirir. Kahvenin büyülü doğuş hikayesini birlikte öğrenmeye hazır mısın?</p>
                    <h1 className="text-xl font-bold">Materyaller</h1>
                    <div className="flex flex-wrap items-center gap-2">
                        <MaterialDownloadCard title="Varyeteler Rehberi" href="#"/>
                        <MaterialDownloadCard title="Çekirdekler Hakkında Genel Rehber" href="#"/>
                    </div>



                  </div>
                </div>
                <div className="flex flex-col col-span-3 lg:col-span-1 gap-4 overflow-y-auto max-h-full lg:max-h-[calc(100vh-12rem)] pr-4">
                    <div>
                        <Field>
                          <Select name="status">
                            <option value="/courses/1/modules/1/lessons/1">Kahvenin Doğuşu: Etiyopya Efsaneleri ve Gerçekler</option>
                            <option value="/courses/1/modules/1/lessons/1">Kahve ve Medeniyet: Yemen’den Osmanlı’ya Uzanan Yolculuk</option>
                            <option value="/courses/1/modules/1/lessons/1">Avrupa’nın Uyanışı: Kahve Batı’ya Nasıl Taşındı?</option>
                            <option value="/courses/1/modules/1/lessons/1">Tanelerden Tutkuya: Küresel Bir Fenomenin Başlangıcı</option>
                          </Select>
                        </Field>
                    </div>
                    <CourseVideoCard href="/courses/1/module/1/lessons/1"
                                     img="/images/example-video-thumbnail.png"
                                     duration="00:00:00"
                                     progress={100}
                                     title="Kahvenin Doğuşu: Etiyopya Efsaneleri ve Gerçekler" watched />
                    <CourseVideoCard href="/courses/1/module/1/lessons/1"
                                     img="/images/example-video-thumbnail.png"
                                     duration="00:00:00"
                                     progress={100}
                                     title="Kahvenin Doğuşu: Etiyopya Efsaneleri ve Gerçekler" watched />
                    <CourseVideoCard href="/courses/1/module/1/lessons/1"
                                     img="/images/example-video-thumbnail.png"
                                     duration="00:00:00"
                                     progress={100}
                                     title="Kahvenin Doğuşu: Etiyopya Efsaneleri ve Gerçekler" watched />
                    <CourseVideoCard href="/courses/1/module/1/lessons/1"
                                     img="/images/example-video-thumbnail.png"
                                     duration="00:00:00"
                                     progress={61}
                                     title="Kahve ve Medeniyet: Yemen’den Osmanlı’ya Uzanan Yolculuk" active />
                    <CourseVideoCard href="/courses/1/module/1/lessons/1"
                                     img="/images/example-video-thumbnail.png"
                                     duration="00:00:00"
                                     progress={0}
                                     title="Avrupa’nın Uyanışı: Kahve Batı’ya Nasıl Taşındı?" />
                    <CourseVideoCard href="/courses/1/module/1/lessons/1"
                                     img="/images/example-video-thumbnail.png"
                                     duration="00:00:00"
                                     progress={0}
                                     title="Avrupa’nın Uyanışı: Kahve Batı’ya Nasıl Taşındı?" />
                    <CourseVideoCard href="/courses/1/module/1/lessons/1"
                                     img="/images/example-video-thumbnail.png"
                                     duration="00:00:00"
                                     progress={0}
                                     title="Avrupa’nın Uyanışı: Kahve Batı’ya Nasıl Taşındı?" />

                </div>
            </div>
        </div>
      </div>
  );
}
