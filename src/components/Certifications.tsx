import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import { Certification } from "@/types";
import { API_ENDPOINTS, apiRequest } from "@/config/api";
import { mockCertifications } from "@/data/mockData";

const Certifications = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const data = await apiRequest<Certification[]>(API_ENDPOINTS.CERTIFICATIONS);
        setCertifications(data);
      } catch {
        setCertifications(mockCertifications);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  if (loading) {
    return (
      <section id="certifications" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          Loading certifications...
        </div>
      </section>
    );
  }

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Education & Training</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & Qualifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic qualifications and professional certifications supporting clinical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.id}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex gap-4">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.institution}</p>
                  <span className="inline-block mt-2 bg-accent px-3 py-1 rounded-full text-xs">
                    {cert.year}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
