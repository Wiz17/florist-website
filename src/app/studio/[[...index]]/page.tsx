'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '@/lib/sanity.config';

export default function StudioPage() {
  return (
    <>
      <div className='z-50'>
        <NextStudio config={config} />

      </div>
    </>
  )

}
