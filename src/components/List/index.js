/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';

import { StyledList } from "./style";
import { Container } from "../../styles/global";

import { useContext, useEffect } from "react";
import { Context } from "../../contexts/SimulationProvider/SimulationProvider";

const List = () => {
  
  const { value, setValue } = useContext(Context)
  
  useEffect(() => {
    const initialSimulationValues = { 1: 0, 15: 0, 30: 0, 90: 0 };
    setValue(initialSimulationValues);
  }, []);

  return (
    <StyledList>
      <Container>
        <div className="content-list">
          <div className="border">
            <h2>VOCÊ RECEBERÁ:</h2>
          </div>
          <p>
            Amanhã: <span>R$ {value[1]},00</span>
          </p>
          <p>
            Em 15 dias: <span>R$ {value[15]},00</span>
          </p>
          <p>
            Em 30 dias: <span>R$ {value[30]},00</span>
          </p>
          <p>
            Em 90 dias: <span>R$ {value[90]},00</span>
          </p>
        </div>
      </Container>
    </StyledList>
  );
};

export default List;
