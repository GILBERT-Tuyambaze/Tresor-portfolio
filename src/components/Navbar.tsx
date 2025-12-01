import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Monitor, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme(); 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const heroImageSrc =
    theme === 'dark' ? '/assets/logo-light.jpg' : '/assets/logo-dark.png';

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

const ThemeToggle = ({ isMobile = false }) => (
    <div className={`flex ${isMobile ? 'flex-col space-y-2' : 'items-center space-x-1'} bg-gray-100 dark:bg-gray-800 rounded-full ${isMobile ? 'p-3' : 'p-1'}`}>
      <Button
        variant={theme === 'light' ? 'default' : 'ghost'}
        size={isMobile ? 'default' : 'sm'}
        onClick={() => setTheme('light')}
        className={`rounded-full ${isMobile ? 'w-full justify-start' : 'h-8 w-8 p-0'} ${
          theme === 'light' 
            ? 'bg-white text-gray-900 shadow-sm' 
            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        <Sun className={`${isMobile ? 'mr-2' : ''} h-4 w-4`} />
        {isMobile && 'Light'}
      </Button>
      <Button
        variant={theme === 'dark' ? 'default' : 'ghost'}
        size={isMobile ? 'default' : 'sm'}
        onClick={() => setTheme('dark')}
        className={`rounded-full ${isMobile ? 'w-full justify-start' : 'h-8 w-8 p-0'} ${
          theme === 'dark' 
            ? 'bg-gray-900 text-white shadow-sm' 
            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        <Moon className={`${isMobile ? 'mr-2' : ''} h-4 w-4`} />
        {isMobile && 'Dark'}
      </Button>
      <Button
        variant={theme === 'system' ? 'default' : 'ghost'}
        size={isMobile ? 'default' : 'sm'}
        onClick={() => setTheme('system')}
        className={`rounded-full ${isMobile ? 'w-full justify-start' : 'h-8 w-8 p-0'} ${
          theme === 'system' 
            ? 'bg-blue-600 text-white shadow-sm' 
            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        <Monitor className={`${isMobile ? 'mr-2' : ''} h-4 w-4`} />
        {isMobile && 'System'}
      </Button>
    </div>
  )

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-border shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                    src={heroImageSrc}
                    alt="Gilbert Tuyambaze"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
              </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/10 transition-all duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop right controls */}
          <div className="hidden md:flex items-center space-x-2">
           <ThemeToggle />
            <Button variant="default" size="sm" className="ml-2">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />

            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(link => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/10 transition-all duration-200"
              >
                {link.name}
              </button>
            ))}
            <Button variant="default" size="sm" className="w-full mt-2">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
