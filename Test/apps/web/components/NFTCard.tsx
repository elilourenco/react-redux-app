'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

// Gerador de fallback SVG local - SEMPRE funciona
const generateFallbackSVG = (text: string, width: number = 800, height: number = 800) => {
  const svgContent = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#2d2d2d;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#gradient)"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" 
          fill="#fff" text-anchor="middle" dy=".3em" font-weight="bold">
      ${text.length > 15 ? text.substring(0, 15) + '...' : text}
    </text>
  </svg>`;

  return `data:image/svg+xml;base64,${btoa(svgContent)}`;
};

export default function NFTCard({ nft }: { nft: any }) {
  const [imgError, setImgError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  
  const img = useMemo(() => {
    // Se já temos uma source válida, usa ela
    if (currentSrc && !imgError) {
      return currentSrc;
    }

    // Se imageUrl existe e não estamos em estado de erro, tenta usar
    if (nft.imageUrl && !imgError) {
      return nft.imageUrl;
    }

    // Fallback IMEDIATO para SVG local - SEMPRE funciona
    return generateFallbackSVG(nft.name);
    
  }, [nft, imgError, currentSrc]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log('Image failed, using fallback for:', nft.name);
    
    // Marca que houve erro e vai direto para fallback local
    setImgError(true);
    setCurrentSrc(generateFallbackSVG(nft.name));
    
    // Previne múltiplas tentativas
    e.currentTarget.src = generateFallbackSVG(nft.name);
  };

  return (
    <Link
      href={`/nft/${nft._id}`}
      className="group card p-2 hover:scale-[1.01] transition tilt sheen"
    >
      <div className="relative w-full aspect-square rounded-xl overflow-hidden">
        <Image
          src={img}
          alt={nft.name}
          fill
          className="object-cover transition-transform group-hover:scale-[1.03]"
          onError={handleImageError}
          priority={false}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>
      <div className="px-2 py-3">
        <div className="text-sm font-medium truncate">{nft.name}</div>
        <div className="flex items-center justify-between mt-1">
          {nft.onSale && nft.price ? (
            <div className="text-gold text-sm">{nft.price} ETH</div>
          ) : (
            <div className="text-white/60 text-xs">Not for sale</div>
          )}
          <div className="text-xs text-white/60">
            {nft.collection?.name || '--'}
          </div>
        </div>
      </div>
    </Link>
  );
}
