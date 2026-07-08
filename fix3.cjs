const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldChunk = `              <div className="absolute bottom-8 left-8 right-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <h4 className="font-headline-md text-white mb-2">Consumer Tech</h4>
                  <div className="h-1 w-0 group-hover:w-20 bg-metallic-gold-light transition-all duration-300 mb-2"></div>
                  <Link href="/industries" className="flex items-center gap-2 text-metallic-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <span className="font-label-bold uppercase tracking-wider text-sm hover:underline">Learn More</span>
                    <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>`;

const newChunk = `              <div className="absolute bottom-8 left-8 right-8">
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

if (code.includes(oldChunk)) {
  code = code.replace(oldChunk, newChunk);
  fs.writeFileSync('src/app/page.tsx', code);
  console.log("Success!");
} else {
  console.log("Chunk not found!");
}
