import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

if (!BLOB_TOKEN) {
  console.error('❌ Error: BLOB_READ_WRITE_TOKEN is missing in .env.local');
  console.log('Follow these steps to get it:');
  console.log('1. Go to your Vercel Dashboard -> Storage -> Create Database -> Blob.');
  console.log('2. Click on the "Settings" tab of your Blob store.');
  console.log('3. Copy the "BLOB_READ_WRITE_TOKEN" and add it to your .env.local file.');
  process.exit(1);
}

const videosDir = path.join(process.cwd(), 'public', 'videos');
const videos = [
  'project1.mov',
  'project2.mp4',
  'project3.mp4',
  'project4.mp4'
];

async function uploadVideos() {
  console.log('🚀 Starting video upload to Vercel Blob...');
  
  const results = {};

  for (const video of videos) {
    const filePath = path.join(videosDir, video);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ Warning: ${video} not found in public/videos/`);
      continue;
    }

    console.log(`Uploading ${video}...`);
    try {
      const fileBuffer = fs.readFileSync(filePath);
      const blob = await put(video, fileBuffer, {
        access: 'public',
        token: BLOB_TOKEN,
      });
      console.log(`✅ Uploaded ${video}: ${blob.url}`);
      results[video.split('.')[0]] = blob.url;
    } catch (error) {
      console.error(`❌ Failed to upload ${video}:`, error.message);
    }
  }

  console.log('\n✨ Finished! Copy these URLs into your src/config/videos.ts:');
  console.log(JSON.stringify(results, null, 2));
}

uploadVideos();
