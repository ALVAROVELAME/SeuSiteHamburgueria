interface FlechaProps {
  color?: string; // Permite passar qualquer cor (ex: "#e32828", "text-blue-500", etc.)
  className?: string; // Permite ajustar tamanhos extras se necessário
}

// COMPONENTE: Flecha Esquerda
export function FlechaEsquerda({ color = '#e32828', className = 'w-20 md:w-24' }: FlechaProps) {
  // Verifica se a cor passada é uma classe do Tailwind (ex: começa com 'text-')
  const isTailwindClass = color.startsWith('text-');

  return (
    <div className={`${className} flex items-center ${isTailwindClass ? color : ''}`}>
      <svg 
        viewBox="0 0 400 120" 
        className="w-full h-auto scale-x-[-1]" 
        fill="none" 
        stroke={isTailwindClass ? "currentColor" : color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <line x1="25" y1="60" x2="320" y2="60" />
        <path d="M 45,60 Q 25,48 30,36 Q 40,48 61,60 Z" />
        <path d="M 61,60 Q 41,48 46,36 Q 56,48 77,60 Z" />
        <path d="M 77,60 Q 57,48 62,36 Q 72,48 93,60 Z" />
        <path d="M 93,60 Q 73,48 78,36 Q 88,48 109,60 Z" />
        <path d="M 109,60 Q 89,48 94,36 Q 104,48 125,60 Z" />
        <path d="M 45,60 Q 25,72 30,84 Q 40,72 61,60 Z" />
        <path d="M 61,60 Q 41,72 46,84 Q 56,72 77,60 Z" />
        <path d="M 77,60 Q 57,72 62,84 Q 72,72 93,60 Z" />
        <path d="M 93,60 Q 73,72 78,84 Q 88,72 109,60 Z" />
        <path d="M 109,60 Q 89,72 94,84 Q 104,72 125,60 Z" />
        <path d="M 320,60 Q 330,45 370,60 Q 330,75 320,60 Z" />
      </svg>
    </div>
  );
}

// COMPONENTE: Flecha Direita
export function FlechaDireita({ color = '#e32828', className = 'w-20 md:w-24' }: FlechaProps) {
  const isTailwindClass = color.startsWith('text-');

  return (
    <div className={`${className} flex items-center ${isTailwindClass ? color : ''}`}>
      <svg 
        viewBox="0 0 400 120" 
        className="w-full h-auto" 
        fill="none" 
        stroke={isTailwindClass ? "currentColor" : color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <line x1="25" y1="60" x2="320" y2="60" />
        <path d="M 45,60 Q 25,48 30,36 Q 40,48 61,60 Z" />
        <path d="M 61,60 Q 41,48 46,36 Q 56,48 77,60 Z" />
        <path d="M 77,60 Q 57,48 62,36 Q 72,48 93,60 Z" />
        <path d="M 93,60 Q 73,48 78,36 Q 88,48 109,60 Z" />
        <path d="M 109,60 Q 89,48 94,36 Q 104,48 125,60 Z" />
        <path d="M 45,60 Q 25,72 30,84 Q 40,72 61,60 Z" />
        <path d="M 61,60 Q 41,72 46,84 Q 56,72 77,60 Z" />
        <path d="M 77,60 Q 57,72 62,84 Q 72,72 93,60 Z" />
        <path d="M 93,60 Q 73,72 78,84 Q 88,72 109,60 Z" />
        <path d="M 109,60 Q 89,72 94,84 Q 104,72 125,60 Z" />
        <path d="M 320,60 Q 330,45 370,60 Q 330,75 320,60 Z" />
      </svg>
    </div>
  );
}