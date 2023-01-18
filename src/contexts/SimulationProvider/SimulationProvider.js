import { createContext, useState } from "react";

import api from "../../service/api";

export const Context = createContext({});

export function SimulationProvider({ children }) {
    const [value, setValue] = useState({});

    function handleSimulation(data) {
    api
        .post("", {
            amount: data.amount,
            installments: data.installments,
            mdr: data.mdr,
        })
        .then((res) => {
            setValue(res.data)
        })
        .catch((error) => {
        console.log(error);
        });
    }

    return (
    <Context.Provider
        value={{
            value,
            setValue,
            handleSimulation,
        }}
    >
    {children}
    </Context.Provider>
    );
}
