'use client'

import * as Headless from '@headlessui/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';
import { TouchTarget } from './button';
import { Link } from './link';
import { usePathname } from 'next/navigation';

export const SidebarItem = forwardRef(function SidebarItem(
  {
    external,
    current: currentProp,
    className,
    children,
    ...props
  }: { external?: boolean; current?: boolean; className?: string; children: React.ReactNode } & (
    | Omit<Headless.ButtonProps, 'as' | 'className'>
    | Omit<Headless.ButtonProps<typeof Link>, 'as' | 'className'>
  ),
  ref: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
) {
const pathname = usePathname();
  const current =
    typeof currentProp === 'boolean'
      ? currentProp
      : 'href' in props && typeof props.href === 'string'
      ? pathname === props.href || pathname.startsWith(props.href + '/')
      : false;

  let classes = clsx(
    // Base
    'flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-bold text-zinc-950 sm:py-2 sm:text-sm/5',
    // Leading icon/icon-only
    '*:data-[slot=icon]:size-7 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-6',
    // Trailing icon (down chevron or similar)
    '*:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-5 sm:*:last:data-[slot=icon]:size-4',
    // Avatar
    '*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6',
    // Hover
    'data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950',
    // Active
    'data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950',
    // Current
    'data-current:*:data-[slot=icon]:fill-zinc-950',
    // Dark mode
    'dark:text-white dark:*:data-[slot=icon]:fill-zinc-400',
    'dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white',
    'dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white',
    'dark:data-current:*:data-[slot=icon]:fill-white'
  )

  return (
    <span className={clsx(className, 'relative')}>
      {current && (
        <motion.span
          layoutId="current-indicator"
          className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white"
        />
      )}
      {'href' in props ? (
        <Headless.CloseButton
          as={Link}
          {...props}
          className={classes}
          data-current={current ? 'true' : undefined}
          ref={ref}
          {...(external
          ? {
              target: '_blank',
              rel: 'noopener noreferrer',
            }
          : {})}
        >
          <TouchTarget>{children}</TouchTarget>
        </Headless.CloseButton>
      ) : (
        <Headless.Button
          {...props}
          className={clsx('cursor-default', classes)}
          data-current={current ? 'true' : undefined}
          ref={ref}
        >
          <TouchTarget>{children}</TouchTarget>
        </Headless.Button>
      )}
    </span>
  )
})
