// lib/csvParser.ts
import { promises as fs } from 'fs';
import csv from 'csv-parser';
import path from 'path';
import { JSDOM } from 'jsdom';
import { Readable } from 'stream';

interface K2Item {
  title: string;
  content: string;
  images: string[];
  links: { text: string; url: string }[];
}

function extractImagesAndLinks(html: string): { images: string[]; links: { text: string; url: string }[] } {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const images = Array.from(document.querySelectorAll('img')).map(img => img.src);
  const links = Array.from(document.querySelectorAll('a')).map(a => ({ text: a.textContent || '', url: a.href }));

  return { images, links };
}

export async function parseCSV(): Promise<K2Item[]> {
  const results: K2Item[] = [];
  const csvPath = path.join(process.cwd(), 'data', 'k2.csv');

  const fileContent = await fs.readFile(csvPath, 'utf-8');
  const readableStream = Readable.from(fileContent);

  return new Promise((resolve, reject) => {
    readableStream
      .pipe(csv())
      .on('data', (data: any) => {
        const { images, links } = extractImagesAndLinks(data.content);
        results.push({
          title: data.title,
          content: data.content,
          images,
          links
        });
      })
      .on('end', () => {
        console.log('CSV parsed');
        resolve(results);
      })
      .on('error', reject);
  });
}