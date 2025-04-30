import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronLeft, ChevronRight, Users, CreditCard, CalendarDays } from 'lucide-react';
import { AppSidebar } from './app-sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const navigationLinks = [
  { name: 'Alunos', href: '/students', icon: Users },
  { name: 'Pagamentos', href: '/payments', icon: CreditCard },
  { name: 'Calendário', href: '/calendar', icon: CalendarDays },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isDesktopMenuExpanded, setIsDesktopMenuExpanded] = useState(true); // State for desktop menu expansion

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  const toggleDesktopMenu = () => {
    setIsDesktopMenuExpanded(!isDesktopMenuExpanded);
  };

  return (
    <div className="min-h-screen w-full flex bg-[url('https://images.unsplash.com/photo-1745905932700-929b5e8676f0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat gap-2">
      {/* Barra lateral para Desktop */}
      <div className="absolute inset-0 bg-white/50 z-0"></div>
      <AppSidebar />
      <div className={`z-10 hidden lg:flex flex-col ${isDesktopMenuExpanded ? 'w-46' : 'w-14 items-center'} border-r bg-gray-100 transition-width duration-300 ease-in-out rounded-md`}>
        <div className="flex items-center justify-between text-2xl font-bold mb-6 h-12 md:h-14 px-4">
          {isDesktopMenuExpanded && <span>Menu</span>}
          <Button variant="ghost" size="icon" onClick={toggleDesktopMenu}>
            {isDesktopMenuExpanded ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
          </Button>
        </div>
        <nav className={`flex flex-col space-y-2 items-center ${isDesktopMenuExpanded ? 'px-2' : ''}`}>
          {navigationLinks.map((link) => {
            const Icon = link.icon; // Get the icon component
            return (
              <Button asChild variant="ghost" className={`justify-start ${isDesktopMenuExpanded ? 'w-full' : 'w-auto'} hover:bg-primary-foreground rounded-sm`} key={link.href}>
                <Link to={link.href} className="flex items-center">
                  <Icon className={`h-5 w-5 ${isDesktopMenuExpanded ? 'mr-1' : ''}`} />
                  {isDesktopMenuExpanded && <span className='text-foreground'>{link.name}</span>}
                </Link>
              </Button>
            );
          })}
        </nav>
      </div>

      {/* Conteúdo principal e FAB para Mobile */}
      <div className="z-10 flex flex-col flex-grow gap-2">
        {/* Conteúdo principal */}
        <div className='bg-black/40 backdrop-blur-md h-12 md:h-14 flex items-center px-4 rounded-md'>
          {/* Placeholder for potential header content */}
          {!isDesktopMenuExpanded && (
            <Button variant="ghost" size="icon" onClick={toggleDesktopMenu} className="lg:hidden">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          )}
          <span className='text-white text-lg font-semibold'>FitGes</span> {/* Example Title */}
        </div>
        <main className="flex-grow p-4">{children}</main>

        {/* FAB para Mobile (visível apenas em telas pequenas) */}
        <div className="fixed bottom-4 right-4 lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="default"
                size="icon"
                className="rounded-full shadow-lg h-12 w-12 bg-black/40 backdrop-blur-md"
                aria-label={isSheetOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                <Menu className="h-7 w-7" />
                <span className="sr-only">{isSheetOpen ? 'Fechar menu' : 'Abrir menu'}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className='bg-white/35 backdrop-blur-md border-0 rounded-md'>
              <nav className="flex flex-col space-y-2 px-4 pt-4">
                <div className="text-2xl font-bold mb-6">Menu</div>
                {navigationLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Button asChild variant="ghost" className="justify-start w-full" key={link.href} onClick={handleLinkClick}>
                      <Link to={link.href} className="flex items-center">
                        <Icon className="h-5 w-5 mr-2" />
                        <span>{link.name}</span>
                      </Link>
                    </Button>
                  )
                })}
              </nav>
              <SheetClose className='absolute bottom-4 right-4'>
                <Button
                  variant="default"
                  size="icon"
                  className="rounded-full shadow-lg h-12 w-12 bg-black/40 backdrop-blur-md"
                  aria-label={isSheetOpen ? 'Fechar menu' : 'Abrir menu'}
                >
                  <X className="h-7 w-7" />
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Layout;