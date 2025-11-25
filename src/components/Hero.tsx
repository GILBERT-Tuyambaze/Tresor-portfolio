import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Award, Building2, Zap, Download, Mail, ArrowDown } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Hero() {
  const { actualTheme } = useTheme();
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Electrical & Maintenance Engineer',
    'Certified Electrical Technician',
    'Hotel Infrastructure Specialist',
    'Installation • Troubleshooting • Maintenance',
  ];

  useEffect(() => {
    const currentFullText = titles[currentTitle];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTitle((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(isDeleting ? currentFullText.substring(0, displayText.length - 1) : currentFullText.substring(0, displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitle]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Tuyizere Tresor
                </span>
              </h1>
              
              <div className="h-16 flex items-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground/80">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A devoted electrical engineer focused on delivering safe, stable, and efficient electrical systems for commercial, residential, and hospitality environments. Blending precision, modern engineering practices, and a commitment to quality, I create solutions built to last.
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Briefcase className="w-4 h-4 mr-2" />
                5+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Building2 className="w-4 h-4 mr-2" />
                Hotel des Mille Collines
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Award className="w-4 h-4 mr-2" />
                Kigali Houses
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Zap className="w-4 h-4 mr-2" />
                Safety-Driven Engineering
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" onClick={() => scrollToSection('#projects')} className="group">
                View Portfolio
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('#contact')}>
                <Mail className="mr-2 w-4 h-4" />
                Hire Me
              </Button>
              <Button size="lg" variant="secondary">
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </Button>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl animate-pulse"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background transform hover:scale-105 transition-transform duration-500">
                <img
                  src={actualTheme === 'dark' ? '/assets/hero-dark.jpg' : '/assets/hero-light.jpg'}
                  alt="Tuyizere Tresor - Electrical Engineer"
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-foreground">5+</div>
                  <div className="text-xs text-accent-foreground/80">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection('#about')} className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}