import './index.scss';

interface AddButtonProps {
    isAdded: boolean;
    onClick: () => void;
}

export function AddButton({ isAdded, onClick }: AddButtonProps) {
    return (
        <button onClick={onClick} className={isAdded ? "isActiveAddButton" : "addButton"}>
            {isAdded && (
                <img src="./assets/icons/check.svg" alt="check" />
            )}
            &nbsp;
            {isAdded ? "Adicionado" : "Adicionar"}
        </button>
    );
}