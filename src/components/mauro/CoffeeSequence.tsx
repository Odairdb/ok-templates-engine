'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const FRAME_COUNT = 120;

export default function CoffeeSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Criamos um valor puro de movimento para os textos (substituindo o useScroll do Framer)
  const smoothProgress = useMotionValue(0);

  // Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${i}.jpg`;
      img.onload = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          setImages(imgArray);
          setLoaded(true);
        }
      };
      imgArray.push(img);
    }
  }, []);

  // Bulletproof Scroll Tracking
  useEffect(() => {
    if (!loaded) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      // Distância que rolamos a partir do topo do documento
      const scrollTop = window.scrollY;
      
      // O tamanho da tela
      const viewportHeight = window.innerHeight;
      
      // A altura total do nosso container (400vh)
      const containerHeight = containerRef.current.offsetHeight;
      
      // O espaço "rolável" dentro do container (altura do container menos a tela)
      const scrollableDistance = containerHeight - viewportHeight;
      
      // Progresso de 0.0 a 1.0 (limitado a 1.0 caso rolemos mais para baixo no site)
      let p = scrollTop / scrollableDistance;
      if (p < 0) p = 0;
      if (p > 1) p = 1;

      smoothProgress.set(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Chama uma vez para inicializar
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [loaded, smoothProgress]);

  // Draw on Canvas based on Scroll
  useEffect(() => {
    if (!loaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = (progressValue: number) => {
      // Calculate which frame to show
      let frameIndex = Math.floor(progressValue * (FRAME_COUNT - 1));
      if (frameIndex < 0) frameIndex = 0;
      if (frameIndex >= FRAME_COUNT) frameIndex = FRAME_COUNT - 1;

      const img = images[frameIndex];
      if (!img) return;

      // Handle responsive scaling (COVER logic - preenche toda a tela)
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        // Canvas é mais largo que a imagem (corta em cima/embaixo)
        drawWidth = canvas.width;
        drawHeight = img.height * (canvas.width / img.width);
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        // Imagem é mais larga que o canvas (corta as laterais)
        drawHeight = canvas.height;
        drawWidth = img.width * (canvas.height / img.height);
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Initial render
    render(0);

    // Subscribe to smooth scroll updates
    const unsubscribe = smoothProgress.on('change', (latest) => {
      render(latest);
    });

    return () => unsubscribe();
  }, [loaded, images, smoothProgress]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Trigger a re-render by slightly nudging the spring or just redrawing the current frame
        // In a real app we'd force a redraw of current frame, but scroll handles it mostly.
      }
    };
    
    handleResize(); // set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // SCROLLYTELLING BEATS (Transforms)
  // Beat A: 0-20%
  const beatAOpacity = useTransform(smoothProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const beatAY = useTransform(smoothProgress, [0, 0.05, 0.15, 0.2], [20, 0, 0, -20]);

  // Beat B: 25-45%
  const beatBOpacity = useTransform(smoothProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const beatBY = useTransform(smoothProgress, [0.25, 0.3, 0.4, 0.45], [20, 0, 0, -20]);

  // Beat C: 50-70%
  const beatCOpacity = useTransform(smoothProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const beatCY = useTransform(smoothProgress, [0.5, 0.55, 0.65, 0.7], [20, 0, 0, -20]);

  // Beat D: 75-95%
  const beatDOpacity = useTransform(smoothProgress, [0.75, 0.8, 0.9, 0.95], [0, 1, 1, 0]);
  const beatDY = useTransform(smoothProgress, [0.75, 0.8, 0.9, 0.95], [20, 0, 0, -20]);


  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      
      {!loaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white">
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-amber-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-sm font-medium tracking-widest uppercase text-white/60">
            Extraindo a Essência... {progress}%
          </p>
        </div>
      )}

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        <canvas 
          ref={canvasRef} 
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        
        {/* Overlays Container */}
        <div className="absolute inset-0 pointer-events-none z-10">
          
          {/* Beat A */}
          <motion.div 
            style={{ opacity: beatAOpacity, y: beatAY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <h1 className="text-5xl md:text-8xl font-serif text-white/90 drop-shadow-2xl">
              Do Genoma à Xícara
            </h1>
            <p className="mt-4 text-xl text-amber-500 font-medium tracking-wider">
              A pureza do Master Chef.
            </p>
          </motion.div>

          {/* Beat B */}
          <motion.div 
            style={{ opacity: beatBOpacity, y: beatBY }}
            className="absolute top-1/2 left-[10%] -translate-y-1/2 max-w-lg"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white/90 drop-shadow-lg">
              Grãos Selecionados
            </h2>
            <p className="mt-4 text-lg text-white/60 leading-relaxed">
              Cultivados nas melhores altitudes, colhidos no momento exato e avaliados para atingir as maiores notas no protocolo SCA.
            </p>
          </motion.div>

          {/* Beat C */}
          <motion.div 
            style={{ opacity: beatCOpacity, y: beatCY }}
            className="absolute top-1/2 right-[10%] -translate-y-1/2 max-w-lg text-right"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white/90 drop-shadow-lg">
              Torra Perfeita
            </h2>
            <p className="mt-4 text-lg text-white/60 leading-relaxed">
              O controle milimétrico do calor para revelar as notas sensoriais mais complexas de cada grão, sem artifícios.
            </p>
          </motion.div>

          {/* Beat D */}
          <motion.div 
            style={{ opacity: beatDOpacity, y: beatDY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-white/90 drop-shadow-2xl">
              Pronto para degustar?
            </h2>
            <button className="mt-8 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase tracking-widest rounded-full transition-colors pointer-events-auto">
              Fale com Especialista
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
