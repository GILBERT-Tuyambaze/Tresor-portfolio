import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Building2, Home, Lightbulb, Camera, AlertTriangle, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Hotel Electrical Infrastructure Upgrade',
      category: 'Commercial',
      icon: Building2,
      problem: 'Aging electrical systems causing frequent power interruptions and safety concerns at a major hospitality facility.',
      approach: 'Conducted comprehensive electrical audit, designed phased upgrade plan, implemented modern circuit protection systems, and integrated smart monitoring solutions.',
      tools: ['Circuit Analysis', 'Load Calculation', 'AutoCAD', 'Safety Protocols'],
      outcome: 'Achieved 99.9% uptime, eliminated safety hazards, reduced energy consumption by 15%, and improved guest satisfaction.',
      status: 'Completed',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Residential Complex Electrical Installation',
      category: 'Residential',
      icon: Home,
      problem: 'New residential development requiring complete electrical infrastructure from ground up with modern standards.',
      approach: 'Designed comprehensive electrical layout, installed main distribution panels, executed conduit systems, implemented proper grounding, and ensured code compliance.',
      tools: ['Electrical Design', 'Panel Configuration', 'Conduit Installation', 'Testing Equipment'],
      outcome: 'Successfully delivered 20+ residential units with certified electrical systems, zero defects, and full regulatory approval.',
      status: 'Completed',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'CCTV Security System Installation',
      category: 'Security Systems',
      icon: Camera,
      problem: 'Hotel requiring comprehensive surveillance coverage with 24/7 monitoring capabilities and remote access.',
      approach: 'Designed multi-zone CCTV network, installed IP cameras with night vision, configured NVR system, implemented remote viewing, and integrated with existing security infrastructure.',
      tools: ['IP Cameras', 'NVR Configuration', 'Network Setup', 'Remote Access Software'],
      outcome: 'Complete property coverage with 50+ cameras, 30-day recording storage, mobile app access, and zero blind spots.',
      status: 'Completed',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Fire Alarm & Detection System',
      category: 'Safety Systems',
      icon: AlertTriangle,
      problem: 'Commercial building needing compliant fire detection and alarm system with automatic emergency response.',
      approach: 'Installed addressable fire alarm panel, placed smoke and heat detectors strategically, integrated emergency lighting, configured automatic notifications, and conducted compliance testing.',
      tools: ['Fire Alarm Panel', 'Smoke Detectors', 'Heat Sensors', 'Emergency Lighting', 'Testing Equipment'],
      outcome: 'Full building coverage with zone-based detection, instant emergency alerts, automatic fire department notification, and passed all safety inspections.',
      status: 'Completed',
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Emergency Power Backup System',
      category: 'Critical Infrastructure',
      icon: Zap,
      problem: 'Critical facility requiring uninterrupted power supply with automatic failover capabilities.',
      approach: 'Designed and installed automatic transfer switch (ATS) system, integrated backup generator, configured load management, and implemented monitoring dashboard.',
      tools: ['Generator Systems', 'ATS Configuration', 'Load Management', 'SCADA Integration'],
      outcome: 'Seamless power transitions with <2 second switchover time, 24/7 monitoring capability, and zero downtime incidents.',
      status: 'Completed',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'Smart Lighting Control System',
      category: 'Innovation',
      icon: Lightbulb,
      problem: 'High energy costs and inefficient lighting management in large commercial space.',
      approach: 'Implemented IoT-based smart lighting system with occupancy sensors, daylight harvesting, and centralized control interface.',
      tools: ['IoT Sensors', 'Smart Controllers', 'Energy Monitoring', 'Automation Systems'],
      outcome: '40% reduction in lighting energy costs, improved ambiance control, and enhanced user experience with mobile app integration.',
      status: 'In Progress',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineering solutions that combine technical excellence with practical innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 bg-gradient-to-br ${project.color} rounded-xl text-white`}>
                    <project.icon className="w-8 h-8" />
                  </div>
                  <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>{project.status}</Badge>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <Badge variant="outline" className="mb-4">
                  {project.category}
                </Badge>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Problem Statement</h4>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Approach & Design</h4>
                    <p className="text-sm text-muted-foreground">{project.approach}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-secondary mb-2">Outcome & Impact</h4>
                    <p className="text-sm font-medium">{project.outcome}</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Details
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <Card className="inline-block border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Future Projects & Aspirations</h3>
              <p className="text-muted-foreground max-w-2xl mb-6">
                I envision a future where smart maintenance technologies, integrated security systems, and sustainable electrical solutions transform the hospitality and commercial sectors. My goals include developing IoT-integrated monitoring systems, implementing AI-powered surveillance, creating predictive maintenance platforms, and advancing fire safety automation.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="px-4 py-2">Smart Building Systems</Badge>
                <Badge variant="outline" className="px-4 py-2">AI Security Solutions</Badge>
                <Badge variant="outline" className="px-4 py-2">Renewable Energy Integration</Badge>
                <Badge variant="outline" className="px-4 py-2">Predictive Maintenance</Badge>
                <Badge variant="outline" className="px-4 py-2">IoT Solutions</Badge>
                <Badge variant="outline" className="px-4 py-2">Advanced Fire Safety</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}