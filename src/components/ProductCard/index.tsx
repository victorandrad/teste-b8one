import { ReactNode } from "react";
import './index.scss';

interface ProductCardProps {
    children: ReactNode;
}

export function ProductCard({ children }: ProductCardProps) {
    return (
        <div className="item">
            {children}
        </div>
    );
}
