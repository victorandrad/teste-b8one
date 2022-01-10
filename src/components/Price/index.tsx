import './index.scss';

interface PriceProps {
    product: {
        price: number;
        oldPrice: number;
        installment: number;
    }
}

export function Price({ product }: PriceProps) {
    const formataMoeda = (num: any) => {
        const formatCurrency = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        return formatCurrency.format(num);
    }

    const calculaParcelas = (maxParcelas: any, valorTotal: any) => {
        return (valorTotal / maxParcelas);
    }

    return (
        <>
            <p className="oldPrice">
                {formataMoeda(product.oldPrice)}
            </p>

            <p className="price">
                {formataMoeda(product.price)}
            </p>

            <p className="installment">
                em até <strong>{product.installment}x de {formataMoeda(calculaParcelas(product.installment, product.price))}</strong> sem juros
            </p>
        </>
    );
}