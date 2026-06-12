import { getResponsiveImage } from '../utils/imageLoader';
import type { ResponsiveImage } from '../utils/imageLoader';

export interface MenuCategory {
  id: number;
  title: string;
  description: string;
  rating: string;
  price: string;
  imageFile: string;
  imagem: ResponsiveImage;
}

const menuItems = [
  {
    id: 1,
    title: 'Smash Burger Duplo',
    description: 'Dois burgers prensados na chapa, queijo derretido, molho da casa e pao tostado.',
    rating: '4.9',
    price: 'R$ 32,90',
    imageFile: 'SmashBurgerDuplo.webp',
  },
  {
    id: 2,
    title: 'Cheddar Bacon Supreme',
    description: 'Burger artesanal com cheddar cremoso, bacon crocante e cebola caramelizada.',
    rating: '5.0',
    price: 'R$ 36,90',
    imageFile: 'CheddarBaconSupreme.webp',
  },
  {
    id: 3,
    title: 'Batata Frita Especial',
    description: 'Batatas sequinhas com cheddar, bacon e finalizacao temperada da casa.',
    rating: '4.8',
    price: 'R$ 22,90',
    imageFile: 'BatataFritaEspecial.webp',
  },
  {
    id: 4,
    title: 'Aneis de Cebola Crocantes',
    description: 'Aneis dourados, crocantes por fora e macios por dentro, com molho especial.',
    rating: '4.8',
    price: 'R$ 19,90',
    imageFile: 'AneisDeCebolaCrocantes.webp',
  },
] satisfies Omit<MenuCategory, 'imagem'>[];

export const menuCategories: MenuCategory[] = menuItems.map((item) => ({
  ...item,
  imagem: getResponsiveImage(item.imageFile, item.title),
}));
