import React from "react";
import { useNavigate } from "react-router-dom";

const CartItemCard = ({ item, onUpdateQuantity, onRemove }) => {
  const navigate = useNavigate();
  const itemSubtotal = (item.price * item.quantity).toFixed(2);

  const handleOpenProduct = () => {
    navigate("/product", { state: { product: item } });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs transition-all hover:border-slate-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* الجزء الأيسر: الصورة + التفاصيل */}
        <div className="flex items-start gap-4 flex-1">
          {/* صورة المنتج */}
          <div
            onClick={handleOpenProduct}
            className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            {item.imageBadge && (
              <span
                className={`absolute bottom-1.5 left-1.5 right-1.5 text-center text-[9px] font-bold tracking-wider uppercase py-0.5 px-1 rounded ${item.imageBadgeColor}`}
              >
                {item.imageBadge}
              </span>
            )}
          </div>

          {/* بيانات المنتج */}
          <div className="flex flex-col justify-between min-w-0">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#2563eb] mb-1">
              {item.collectionTag}
            </span>

            <h3
              onClick={handleOpenProduct}
              className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug uppercase max-w-[240px] cursor-pointer hover:text-[#2563eb] transition-colors"
            >
              {item.title}
            </h3>

            {/* المقاس واللون */}
            <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-slate-500">
              {item.size && (
                <span>
                  Size: <strong className="text-slate-800">{item.size}</strong>
                </span>
              )}
              {item.size && item.color && <span className="text-slate-300">•</span>}
              {item.color && (
                <span>
                  Color: <strong className="text-slate-800">{item.color}</strong>
                </span>
              )}
            </div>

            {/* بادج الخامة */}
            {item.materialBadge && (
              <span className="inline-block w-fit mt-2.5 text-[9px] font-semibold tracking-wider uppercase text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md">
                {item.materialBadge}
              </span>
            )}
          </div>
        </div>

        {/* الجزء الأوسط والأيمن: الكمية + السعر + الحذف */}
        <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-10 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
          {/* عداد الكمية */}
          <div className="inline-flex items-center border border-slate-200 rounded-lg bg-white h-9 px-1">
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-slate-900 disabled:opacity-30 cursor-pointer font-semibold"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-7 text-center text-xs font-bold text-slate-900">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-slate-900 cursor-pointer font-semibold"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* السعر وزرار الحذف */}
          <div className="flex flex-col items-end min-w-[76px]">
            <span
              className={`text-sm sm:text-base font-extrabold ${
                item.originalPrice ? "text-[#2563eb]" : "text-slate-900"
              }`}
            >
              ${itemSubtotal}
            </span>

            {item.originalPrice && (
              <span className="text-[11px] text-slate-400 line-through">
                ${(item.originalPrice * item.quantity).toFixed(2)}
              </span>
            )}

            <button
              type="button"
              onClick={() => onRemove(item.id)}
              className="mt-1.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer text-xs p-0.5"
              title="Remove item"
              aria-label="Remove item"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;