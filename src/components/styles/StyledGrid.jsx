import styled from "styled-components";

import { Container, Card, CardMedia, CardContent } from "@mui/material";

export const StyledGrid = styled(Container)`
  padding: 20px;
`;

export const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const StyledCardMedia = styled(CardMedia)`
    width: 100%;
    img{
        width: 100%;
    }
`;

export const StyledCardContent = styled(CardContent)`
    flex-grow: 1;
`;
