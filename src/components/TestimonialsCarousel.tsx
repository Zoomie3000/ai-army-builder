import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CFO, TechCorp Solutions",
    quote:
      "Sentus eliminated our invoice processing bottleneck. 3 days of work now completes in 3 minutes.",
    metric: "300% faster processing",
    savings: "$200K/yr saved",
    initials: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Ops Director, Global Manufacturing Inc",
    quote:
      "722 agents working around the clock scaled our ops instantly while costs plummeted.",
    metric: "85% cost reduction",
    savings: "$150K/yr saved",
    initials: "MR",
  },
  {
    name: "Emily Watson",
    role: "CEO, StartupX Ventures",
    quote:
      "From drowning in admin to focusing on growth. Sentus liberated our human potential.",
    metric: "20+ hrs saved weekly",
    savings: "$75K/yr saved",
    initials: "EW",
  },
];

export const TestimonialsCarousel = () => {
  return (
    <div className="relative">
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="-ml-4">
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="glass-card h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{t.name}</CardTitle>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed">“{t.quote}”</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500/20 text-green-400">{t.savings}</Badge>
                    <Badge variant="outline" className="text-xs">{t.metric}</Badge>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6" aria-label="Previous testimonial" />
        <CarouselNext className="-right-6" aria-label="Next testimonial" />
      </Carousel>
    </div>
  );
};
