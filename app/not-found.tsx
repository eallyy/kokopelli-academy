import './globals.css';
import { Button } from '@/components/button';

export default function NotFound() {
  return (
      <main className="grid h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-2xl font-semibold text-sky-500">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-100 sm:text-7xl">
            Sayfa Bulunamadı! 
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Aradığınız sayfa artık yok ya da hiç var olmadı.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              href="/"
              color="sky"
            >
              Ana Sayfaya Dön
            </Button>
            <a href="mailto:destek@kokopelliakademi.com" className="text-sm font-semibold text-gray-100">
              Bize Ulaşın<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
  )
}

