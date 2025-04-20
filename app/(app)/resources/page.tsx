import ResourceCard from '@/components/resource-card';
import { BackButton } from '@/components/back-button';

export default function Resources() {
  return (
      <>
        <div className="pb-5">
          <BackButton />
          <h1 className="text-2xl font-bold mt-4">Kaynaklar</h1>
          <p className="mt-2 max-w-4xl text-base text-slate-300 font-normal">
            Tüm eğitimlerin içerdiği kaynaklara buradan ulaşabilirsiniz.
          </p>
        </div>
        <div className="overflow-hidden shadow-sm rounded-lg border-1 border-cyan-950"> 
            <div className="grid grid-cols-2 gap-4 p-4">
                <div className="col-span-2 lg:col-span-1">
                    <ResourceCard image="/images/1.png"
                                href="/resources/1"
                                alt="Course 1 Banner"/>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <ResourceCard image="/images/2.png"
                                href="/resources/1"
                                alt="Course 2 Banner"/>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <ResourceCard image="/images/3.png"
                                href="/resources/3"
                                alt="Course 3 Banner" locked/>
                </div>
                
            </div>
        </div>
      </>
  );
}
