import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Hotel des Mille Collines',
      location: 'Kigali, Rwanda',
      role: 'Electrical & Maintenance Engineer',
      period: '2024 - Present',
      type: 'Full-time',
      icon: Building2,
      responsibilities: [
        'Maintain and optimize electrical installation systems throughout the hotel',
        'Manage water piping systems and ensure consistent water supply',
        'Troubleshoot complex electrical issues to minimize downtime',
        'Implement preventive maintenance schedules for all electrical equipment',
        'Ensure compliance with safety standards and regulations',
        'Coordinate with hotel management on infrastructure improvements',
        'Respond to emergency electrical situations 24/7',
        'Train junior staff on proper maintenance procedures',
      ],
      achievements: [
        'Zero major electrical failures since joining',
        'Improved system efficiency by implementing preventive maintenance',
        'Successfully managed hotel infrastructure during peak seasons',
      ],
    },
    {
      company: 'Kigali Houses',
      location: 'Kigali, Rwanda',
      role: 'Electrical Technician',
      period: '2019 - 2024',
      type: 'Full-time',
      icon: Briefcase,
      responsibilities: [
        'Performed electrical wiring for residential and commercial buildings',
        'Installed and configured electrical panels and distribution systems',
        'Executed conduit installation and cable management',
        'Conducted electrical inspections and quality assurance',
        'Read and interpreted electrical blueprints and schematics',
        'Collaborated with construction teams on project timelines',
        'Ensured all installations met national electrical codes',
        'Provided technical support and troubleshooting services',
      ],
      achievements: [
        'Completed over 50 residential and commercial projects',
        'Maintained 100% safety record across all installations',
        'Recognized for exceptional attention to detail and quality work',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Professional Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven track record of excellence in electrical engineering and maintenance
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary -ml-px"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative animate-in fade-in slide-in-from-bottom duration-700`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Mobile Layout - Stacked vertically */}
                <div className="md:hidden space-y-4">
                  {/* Timeline dot for mobile */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <exp.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 pt-1">
                      <Badge variant="secondary" className="mb-2">
                        {exp.type}
                      </Badge>
                      <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <span className="font-semibold text-sm">{exp.company}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{exp.location}</p>
                      <p className="text-sm font-semibold text-primary mt-1">{exp.period}</p>
                    </div>
                  </div>

                  <Card className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <h4 className="font-bold text-base mb-3 text-primary">Key Responsibilities</h4>
                      <ul className="space-y-2 mb-6">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-bold text-base mb-3 text-secondary">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="font-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Desktop Layout - Two columns with alternating sides */}
                <div className={`hidden md:grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                  <div className={`${index % 2 === 0 ? 'text-right pr-8' : 'pl-8 col-start-2'}`}>
                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-2">
                        {exp.type}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                      <div className={`flex items-center gap-2 text-muted-foreground mb-1 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                        <exp.icon className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                      <p className="text-sm font-semibold text-primary mt-1">{exp.period}</p>
                    </div>
                  </div>

                  {/* Timeline dot for desktop */}
                  <div className="absolute left-1/2 top-0 w-4 h-4 -ml-2 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                  <Card className={`hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'col-start-2' : 'col-start-1'}`}>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-4 text-primary">Key Responsibilities</h4>
                      <ul className="space-y-2 mb-6">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-bold text-lg mb-3 text-secondary">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="font-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <Card className="inline-block border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">5+ Years</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Of Professional Excellence</p>
                </div>
                <div className="h-16 w-px bg-border hidden sm:block"></div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">50+</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Completed Projects</p>
                </div>
                <div className="h-16 w-px bg-border hidden sm:block"></div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">100%</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Safety Record</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}