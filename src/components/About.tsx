import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Award, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { apiRequest, API_ENDPOINTS } from "@/config/api";
import { ABOUT_FALLBACK } from "@/data/mockData";

interface AboutResponse {
  content: string;
}

const About = () => {
  const [content, setContent] = useState<string>(ABOUT_FALLBACK);

  useEffect(() => {
    apiRequest<AboutResponse>(API_ENDPOINTS.ABOUT)
      .then((res) => {
        if (res?.content?.trim()) {
          setContent(res.content);
        }
      })
      .catch(() => {
        // ❌ Backend or DB error → fallback already set
        console.warn("Using fallback About content");
      });
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Focused on clear communication, comfort, and personalized treatment planning",
    },
    {
      icon: Shield,
      title: "Ethical Clinical Practice",
      description:
        "Strong commitment to ethical dentistry and evidence-based care",
    },
    {
      icon: Award,
      title: "BDS Qualified Dentist",
      description:
        "Bachelor of Dental Surgery from Government Dental College, Bangalore",
    },
    {
      icon: Users,
      title: "Team-Oriented Professional",
      description:
        "Experienced in collaborative, multidisciplinary dental environments",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=500&fit=crop"
              alt="Dental Clinic"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-primary">Dr. Sayana Sebastian</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed whitespace-pre-line">
              {content}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border bg-secondary/30">
                  <CardContent className="p-4 flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;