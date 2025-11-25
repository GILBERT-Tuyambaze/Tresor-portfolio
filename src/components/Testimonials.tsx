import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Jean De Dieu Uzalibara',
      role: 'Coordinator',
      company: 'Hotel des Mille Collines',
      initials: 'JU',
      rating: 5,
      quote: 'Tresor is an exceptional electrical engineer who consistently delivers high-quality work. His attention to detail and commitment to safety standards make him an invaluable asset to our hotel infrastructure team. He responds promptly to any electrical issues and ensures minimal disruption to our operations.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Emmanuel Hakizimana',
      role: 'Senior Electrician',
      company: 'Kanombe Airport',
      initials: 'EH',
      rating: 5,
      quote: 'Working alongside Tresor at Kigali Houses was a pleasure. His technical expertise in electrical installations is outstanding. He has a methodical approach to problem-solving and always ensures that installations meet the highest standards. His professionalism and work ethic are exemplary.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Jean Paul Ndindiriyimana',
      role: 'Electrician',
      company: 'Hotel des Mille Collines',
      initials: 'JN',
      rating: 5,
      quote: 'Tresor is not only technically skilled but also an excellent team player. He willingly shares his knowledge and helps junior staff develop their skills. His ability to troubleshoot complex electrical issues quickly has saved us countless hours. I highly recommend him for any electrical engineering project.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Project Manager',
      role: 'Construction Lead',
      company: 'Kigali Houses',
      initials: 'PM',
      rating: 5,
      quote: 'Tresor completed over 50 residential and commercial projects with us, maintaining a perfect safety record throughout. His reliability, precision, and dedication to quality work make him stand out. He consistently meets deadlines and communicates effectively with all stakeholders.',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Facility Manager',
      role: 'Operations Director',
      company: 'Commercial Client',
      initials: 'FM',
      rating: 5,
      quote: 'We have relied on Tresor for multiple electrical maintenance projects. His proactive approach to preventive maintenance has significantly reduced our downtime. He is always professional, punctual, and thorough in his work. His expertise in both residential and commercial systems is impressive.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Hotel Management',
      role: 'General Manager',
      company: 'Hospitality Sector',
      initials: 'HM',
      rating: 5,
      quote: 'Tresor\'s understanding of hotel infrastructure needs is exceptional. He has successfully managed our electrical and water systems, ensuring 24/7 reliability. His commitment to excellence and ability to work under pressure make him an outstanding engineer. We trust him completely with our critical systems.',
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Client Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by professionals across Rwanda for exceptional electrical engineering services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${testimonial.color}`}></div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className={`w-16 h-16 border-4 border-background shadow-lg bg-gradient-to-br ${testimonial.color}`}>
                    <AvatarFallback className="text-white font-bold text-lg">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground font-semibold">{testimonial.company}</p>
                  </div>
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm italic">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <Card className="inline-block border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-3xl font-bold mb-2">100%</h3>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
                <div className="h-16 w-px bg-border hidden sm:block"></div>
                <div className="text-center sm:text-left">
                  <h3 className="text-3xl font-bold mb-2">50+</h3>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
                <div className="h-16 w-px bg-border hidden sm:block"></div>
                <div className="text-center sm:text-left">
                  <h3 className="text-3xl font-bold mb-2">5★</h3>
                  <p className="text-muted-foreground">Average Rating</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}