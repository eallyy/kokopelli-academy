import { KokopelliLong } from '@/components/kokopelli-logo';
import { Button } from '@/components/button'
import { Checkbox, CheckboxField } from '@/components/checkbox'
import { Field, Label } from '@/components/fieldset'
import { Heading } from '@/components/heading'
import { LoginEmailInput } from '@/components/login-email-input'
import { LoginSupportModal } from '@/components/login-support-modal';
import Link from 'next/link';

export default function Login() {
  return (<>
    <form action="" method="POST" className="grid w-full max-w-sm grid-cols-1 gap-4">
      <div>
        <KokopelliLong />
      </div>
      <Heading className="text-center my-6">Hesabına Giriş Yap</Heading>
      <Field>
        <LoginEmailInput type="email" name="email" placeholder="E-Posta Adresi" />
      </Field>
      <div className="flex items-center justify-center">
        <CheckboxField>
          <Checkbox name="remember" />
          <Label>Beni Hatırla</Label>
        </CheckboxField>
      </div>
      <div className="flex items-center justify-center">
        <Link href="/">
          <Button type="submit" className="w-fit" color="sky">
            Giriş
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-center mt-2">
        <LoginSupportModal />
      </div>
    </form>
  </>)
}
