// 1. Declaração de tipos para os metadados do vite-imagetools
// Isso resolve o erro de compilação do TypeScript ao acessar .src, .width e .height
interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
  space: string;
  channels: number;
  density: number;
}

// Importação automática de resoluções e metadados com vite-imagetools
import smashSrcset from '../assets/images/SmashBurgerDuplo.webp?w=400;800;1200&format=webp&q=75&as=srcset';
import smashMetaImport from '../assets/images/SmashBurgerDuplo.webp?as=metadata';

import cheddarSrcset from '../assets/images/CheddarBaconSupreme.webp?w=400;800;1200&format=webp&q=75&as=srcset';
import cheddarMetaImport from '../assets/images/CheddarBaconSupreme.webp?as=metadata';

import batataSrcset from '../assets/images/BatataFritaEspecial.webp?w=400;800;1200&format=webp&q=75&as=srcset';
import batataMetaImport from '../assets/images/BatataFritaEspecial.webp?as=metadata';

import aneisSrcset from '../assets/images/AneisDeCebolaCrocantes.webp?w=400;800;1200&format=webp&q=75&as=srcset';
import aneisMetaImport from '../assets/images/AneisDeCebolaCrocantes.webp?as=metadata';

// Realizando o cast tipado dos metadados
const smashMeta = smashMetaImport as unknown as ImageMetadata;
const cheddarMeta = cheddarMetaImport as unknown as ImageMetadata;
const batataMeta = batataMetaImport as unknown as ImageMetadata;
const aneisMeta = aneisMetaImport as unknown as ImageMetadata;

export interface CardapioItem {
  alt: string;
  description: string;
  rating: string;
  srcSet: string;
  src: string;
  width: number;
  height: number;
}

export const menuCategories: CardapioItem[] = [
  {
    alt: "Smash Burger Duplo",
    description: "Dois blends de 100g grelhados no ponto certo, muito queijo cheddar derretido e molho artesanal.",
    rating: "5.0",
    srcSet: smashSrcset,
    src: smashMeta.src,
    width: smashMeta.width,
    height: smashMeta.height
  },
  {
    alt: "Cheddar & Bacon Supreme",
    description: "Blend de 150g extremamente suculento, coberto por uma avalanche de bacon crocante e creme de queijo.",
    rating: "4.9",
    srcSet: cheddarSrcset,
    src: cheddarMeta.src,
    width: cheddarMeta.width,
    height: cheddarMeta.height
  },
  {
    alt: "Batata Frita Especial",
    description: "Batatas fritas super crocantes por fora e macias por dentro, com tempero especial da casa.",
    rating: "4.8",
    srcSet: batataSrcset,
    src: batataMeta.src,
    width: batataMeta.width,
    height: batataMeta.height
  },
  {
    alt: "Anéis de Cebola Crocantes",
    description: "Anéis de cebola gigantes empanados com uma casca grossa e super crocante, fritos na hora.",
    rating: "4.7",
    srcSet: aneisSrcset,
    src: aneisMeta.src,
    width: aneisMeta.width,
    height: aneisMeta.height
  }
];