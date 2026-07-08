import fs from 'fs';

let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Add import if not exists
if (!code.includes('import CaseStudies3DCarousel')) {
  code = code.replace('import TechnologyStack from "@/components/TechnologyStack";', 'import TechnologyStack from "@/components/TechnologyStack";\nimport CaseStudies3DCarousel from "@/components/CaseStudies3DCarousel";');
}

// 2. Replace the grid with the carousel
const targetRegex = /<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">(.|\n)*?\{?\/\* Global Delivery Center Section \*\/\}/;

const newContent = `<CaseStudies3DCarousel />
        </div>
      </section>

      {/* Global Delivery Center Section */}`;

if (targetRegex.test(code)) {
  code = code.replace(targetRegex, newContent);
  fs.writeFileSync('src/app/page.tsx', code);
  console.log("Successfully replaced Case Studies grid with 3D Carousel!");
} else {
  console.log("Could not find the target grid!");
}
