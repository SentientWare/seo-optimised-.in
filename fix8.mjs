import fs from 'fs';

let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /\{\/\* Our Clients Section \*\/\}(.|\n)*?(?=\{\/\* Case Studies Section \*\/\})/;

const newSection = `{/* Our Clients Section */}
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
        <div className="relative w-full flex overflow-hidden group/marquee">
          {/* Fading edges for marquee */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max animate-scroll-left group-hover/marquee:[animation-play-state:paused] whitespace-nowrap py-8">
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex items-center justify-center gap-12 md:gap-24 px-6 md:px-12 shrink-0">
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
                  <div key={idx} className="flex items-center justify-center transition-all duration-500 group-hover/marquee:opacity-30 group-hover/marquee:grayscale hover:!opacity-100 hover:!grayscale-0 hover:scale-125 hover:drop-shadow-2xl cursor-pointer w-28 h-14 md:w-40 md:h-20 shrink-0">
                    <img src={client.icon} alt={client.name} className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>\n\n      `;

if (regex.test(code)) {
  code = code.replace(regex, newSection);
  fs.writeFileSync('src/app/page.tsx', code);
  console.log("Successfully updated Our Clients section!");
} else {
  console.log("Could not find Our Clients section!");
}
