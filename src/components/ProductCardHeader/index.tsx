import { useProducts } from "../../hooks/useProducts";
import { ButtonFavorite } from "../FavoriteButton";
import './index.scss';

interface ProductCardHeaderProps {
    product: {
        id: number;
        title: string;
        image: string;
        favorite: boolean;
    }
}

export function ProductCardHeader({ product }: ProductCardHeaderProps) {
    const { onFavorite } = useProducts();

    return (
        <div className="itemHeader">
            <img src={product.image} alt="product" />

            <p className="title">{product.title}</p>

            <ButtonFavorite onClick={() => { onFavorite(product.id) }} favorite={product.favorite} />
        </div>
    );
}