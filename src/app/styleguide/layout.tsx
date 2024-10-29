import {
  IconBook,
  IconLayout,
  IconCircle,
  IconCards,
  IconForms,
  IconTable,
  IconAlertCircle,
  IconMessage2,
} from "@tabler/icons-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface StyleguideLayoutProps {
  children: React.ReactNode;
}

const sidebarNavItems = [
  { title: "Introduction", href: "/styleguide", icon: IconBook },
  { title: "Typography", href: "/styleguide/typography", icon: IconLayout },
  { title: "Buttons", href: "/styleguide/buttons", icon: IconCircle },
  { title: "Cards", href: "/styleguide/cards", icon: IconCards },
  { title: "Forms", href: "/styleguide/forms", icon: IconForms },
  { title: "Tables", href: "/styleguide/tables", icon: IconTable },
  { title: "Alerts", href: "/styleguide/alerts", icon: IconAlertCircle },
  { title: "Modals", href: "/styleguide/modals", icon: IconMessage2 },
];

export default function StyleguideLayout({ children }: StyleguideLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="p-4">
              <h2 className="text-lg font-semibold">Style Guide</h2>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Components</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarNavItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild>
                        <a href={item.href}>
                          <item.icon className="h-4 w-4 stroke-[1.5]" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </SidebarProvider>
  );
}
