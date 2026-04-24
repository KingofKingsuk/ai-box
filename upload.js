import { put } from "@vercel/blob";

// Upload your image file
const file = await fetch('path/to/your/PI Case website.png'); // or use file from disk
const { url } = await put('PI-Case-website.png', file, { 
  access: 'public' 
});

console.log('Your image URL is:', url);
