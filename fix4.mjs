import fs from 'fs';

let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// The exact string to replace (using a small unique substring to find the right spot)
const searchStr = `<h4 className="font-headline-md text-white mb-2">Consumer Tech</h4>`;

const startIndex = code.lastIndexOf('<div className="absolute bottom-8 left-8 right-8">', code.indexOf(searchStr));
const endIndex = code.indexOf('</div>\n              </div>\n            </div>', startIndex) + 12;

if (startIndex > -1 && endIndex > -1) {
  const newChunk = `<div className="absolute bottom-8 left-8 right-8">
                <h4 className="font-headline-md text-white mb-2">Consumer Tech</h4>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-surface-variant text-sm leading-relaxed pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Transforming the consumer electronics ecosystem with AI-driven insights, smart device connectivity, and hyper-personalized digital experiences.
                    </p>
                  </div>
                </div>
                <div className="h-[2px] w-12 group-hover:w-full bg-metallic-gold-light transition-all duration-500 ease-out mb-4 mt-2"></div>
                <Link href="/industries" className="flex items-center gap-2 text-metallic-gold-light cursor-pointer w-fit group/btn">
                  <span className="font-label-bold uppercase tracking-wider text-sm group-hover/btn:text-white transition-colors">Learn More</span>
                  <span className="material-symbols-outlined text-sm transform group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                </Link>
              </div>`;
  
  code = code.substring(0, startIndex) + newChunk + code.substring(endIndex);
  fs.writeFileSync('src/app/page.tsx', code);
  console.log("Successfully replaced the Consumer Tech block using index splitting!");
} else {
  console.log("Could not find the indices.");
}
