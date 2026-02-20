import { Button } from "@/components/ui/button";
import { Calendar, Stethoscope } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary via-background to-accent overflow-hidden"
    >
      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="animate-fade-in-up max-w-xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4" />
              <span>Professional Dental Care</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Dr. Sayana Sebastian,{" "}
              <span className="text-primary">BDS</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Dental Surgeon
            </p>

            <p className="text-muted-foreground text-lg mb-10">
              Compassionate dentist focused on restorative dentistry,
              patient education, and comprehensive oral healthcare
              using modern clinical practices.
            </p>

            
          </div>

          {/* RIGHT DENTAL VISUAL FILL */}
          <div className="relative animate-fade-in-delay flex justify-center lg:justify-end">

            {/* DENTAL COLOR PANEL */}
            <div className="relative w-[22rem] h-[26rem] rounded-3xl bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 shadow-inner">

              {/* Abstract dental blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute bottom-6 -left-8 w-32 h-32 bg-primary/15 rounded-full blur-2xl" />

              {/* INFO CARDS */}
              <div className="absolute top-10 left-6 bg-card p-4 rounded-xl shadow-lg border w-56">
                <p className="font-semibold text-foreground">
                  Registered Dentist
                </p>
                <p className="text-sm text-muted-foreground">
                  Karnataka State Dental Council
                </p>
              </div>

              <div className="absolute bottom-10 right-6 bg-card p-4 rounded-xl shadow-lg border w-56">
                <p className="font-semibold text-foreground">
                  2019 – 2024
                </p>
                <p className="text-sm text-muted-foreground">
                  Clinical Experience
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
