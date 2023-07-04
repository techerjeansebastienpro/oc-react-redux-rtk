import { useSelector, useStore } from "react-redux";
import { voucherAvailable } from "../selectors";


export const Voucher = () => {
    const store = useStore();
    
    const available = useSelector(voucherAvailable)

    return <div className="Voucher">
        {available && <button onClick={() => store.dispatch({type: 'APPLY_VOUCHER', payload: { price: 2 }})}>Appliquer ma promo Super crémeux à 2 euros</button>}
    </div>
};