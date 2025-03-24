'use client'
import { em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PcComponent from './components/PcComponent';
import SpComponent from './components/SpComponent';

export default function Page() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  if (isMobile) {
    console.log('sp');
    return (
      <SpComponent />
    );
  } else {
    return <PcComponent />; // ここで正しく return する
  }
}
