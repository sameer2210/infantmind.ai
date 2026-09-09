import PropTypes from 'prop-types';
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
    <div className="w-full min-h-screen bg-[#07080a] text-white">
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
