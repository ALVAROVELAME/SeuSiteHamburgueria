/// <reference types="vite/client" />

declare module '*?w=*&format=*&q=*' {
  const src: string;
  export default src;
}

// Captura qualquer import que contenha "as=srcset" em qualquer lugar dos parâmetros de busca
declare module '*as=srcset' {
  const srcSet: string;
  export default srcSet;
}

// Captura qualquer import que contenha "as=metadata" em qualquer lugar dos parâmetros de busca
declare module '*as=metadata' {
  const metadata: {
    src: string;
    width: number;
    height: number;
    format?: string;
    space?: string;
    channels?: number;
    density?: number;
  };
  export default metadata;
}
