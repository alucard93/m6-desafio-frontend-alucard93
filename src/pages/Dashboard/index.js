import React from "react";
import Form from "../../components/Form";
import { Container } from "../../styles/global";


import { StyledDashboard } from "./styles";

function Dashboard() {
  return (
    <StyledDashboard>
      <Container>
        <div className="border-dashboard">
          <Form />
        </div>
      </Container>
    </StyledDashboard>
  );
}

export default Dashboard;
