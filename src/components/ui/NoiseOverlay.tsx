import { memo } from 'react';

/**
 * Premium SVG Noise texture overlay.
 * Blends a subtle grain texture to card surfaces and grids to emulate modern minimal UX systems.
 */
export const NoiseOverlay = memo(function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.015] z-[9999]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
      aria-hidden="true"
    />
  );
});
