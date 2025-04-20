import { Navbar, NavbarSection } from '@/components/navbar';
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/sidebar';
import { SidebarItem } from '@/components/sidebar-item';
import { SidebarLayout } from '@/components/sidebar-layout';
import {
  Cog6ToothIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  DocumentIcon,
  UsersIcon,
  LightBulbIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { KokopelliLong } from '@/components/kokopelli-logo';
import { Profile } from '@/components/sidebar-profile';

export function ApplicationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSection>
            <KokopelliLong />
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <KokopelliLong />
            <Profile />
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/">
                <HomeIcon />
                <SidebarLabel>Ana Sayfa</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/courses">
                <Squares2X2Icon />
                <SidebarLabel>Eğitimler</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/resources">
                <DocumentIcon />
                <SidebarLabel>Kaynaklar</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="https://instagram.com/kokopellicoffeeco" external>
                <UsersIcon />
                <SidebarLabel>Topluluk</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/settings">
                <Cog6ToothIcon />
                <SidebarLabel>Ayarlar</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="/feedback">
                  <LightBulbIcon />
                <SidebarLabel>Geri Bildirim</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/support">
                <QuestionMarkCircleIcon />
                <SidebarLabel>Destek</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter>
              <SidebarItem href="/sign-in">
                  <ArrowRightStartOnRectangleIcon />
                <SidebarLabel>Çıkış Yap</SidebarLabel>
              </SidebarItem>
          </SidebarFooter>
        </Sidebar>
      }
    >
      { children }
    </SidebarLayout>
  )
}
