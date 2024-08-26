// hooks/useRegionHover.ts
import { useState } from 'react'

export const useRegionHover = () => {
  const [activeRegion, setActiveRegion] = useState<number | null>(null)

  return { activeRegion, setActiveRegion }
}