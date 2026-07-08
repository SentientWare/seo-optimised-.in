import fs from 'fs';

let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Add import if not exists
if (!code.includes('import CaseStudies3DCarousel')) {
  code = code.replace('import TechnologyStack from "@/components/TechnologyStack";', 'import TechnologyStack from "@/components/TechnologyStack";\nimport CaseStudies3DCarousel from "@/components/CaseStudies3DCarousel";');
}

// 2. Replace the grid with the carousel
const startIndex = code.indexOf('<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">');
const endIndex = code.indexOf('{/* Global Delivery Center Section */}');

if (startIndex !== -1 && endIndex !== -1) {
  const newContent = `<CaseStudies3DCarousel />\n          </div>\n        </section>\n\n      `;
  
  // Find the exact closing tags to replace
  // The grid ends before `</div>\n        </section>`
  const closingSection = code.lastIndexOf('</div>\n        </section>', endIndex);
  
  if (closingSection !== -1) {
     code = code.substring(0, startIndex) + `<CaseStudies3DCarousel />\n` + code.substring(closingSection);
     fs.writeFileSync('src/app/page.tsx', code);
     console.log("Successfully replaced Case Studies grid with 3D Carousel!");
  } else {
     console.log("Could not find closing section.");
  }
} else {
  console.log("Could not find start or end index!");
}
