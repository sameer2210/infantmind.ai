import PropTypes from 'prop-types';
import SeoHead from '../components/SeoHead';
import ProductHero from '../components/product/ProductHero';
import ProductIntro from '../components/product/ProductIntro';
import ProductHighlights from '../components/product/ProductHighlights';
import ProductSystemFlow from '../components/product/ProductSystemFlow';
import ProductSpecsTable from '../components/product/ProductSpecsTable';
import ProductEcosystem from '../components/product/ProductEcosystem';
import ProductCTA from '../components/product/ProductCTA';
import Footer from '../components/Footer';

const InfantMindProductPage = ({ onOpenPilot }) => {
  return (
    <div className="w-full min-h-screen bg-[#FBF8F5] text-[#252529]">
      {/* Product Page Unique SEO Metadata */}
      <SeoHead
        title="InfantMind Smart Net — AI-Powered Baby Understanding Platform"
        description="Explore the InfantMind Smart Mosquito Net System featuring optical vision, acoustic mic array, non-contact thermal sensing, and LLM reasoning engine."
        canonicalUrl="https://infantmind.ai/products/infantmind"
        ogType="product"
        ogImage="https://infantmind.ai/img/hero-net.jpg"
      />

      <ProductHero onOpenPilot={onOpenPilot} />
      <ProductIntro />
      <ProductHighlights />
      <ProductSystemFlow />
      <ProductSpecsTable />
      <ProductEcosystem />
      <ProductCTA onOpenPilot={onOpenPilot} />
      <Footer onOpenPilot={onOpenPilot} />
    </div>
  );
};

InfantMindProductPage.propTypes = {
  onOpenPilot: PropTypes.func.isRequired,
};

export default InfantMindProductPage;
