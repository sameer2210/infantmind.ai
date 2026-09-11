const ProductSpecsTable = () => {
  const specCategories = [
    {
      category: 'HARDWARE PLATFORM',
      items: [
        { name: 'Form Factor', value: 'Smart Mosquito Net Enclosure System' },
        { name: 'Optical Camera', value: '12MP High-Sensitivity Vision Sensor' },
        { name: 'Acoustic Array', value: 'Multi-Directional Noise-Canceling Mic Array' },
        { name: 'Thermal Sensor', value: 'Infrared Non-Contact Thermal Imaging Array' },
        { name: 'Power Architecture', value: 'Low-Power Edge Compute Module' },
      ],
    },
    {
      category: 'AI & REASONING ENGINE',
      items: [
        { name: 'Signal Architecture', value: 'Multimodal Fusion (Vision + Audio + Thermal)' },
        { name: 'Cry Recognition', value: 'Acoustic Frequency & Emotion Classification' },
        { name: 'Pose Landmark Model', value: 'Infant Gesture & Pain Anomaly Detection' },
        { name: 'Reasoning Engine', value: 'LLM Pediatric Context Interpretation Layer' },
        { name: 'Accuracy Model', value: 'Hybrid Rule-Based + Machine Learning Engine' },
      ],
    },
    {
      category: 'PRIVACY & DATA SECURITY',
      items: [
        { name: 'Edge Processing', value: 'On-Device Inference Where Possible' },
        { name: 'Encryption', value: 'AES-256 Encrypted Cloud Storage & Stream' },
        { name: 'Data Control', value: 'Parent-Controlled Sharing & Consent Architecture' },
      ],
    },
    {
      category: 'BUSINESS & UNIT ECONOMICS',
      items: [
        { name: 'Device Target Price', value: '₹10,000 – ₹15,000' },
        { name: 'Monthly Subscription', value: '₹299 – ₹499 / month' },
        { name: 'Gross Margin', value: '~60%+ (Manufacturing: ₹3,000–₹4,000)' },
      ],
    },
  ];

  return (
    <section id="product-specs" className="relative w-full bg-[#FBF8F5] text-[#252529] py-32 px-6 sm:px-12 border-t border-[#E7DDD9]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-3">
          <div className="pill-badge border-[#E7DDD9] bg-[#F7F1EE] text-[#626268]">
            <span>04 / TECHNICAL SPECIFICATIONS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[0.95] text-[#252529]">
            TECHNICAL <span className="text-[#B66F7D]">SPECIFICATIONS</span>
          </h2>
          <p className="max-w-md text-[#626268] text-sm sm:text-base leading-relaxed">
            Detailed specifications of the InfantMind hardware platform and multimodal AI engine.
          </p>
        </div>

        {/* Specifications Grid Table */}
        <div className="space-y-12">
          {specCategories.map((cat, idx) => (
            <div key={idx} className="glass-card rounded-3xl p-8 border border-[#E7DDD9] bg-[#FFFDFC] shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#E7DDD9] pb-4">
                <h3 className="font-mono text-xs font-bold text-[#B66F7D] uppercase tracking-widest">
                  {cat.category}
                </h3>
                <span className="font-mono text-[10px] text-[#8C8C91] uppercase">SPECIFICATION MATRIX</span>
              </div>

              <div className="divide-y divide-[#E7DDD9]">
                {cat.items.map((item, i) => (
                  <div key={i} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-display text-sm font-semibold text-[#252529]">{item.name}</span>
                    <span className="font-mono text-xs text-[#626268] sm:text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSpecsTable;
