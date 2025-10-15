"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import ButtonSlideBackground from '@/components/button/ButtonSlideBackground';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { id: 'heroImage', url: 'https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A young couple having milkshakes and pizza at a cozy cafe. Relaxed and joyful atmosphere.' },
  { id: 'aboutImage', url: 'https://images.pexels.com/photos/5908216/pexels-photo-5908216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Smiling Asian woman spreading tomato sauce on pizza dough while looking at funny female covering eyes with tomato slices in kitchen' }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant={'text-stagger'}
      defaultTextAnimation={'entrance-slide'}
      borderRadius={'rounded'}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="My Pizzeria" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to My Pizzeria"
            description="Experience the Authentic Taste of Italy."
            imageSrc={assetMap.find(a => a.id === 'heroImage')?.url}
            buttons={[{ text: 'View Menu', href: 'menu' }]}
            className="bg-yellow-100 text-gray-800"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Passionate about Pizza!"
            buttons={[{ text: 'Learn More', href: 'about' }]}
            className="bg-yellow-100 text-gray-800"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: '1', name: 'Margherita Pizza', price: '$12', imageSrc: assetMap.find(a => a.id === 'aboutImage')?.url },
              { id: '2', name: 'Pepperoni Pizza', price: '$15', imageSrc: assetMap.find(a => a.id === 'aboutImage')?.url },
              { id: '3', name: 'Veggie Extravaganza', price: '$14', imageSrc: assetMap.find(a => a.id === 'aboutImage')?.url }
            ]}
            className="bg-yellow-100 text-gray-800"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Contact Us"
            title="Get in Touch with Us"
            description="We'd love to hear from you! Reach out with any questions or feedback."
            inputPlaceholder="Your email"
            buttonText="Send"
            termsText="We respect your privacy. Unsubscribe anytime."
            className="bg-yellow-100 text-gray-800"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: 'Menu', items: [{ label: 'Pizza', href: 'menu' }, { label: 'Drinks', href: 'drinks' }] },
              { title: 'Contact', items: [{ label: 'Email Us', href: 'contact' }, { label: 'Location', href: 'location' }] }
            ]}
            copyrightText="© 2025 My Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
