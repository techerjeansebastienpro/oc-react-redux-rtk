import { useSelector } from "react-redux";
import { productList, totalOrder } from "../selectors";


export const Total = () => {
    const list = useSelector(productList)
    const totalCommand = useSelector(totalOrder)

    return <div className="TotalCommand">
        {list.length === 0 ? <div>Aucun produit sélectionné</div> : <div>Total commande {totalCommand} euros</div>}
    </div>
};
