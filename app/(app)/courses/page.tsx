import CourseCard from '@/components/course-card';
import { BackButton } from '@/components/back-button';

export default function Courses() {
  return (
      <>
        <div className="pb-5">
          <BackButton />
          <h1 className="text-2xl font-bold mt-4">Eğitimler</h1>
        </div>
        <div className="overflow-hidden shadow-sm rounded-lg border border-1 border-cyan-950"> 
            <div className="grid grid-cols-4 gap-4 p-4">
                <div className="col-span-1">
                    <CourseCard image="/images/course-1-banner.png"
                                href="/courses/1"
                                alt="Course 1 Banner"/>
                </div>
                <div className="col-span-1">
                    <CourseCard image="/images/course-2-banner.png"
                                href="/courses/1"
                                alt="Course 2 Banner"/>
                </div>
                <div className="col-span-1">
                    <CourseCard image="/images/course-3-banner.png"
                                href="/courses/3"
                                alt="Course 3 Banner" locked/>
                </div>
                
            </div>
        </div>
      </>
  );
}
