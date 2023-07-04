import { useSelector, useStore } from "react-redux";
import { SuperCremeux } from "./models";
import { quantiteProduitPerName } from "./selectors";


export const Cart = () => {
    const store = useStore();

    const qttSuperCremeux = useSelector(quantiteProduitPerName("Super Crémeux"))

    const qttDoubleCantal = useSelector(quantiteProduitPerName("Double Cantal"))

    const qttPouletCroquant = useSelector(quantiteProduitPerName("Poulet Croquant"))

    return <div className="Selection">
        <h1>Choisir son menu</h1>
        <div className="CartNavBar">
            <button onClick={() => store.dispatch({type: 'ADD_PRODUCT', payload: SuperCremeux})}>Ajouter un super crémeux</button>
        </div>
        {qttDoubleCantal > 0 && <div>{qttDoubleCantal} x Double Cantal</div>}
        {qttSuperCremeux > 0 && <div>{qttSuperCremeux} x Super Crémeux</div>}
        {qttPouletCroquant > 0 && <div>{qttDoubleCantal} x Poulet Croquant</div>}
    </div>
};
