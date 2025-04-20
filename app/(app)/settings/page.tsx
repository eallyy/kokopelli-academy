import { BackButton } from '@/components/back-button';
import { Button } from '@/components/button';
import { Select } from '@/components/select';

export default function Settings() {
  return (
      <>
        <div className="pb-5">
          <BackButton />
          <h1 className="text-2xl font-bold mt-4">Ayarlar</h1>
        </div>
        <div className="overflow-hidden shadow-sm rounded-lg border-1 border-cyan-950"> 
            <div className="grid grid-cols-1 gap-4 p-4">
                <div className="col-span-1">
                    <div>
                      <h2 className="text-base/7 font-semibold">Profil</h2>
                      <p className="mt-1 text-sm/6 text-gray-500">
                        Bu alanda hesabınız ile ilgili bilgiler yer almaktadır.
                      </p>

                      <dl className="mt-6 border-t border-gray-700 text-sm/6">
                        <div className="py-6 sm:flex items-center">
                          <dt className="font-medium sm:w-64 sm:flex-none sm:pr-6">Tam Ad</dt>
                          <dd className="mt-1 flex justify-between items-center gap-x-6 sm:mt-0 sm:flex-auto">
                            <div className="">Ali Kemal</div>
                            <Button type="button" color="sky">
                              Güncelle
                            </Button>
                          </dd>
                        </div>
                        <div className="py-6 sm:flex">
                          <dt className="font-medium  sm:w-64 sm:flex-none sm:pr-6">E-Posta Adresi</dt>
                          <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                            <div className="">ali@kokopelliakademi.com</div>
                            <Button type="button" color="sky">
                              Güncelle
                            </Button>
                          </dd>
                        </div>

                      </dl>
                    </div>
                </div>
                <div className="col-span-1">
                    <div>
                      <h2 className="text-base/7 font-semibold">Sistem Ayarları</h2>
                      <p className="mt-1 text-sm/6 text-gray-500">
                        Bu alanda kişiselleştirilmiş kullanıcı deneyimi için sistem ayarları bulunmaktadır.
                      </p>

                      <dl className="mt-6 border-t border-gray-700 text-sm/6">
                        <div className="py-6 sm:flex items-center">
                          <dt className="font-medium sm:w-64 sm:flex-none sm:pr-6">Dil</dt>
                          <dd className="mt-1 flex justify-between items-center gap-x-6 sm:mt-0 sm:flex-auto">
                            <div>
                                <Select aria-label="Language" name="status">
                                  <option value="tr">Turkçe</option>
                                  <option value="en">English</option>
                                </Select>
                            </div>
                            <Button type="button" color="sky">
                              Güncelle
                            </Button>
                          </dd>
                        </div>

                      </dl>
                    </div>
                </div>
                <div className="col-span-1">
                    <div>
                      <h2 className="text-base/7 font-semibold">Ödemeler</h2>
                      <p className="mt-1 text-sm/6 text-gray-500">
                        Faturalama bilgilerinizi yönetin ve ödeme geçmişinizi görüntüleyin.
                      </p>

                      <dl className="mt-6 border-t border-gray-700 text-sm/6">
                        <div className="py-6 sm:flex items-center">
                          <dd className="mt-1 flex justify-between items-center gap-x-6 sm:mt-0 sm:flex-auto">
                            <Button type="button" color="sky">
                              Ödemeleri Yönet
                            </Button>
                          </dd>
                        </div>

                      </dl>
                    </div>
                </div>
                
            </div>
        </div>
      </>
  );
}
