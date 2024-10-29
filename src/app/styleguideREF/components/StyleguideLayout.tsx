import {FunctionComponent, PropsWithChildren, ReactNode} from 'react';
import {DefaultLayout} from '@/components/Layout/DefaultLayout';
import {SidebarNav} from '@/components/Layout/Sidebar/SidebarNav';
import {STYLEGUIDE_ROUTES} from '@/styleguide/styleguide.routes';
import clsx from 'clsx';

export const StyleguideLayout: FunctionComponent = () => (
  <DefaultLayout
    container={({children}) => <div className="p-4 space-y-4">{children}</div>}
    sidebarContent={
      <>
        <SidebarNav
          items={STYLEGUIDE_ROUTES.map(({title, slug, icon}) => ({
            label: title,
            href: `/styleguide/${slug}`,
            icon,
          }))}
          main
        />
      </>
    }
  />
);

export const StyleguideTitle: FunctionComponent<PropsWithChildren> = ({
  children,
}) => <h1 className="text-lg font-semibold">{children}</h1>;

export const StyleguideSection: FunctionComponent<
  PropsWithChildren<{title?: ReactNode; className?: string}>
> = ({children, title, className}) => (
  <div className={clsx('border rounded-xl bg-glass-darker p-4', className)}>
    {!!title && <h1 className="mb-3 font-semibold text-lg">{title}</h1>}

    {children}
  </div>
);
