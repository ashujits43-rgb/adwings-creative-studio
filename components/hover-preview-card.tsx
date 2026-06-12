"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { useState } from "react";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false
});

type HoverPreviewCardProps = {
  title: string;
  category: string;
  description: string;
  videoUrl?: string;
  imageUrl: string;
};

export function HoverPreviewCard({
  title,
  category,
  description,
  videoUrl,
  imageUrl
}: HoverPreviewCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-panel group relative rounded-[2rem] shadow-violet"
    >
      <div className="relative aspect-[4/5]">
        {hovered && videoUrl ? (
          <div className="absolute inset-0">
            <ReactPlayer
              url={videoUrl}
              playing
              muted
              loop
              width="100%"
              height="100%"
              playsinline
              className="[&>video]:object-cover"
            />
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slateNight via-slateNight/20 to-transparent" />

        <div className="glass-chip absolute left-5 top-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-[0.26em] text-white/80">
          <Sparkles size={14} />
          {category}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="glass-chip mb-4 inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-blue-100">
            <Play size={14} />
            {hovered && videoUrl ? "Preview Playing" : "Hover For Preview"}
          </div>
          <h3 className="font-display text-2xl font-semibold text-white">
            {title}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
