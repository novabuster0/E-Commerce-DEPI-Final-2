import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PairsWellWith = ({ products = [], onQuickAdd }) => {
  const navigate = useNavigate();
  const [addedId, setAddedId] = useState(null);

  const handleOpenProduct = (product) => {
    navigate("/product", { state: { product } });
  };

  const handleAddClick = (product) => {
    onQuickAdd(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1000);
  };

  return (
    <section className="mt-14 pt-10 border-t border-slate-200/70">
      {/* الهيدر */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <span className="block text-[10px] font-bold tracking-widest uppercase text-[#2563eb] mb-1">
            MODULAR INTEGRATION
          </span>
          <h2 className="text-lg sm:text-xl font-black tracking-tight text-slate-900 uppercase">
            PAIRS WELL WITH
          </h2>
        </div>

        {/* أسهم التنقل */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 cursor-pointer text-xs"
            aria-label="Previous items"
          >
            ‹
          </button>
          <button
            type="button"
            className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 cursor-pointer text-xs"
            aria-label="Next items"
          >
            ›
          </button>
        </div>
      </div>

      {/* شبكة الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const isAdded = addedId === product.id;

          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                {/* صورة المنتج + البادج */}
                <div
                  onClick={() => handleOpenProduct(product)}
                  className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100 mb-4 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span
                      className={`absolute top-3 left-3 text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md ${product.badgeStyle}`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* التصنيف والسعر */}
                <div className="flex items-center justify-between text-[10px] font-bold tracking-wider uppercase mb-1">
                  <span className="text-slate-400">{product.category}</span>
                  <span className="text-xs font-extrabold text-slate-900">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                {/* العنوان والوصف */}
                <h3
                  onClick={() => handleOpenProduct(product)}
                  className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase mb-1 cursor-pointer hover:text-[#2563eb] transition-colors"
                >
                  {product.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                  {product.description}
                </p>
              </div>

              {/* زرار الإضافة السريعة */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddClick(product);
                }}
                className={`w-full py-2.5 px-4 rounded-xl text-[11px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  isAdded
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white"
                }`}
              >
                {isAdded ? "✓ ADDED TO BAG" : "+ QUICK ADD TO BAG"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PairsWellWith;