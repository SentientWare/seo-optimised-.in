import fs from 'fs';

let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Find where the broken link is:
const targetString = `                </Link>
              <span className="text-metallic-gold-light font-label-bold uppercase tracking-widest mb-4 block">`;

const fixedContent = `                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-24 bg-surface border-y border-surface-variant overflow-hidden">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop mb-16">
          <div className="text-center">
            <span className="text-metallic-gold-light font-label-bold uppercase tracking-widest mb-4 block">
              Trusted By Industry Leaders
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary">
              Our Clients & Partners
            </h2>
          </div>
        </div>
        
        {/* Infinite Marquee */}
        <div className="relative w-full flex overflow-hidden group">
          {/* Fading edges for marquee */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll-left group-hover:[animation-play-state:paused] whitespace-nowrap">
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex items-center justify-around gap-16 md:gap-32 px-8 md:px-16 min-w-full">
                {[
                  { name: "Microsoft", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoft/microsoft-original.svg" },
                  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
                  { name: "Amazon", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
                  { name: "IBM", icon: "https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg" },
                  { name: "Oracle", icon: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg" },
                  { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg" },
                  { name: "Salesforce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" }
                ].map((client, idx) => (
                  <div key={idx} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 w-40 h-20 shrink-0 cursor-pointer">
                    <img src={client.icon} alt={client.name} className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 bg-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-metallic-gold-light font-label-bold uppercase tracking-widest mb-4 block">`;

if (code.includes(targetString)) {
  code = code.replace(targetString, fixedContent);
  fs.writeFileSync('src/app/page.tsx', code);
  console.log("Successfully restored structure and added Our Clients section!");
} else {
  console.log("Could not find broken string!");
}
