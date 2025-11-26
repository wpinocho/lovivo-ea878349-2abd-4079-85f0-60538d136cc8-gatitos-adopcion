import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Página de adopción de gatitos
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}
export const IndexUI = ({
  logic
}: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts
  } = logic;
  return <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url('https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/ea878349-2abd-4079-85f0-60538d136cc8/hero-kitten.jpg')`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 bg-accent/90 text-white px-4 py-2 rounded-full mb-4">
              <Heart className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">Un hogar para cada gatito</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Adopta un Gatito y Cambia una Vida
            </h1>
            
            <p className="text-xl text-white/90 mb-8">
              Cada gatito merece un hogar lleno de amor. Dale una segunda oportunidad 
              y gana un compañero fiel para toda la vida.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg" onClick={() => {
              document.getElementById('gatitos-disponibles')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                Ver Gatitos Disponibles
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
                Cómo Funciona
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                100% Vacunados
              </h3>
              <p className="text-muted-foreground text-sm">
                Todos nuestros gatitos están vacunados, desparasitados y con control veterinario.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Asesoría Personalizada
              </h3>
              <p className="text-muted-foreground text-sm">
                Te ayudamos a elegir el gatito perfecto para tu estilo de vida y familia.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Seguimiento Post-Adopción
              </h3>
              <p className="text-muted-foreground text-sm">
                Mantenemos contacto contigo para asegurar que todo vaya bien con tu nuevo amigo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Encuentra a tu Compañero Ideal
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explora nuestras categorías y conoce a los gatitos que están esperando por ti
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {collections.map(collection => <CollectionCard key={collection.id} collection={collection} onViewProducts={handleViewCollectionProducts} />)}
            </div>
          </div>
        </section>}

      {/* Products Section */}
      <section id="gatitos-disponibles" className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2" style={{
              letterSpacing: "0px"
            }}>Todos los Gatitos Disponibles! Prueba</h2>
              <p className="text-muted-foreground" style={{
              letterSpacing: "0px"
            }}>10 gatitos esperando por ti</p>
            </div>
            {selectedCollectionId && <Button variant="outline" onClick={handleShowAllProducts} className="border-accent text-accent hover:bg-accent hover:text-white">
                Ver Todos
              </Button>}
          </div>
          
          {loading ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => <div key={i} className="bg-card rounded-xl h-96 animate-pulse border border-border"></div>)}
            </div> : filteredProducts.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
            </div> : <div className="text-center py-16 bg-card rounded-xl border border-border">
              <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground text-lg">
                No hay gatitos disponibles en este momento.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Vuelve pronto o suscríbete para recibir notificaciones.
              </p>
            </div>}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>;
};