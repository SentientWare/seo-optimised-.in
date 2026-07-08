const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

if (!code.includes('import Image from "next/image"')) {
  code = code.replace('import Link from "next/link";', 'import Link from "next/link";\nimport Image from "next/image";');
}

// Replace Pillar Images
code = code.replace(/<img\s+src="(\/assets\/[^"]+)"\s+alt="([^"]+)"\s+className="absolute inset-0 w-full h-full object-cover ([^"]+)"\s*\/>/g, 
  '<Image src="$1" alt="$2" fill className="object-cover $3" />');

// Replace Industry Images
code = code.replace(/<img\s+alt="([^"]+)"\s+className="absolute inset-0 w-full h-full object-cover ([^"]+)"\s+src="(\/assets\/[^"]+)"\s*\/>/g, 
  '<Image src="$3" alt="$1" fill className="object-cover $2" />');

// Replace Case Study Image
code = code.replace(/<img\s+alt="([^"]+)"\s+className="w-full h-full object-cover ([^"]+)"\s+src="(\/assets\/[^"]+)"\s*\/>/g, 
  '<Image src="$3" alt="$1" fill className="object-cover $2" />');

// Replace Global Map Image
code = code.replace(/<img\s+className="w-full h-full object-cover"\s+alt="([^"]+)"\s+src="(\/assets\/[^"]+)"\s*\/>/g, 
  '<Image src="$2" alt="$1" fill className="object-cover" />');

fs.writeFileSync('src/app/page.tsx', code);
console.log('Images replaced!');
