import { useSettings } from '@/contexts/SettingsContext'
import { getLogoUrl } from '@/lib/logo-utils'

export const BrandLogoLeft = () => {
  const { logos } = useSettings()

  if (!logos) {
    return (
      <div className="flex items-center gap-2 ml-2">
        <span className="text-2xl">🐱</span>
        <h1 className="text-xl font-bold text-foreground">Adopta un Gatito</h1>
      </div>
    )
  }

  const mainLogoUrl = getLogoUrl(logos, 'main_logo')

  if (!mainLogoUrl) {
    return (
      <div className="flex items-center gap-2 ml-2">
        <span className="text-2xl">🐱</span>
        <h1 className="text-xl font-bold text-foreground">Adopta un Gatito</h1>
      </div>
    )
  }

  return (
    <a href="/" aria-label="Home" className="ml-2">
      <img 
        src={mainLogoUrl} 
        alt="Main logo"
        className="h-8 w-auto object-contain" 
      />
    </a>
  )
}