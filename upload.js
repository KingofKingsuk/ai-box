import { put } from "@vercel/blob";
import fs from 'fs';
import path from 'path';

// Get the path to your image (make sure this matches your filename)
const imagePath = path.join(process.cwd(), 'PI Case website.png');

// Read the image file
const imageBuffer = fs.readFileSync(imagePath);

// Upload with public access
const { url } = await put('PI-Case-website.png', imageBuffer, {
  access: 'public',
});

console.log('✅ Upload successful!');
console.log('Your image URL is:', url);
