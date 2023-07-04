const PICTURES = {
  "Poulet Croquant": "/images/PouletCroquant.svg",
  "Double Cantal": "/images/DoubleCantal.svg",
  "Super Crémeux": "/images/SuperCremeux.svg",
};

export const ProductCard = ({ title, price, onSelect }) => (
  <div className="ProductCard">
    <img src={PICTURES[title]} alt={title} />
    <span className="ProductTitle">{title}</span>
    <span className="ProductPrice">{price} €</span>
    <button onClick={onSelect}>
      <svg
        width="45"
        height="52"
        viewBox="0 0 45 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.7143 8.125C25.7143 6.32734 24.2779 4.875 22.5 4.875C20.7221 4.875 19.2857 6.32734 19.2857 8.125V22.75H4.8214C3.0435 22.75 1.60712 24.2023 1.60712 26C1.60712 27.7977 3.0435 29.25 4.8214 29.25H19.2857V43.875C19.2857 45.6727 20.7221 47.125 22.5 47.125C24.2779 47.125 25.7143 45.6727 25.7143 43.875V29.25H40.1785C41.9564 29.25 43.3928 27.7977 43.3928 26C43.3928 24.2023 41.9564 22.75 40.1785 22.75H25.7143V8.125Z"
          fill="#FAF6F4"
        />
      </svg>
    </button>
  </div>
);
