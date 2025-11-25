import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Zap, Wrench, Code, Globe } from 'lucide-react';

export default function Skills() {
  const technicalSkills = [
    { name: 'Electrical Installation', level: 95 },
    { name: 'Maintenance & Troubleshooting', level: 90 },
    { name: 'Panel Configuration', level: 88 },
    { name: 'Conduit Systems', level: 92 },
    { name: 'CCTV Installation & Maintenance', level: 85 },
    { name: 'Fire Alarm Systems', level: 83 },
    { name: 'Water System Maintenance', level: 85 },
    { name: 'Safety Compliance', level: 95 },
  ];

  const softwareTools = [
    { name: 'Circuit Simulation (SPICE, Multisim)', level: 75 },
    { name: 'AutoCAD / EDA Tools', level: 70 },
    { name: 'CCTV Configuration Software', level: 80 },
    { name: 'Fire Alarm Programming', level: 75 },
    { name: 'Microsoft Office Suite', level: 85 },
    { name: 'Photo & Video Editing', level: 80 },
    { name: 'Website Design', level: 65 },
  ];

  const languages = [
    { name: 'Kinyarwanda', speaking: 'Excellent', writing: 'Excellent', listening: 'Excellent' },
    { name: 'English', speaking: 'Very Good', writing: 'Very Good', listening: 'Very Good' },
    { name: 'French', speaking: 'Good', writing: 'Good', listening: 'Good' },
    { name: 'Chinese', speaking: 'Good', writing: 'Basic', listening: 'Good' },
  ];

  const hobbies = [
    { icon: '🎵', name: 'Music & Praying', description: 'Finding inspiration through music' },
    { icon: '📚', name: 'Reading', description: 'Continuous learning and growth' },
    { icon: '💡', name: 'Innovation', description: 'Exploring creative solutions' },
    { icon: '👥', name: 'Team Working', description: 'Collaborative problem-solving' },
    { icon: '👶', name: 'Playing with Children', description: 'Joy and creativity' },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="animate-in fade-in slide-in-from-left duration-700">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-in fade-in slide-in-from-right duration-700 delay-200">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Code className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Software & Tools</h3>
              </div>
              <div className="space-y-6">
                {softwareTools.map((tool, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{tool.name}</span>
                      <span className="text-sm text-muted-foreground">{tool.level}%</span>
                    </div>
                    <Progress value={tool.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Languages</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {languages.map((lang, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-4 text-center">{lang.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Speaking:</span>
                        <Badge variant="secondary">{lang.speaking}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Writing:</span>
                        <Badge variant="secondary">{lang.writing}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Listening:</span>
                        <Badge variant="secondary">{lang.listening}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-400">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Hobbies & Personal Interests</span>
            </h3>
            <p className="text-muted-foreground">Beyond work, I find balance and inspiration in diverse activities</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {hobbies.map((hobby, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{hobby.icon}</div>
                  <h4 className="font-bold mb-2">{hobby.name}</h4>
                  <p className="text-sm text-muted-foreground">{hobby.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}