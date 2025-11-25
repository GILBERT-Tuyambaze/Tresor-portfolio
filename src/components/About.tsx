import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Heart, Shield, Lightbulb, Users, Award, Trophy, Star, Video, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const coreValues = [
    { icon: Shield, title: 'Safety First', description: 'Prioritizing safety in every installation and maintenance task' },
    { icon: Target, title: 'Precision', description: 'Meticulous attention to detail in all electrical work' },
    { icon: Heart, title: 'Accountability', description: 'Taking full responsibility for quality and outcomes' },
    { icon: Star, title: 'Excellence', description: 'Striving for the highest standards in every project' },
  ];

  const strengths = [
    { icon: Lightbulb, title: 'Highly Organized', description: 'Efficient and thorough approach to complex projects' },
    { icon: Heart, title: 'Empathetic', description: 'Understanding client needs and team dynamics' },
    { icon: Target, title: 'Self-Motivated', description: 'Driven to continuously improve and learn' },
    { icon: Star, title: 'Innovative', description: 'Creative problem-solving in challenging situations' },
    { icon: Users, title: 'Team-Oriented', description: 'Collaborative approach to achieving shared goals' },
  ];

  const achievements = [
    { icon: Trophy, title: 'Itorero ry\'igihugu Certification', year: '2023', description: 'Completed national civic education program at MIMULI' },
    { icon: Award, title: 'A2 Certificate in Electrical Engineering', year: '2023', description: 'Graduated from Ruhango Technical Secondary School' },
    { icon: Star, title: '5+ Years Professional Experience', year: '2019-Present', description: 'Proven track record in residential and commercial electrical work' },
    { icon: Trophy, title: 'Hotel Infrastructure Specialist', year: '2024', description: 'Trusted engineer at Hotel des Mille Collines, Kigali' },
  ];

  return (
    <section id="about" className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating reliable electrical solutions that power modern living
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="relative animate-in fade-in slide-in-from-left duration-700">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/about-image.jpg"
                alt="Tuyizere Tresor at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">2024</div>
                <div className="text-sm">Current Role</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                I am <strong className="text-foreground">Tuyizere Tresor</strong>, a dedicated electrical and maintenance engineer with over five years of hands-on experience in residential, commercial, and hospitality environments. My journey began in 2019 with Kigali Houses, where I honed my skills in electrical wiring, panel configurations, and conduit installations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, I serve as an <strong className="text-foreground">Electrical & Maintenance Engineer</strong> at the prestigious <strong className="text-foreground">Hotel des Mille Collines</strong> in Kigali, where I ensure the seamless operation of electrical systems and water infrastructure that keep this landmark hotel running smoothly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach is rooted in <strong className="text-foreground">precision, safety, and accountability</strong>. I believe that every electrical system should not only function flawlessly but also stand the test of time. Whether troubleshooting complex issues or installing new systems, I bring a meticulous eye for detail and a commitment to excellence.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Badge variant="outline" className="px-4 py-2">Organized</Badge>
              <Badge variant="outline" className="px-4 py-2">Empathetic</Badge>
              <Badge variant="outline" className="px-4 py-2">Self-Motivated</Badge>
              <Badge variant="outline" className="px-4 py-2">Innovative</Badge>
              <Badge variant="outline" className="px-4 py-2">Team Player</Badge>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-left duration-700">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To deliver reliable, efficient, and safe electrical systems that improve the environments where people live, work, and thrive. I am committed to upholding the highest standards of quality and safety in every project I undertake.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary/50 transition-all duration-300 animate-in fade-in slide-in-from-right duration-700 delay-200">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become a leading expert in smart maintenance systems and sustainable electrical infrastructure, particularly within the hospitality industry. I envision a future where technology and traditional engineering merge to create innovative, eco-friendly solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Core Values</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Strengths & Professional Traits</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <strength.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{strength.title}</h4>
                      <p className="text-sm text-muted-foreground">{strength.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Awards & Achievements</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:border-accent transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                      <achievement.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg">{achievement.title}</h4>
                        <Badge variant="secondary">{achievement.year}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom duration-700">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                    <Video className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3">Video Introduction</h3>
                  <p className="text-muted-foreground mb-4">
                    Get to know me better through a personal video introduction where I share my journey, passion for electrical engineering, and what drives me to deliver excellence in every project.
                  </p>
                  <Button size="lg" className="group">
                    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Watch Video Introduction
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    * Video coming soon - Stay tuned for an in-depth look at my work and philosophy
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}