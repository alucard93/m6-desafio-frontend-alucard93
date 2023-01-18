import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaDashboard } from "../../validators/DashboardUser";

import Input from "../Input";
import List from "../List";

import { StyledForm } from "./style";
import { Container } from "../../styles/global";
import { Context } from "../../contexts/SimulationProvider/SimulationProvider";


const Form = () => {
  const { handleSimulation } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaDashboard) });
  
  return (
    
    <StyledForm>
      <Container>
        <div className="content">
          <div className="content-form">
            <form onSubmit={handleSubmit((data) => handleSimulation(data))}>
              <h1>Simule sua Antecipação</h1>
              <Input
                label="Informe o valor da venda*"
                name="amount"
                register={register}
                errosMessage={errors.amount?.message?.toString()}
              />
              <Input
                label="Em quantas parcelas*"
                name="installments"
                register={register}
                errosMessage={errors.installments?.message?.toString()}
              />
              <Input
                label="Informe o percentual de MDR*"
                name="mdr"
                register={register}
                errosMessage={errors.mdr?.message?.toString()}
              />
              <button type="submit">Confirme</button>
            </form>
          </div>
          <List />
        </div>
      </Container>
    </StyledForm>
  );
};

export default Form;
