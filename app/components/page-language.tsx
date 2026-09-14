'use client';
import { useEffect } from 'react';
export function PageLanguage({ locale }: { locale: 'ko' | 'en' }) {
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  return null;
}
