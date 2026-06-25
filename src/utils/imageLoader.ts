export interface ResponsiveImage {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
}

interface ImageMetadata {
  width: number;
  height: number;
}

const imageSources = import.meta.glob<string>('../assets/images/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
  query: '?w=480&format=webp&q=72',
});

const imageSrcSets = import.meta.glob<string>('../assets/images/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
  query: '?w=320;480;640;768;960;1280;1600&format=avif;webp&q=72&as=srcset',
});

const imageMetadata = import.meta.glob<ImageMetadata>('../assets/images/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
  query: '?as=metadata',
});

function findImageEntry<T>(entries: Record<string, T>, fileName: string): T {
  const normalizedFileName = fileName.replaceAll('\\', '/');
  const match = Object.entries(entries).find(([path]) => path.endsWith(`/${normalizedFileName}`));

  if (!match) {
    throw new Error(`Imagem "${fileName}" nao encontrada em src/assets/images.`);
  }

  return match[1];
}

export function getResponsiveImage(fileName: string, alt: string): ResponsiveImage {
  const metadata = findImageEntry(imageMetadata, fileName);

  return {
    src: findImageEntry(imageSources, fileName),
    srcSet: findImageEntry(imageSrcSets, fileName),
    width: metadata.width,
    height: metadata.height,
    alt,
  };
}
