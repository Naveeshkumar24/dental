import { Mail, MapPin, Clock, Phone } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-2xl">🦷</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Sarah Johnson</h3>
                <p className="text-primary-foreground/70 text-sm">BDS, Dental Surgeon</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-md mb-6">
              Providing compassionate, advanced, and affordable dental care
              focused on long-term oral health and confident smiles.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:Naveeshk6@gmail.com" 
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  Naveeshk6@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Healthcare Plaza,<br />
                  Medical District, City - 400001
                </span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-primary-foreground/80">Mon - Sat</span>
              </li>
              <li className="pl-8 text-primary-foreground/80">10:00 AM - 7:00 PM</li>
              <li className="pl-8 text-primary-foreground/60 text-sm">Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2026 Dental Clinic. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
