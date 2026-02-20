import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Heart, BookOpen, Award } from "lucide-react";
import { Achievement } from "@/types";
import { mockAchievements } from "@/data/mockData";

const iconMap = [Trophy, Users, Heart, BookOpen, Award];

const Achievements = () => {
  const achievements: Achievement[] = mockAchievements;

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Trophy className="w-4 h-4" />
            <span>Professional Highlights</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & Experience
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Clinical experience and milestones achieved through hands-on dental practice
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[index % iconMap.length];

            return (
              <Card
                key={achievement.id}
                className="border hover:shadow-xl transition"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="font-bold text-xl mb-2">
                    {achievement.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
