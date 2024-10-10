// lib/utils.ts

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createUrl = (str: string): string => {
  return str
    .replace(/\s+/g, '-')  // Reemplaza espacios con guiones
    .replace(/[áäâà]/g, 'a')
    .replace(/[éëêè]/g, 'e')
    .replace(/[íïîì]/g, 'i')
    .replace(/[óöôò]/g, 'o')
    .replace(/[úüûù]/g, 'u')
    .replace(/ñ/g, 'n');
}

export const decodeUrlParam = (param: string): string => {
  return decodeURIComponent(param);
}

export const compareUrlParams = (param1: string, param2: string): boolean => {
  return createUrl(param1) === createUrl(param2);
}


//Regiones 

export function normalizeZoneName(name: string | undefined | null): string {
  if (!name) {
    return 'Unknown-Zone';
  }

  const lowercaseWords = ['de', 'del', 'la', 'el', 'los', 'las', 'y', 'e', 'o', 'u'];
 
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/gi, '-')
    .split('-')
    .map((word, index) => {
      if (index === 0 || !lowercaseWords.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    })
    .join('-');
}


export function extractTextFromRichText(content: any): string {
  if (typeof content === 'string') {
    return content;
  }
  if (Array.isArray(content)) {
    return content.map(extractTextFromRichText).join('\n');
  }
  if (content && typeof content === 'object') {
    if (content.children) {
      return extractTextFromRichText(content.children);
    }
    if (content.text) {
      return content.text;
    }
    return Object.values(content).map(extractTextFromRichText).join('\n');
  }
  return '';
}
