import styled from "styled-components";

import { Container, Card, CardMedia, CardContent } from "@mui/material";

export const StyledGrid = styled(Container)`
  padding: 20px;
  height: 400px;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCardMedia = styled(CardMedia)`
  width: 100%;
  img {
    width: 100%;
    height: 500px;
  }
`;

export const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
  height: 220px;
`;
