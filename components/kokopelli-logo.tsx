import Image from 'next/image';

export function KokopelliLong() {
    return (<div className="flex shrink-0 justify-center items-center gap-2.5">
      <Image
        alt="Kokopelli"
        width={48}
        height={48}
        src="/kokopelli-icon-white.png"
        className="h-12 w-auto"
      />
      <span className="text-white text-lg font-bold">Kokopelli Akademi</span>
    </div>);
}
