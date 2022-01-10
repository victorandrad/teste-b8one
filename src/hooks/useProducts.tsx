import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ProductProviderProps {
    children: ReactNode;
}

interface ProductContextProps {
    products: Product[];
    onFavorite: (id: number) => void;
    onAddCart: (id: number) => void;
}

interface Product {
    id: number;
    title: string;
    image: string;
    oldPrice: number;
    price: number;
    favorite: boolean;
    added: boolean;
    installment: number;
}

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);

export function ProductProvider({ children }: ProductProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        let list = [
            {
                id: 1,
                title: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
                image: "./assets/produtos/image.png",
                oldPrice: 2813.99,
                price: 2599.00,
                favorite: false,
                added: false,
                installment: 10
            },
            {
                id: 2,
                title: "Monitor LED 24'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
                image: "./assets/produtos/image.png",
                oldPrice: 1899.99,
                price: 1399.00,
                favorite: false,
                added: false,
                installment: 10
            }
        ];

        const storage = localStorage.getItem('products');
        const productsLocalStorage = JSON.parse(String(storage));

        if (!products) {
            setLocalStorage(products);
            setProducts(list)
        } else {
            setProducts(productsLocalStorage);
        }
    }, []);

    const onAddCart = (id: number) => {
        const productsAdd = products.map(product => {
            if (product.id === id) {
                product.added = !product.added;
            }

            return product;
        })

        setProducts(productsAdd);
        setLocalStorage(productsAdd);
    }

    const onFavorite = (id: number) => {
        const productsFavorite = products.map(product => {
            if (product.id === id) {
                product.favorite = !product.favorite;
            }

            return product;
        })

        setProducts(productsFavorite);
        setLocalStorage(productsFavorite);
    }

    const setLocalStorage = (list: Product[]) => {
        localStorage.setItem('products', JSON.stringify(list))
    }

    return (
        <ProductContext.Provider value={{ products, onFavorite, onAddCart }}>
            {children}
        </ProductContext.Provider>
    );
}

export const useProducts = () => useContext(ProductContext);