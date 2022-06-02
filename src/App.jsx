import React from "react";
import content from "./content";
import GlobalStyles from "./components/styles/Global";
import { StyledToolbar } from "./components/styles/StyledToolbar";
import { StyledGrid, StyledCard, StyledCardMedia,StyledCardContent } from "./components/styles/StyledGrid";
import {
  AppBar,
  CardActions,
  Grid,
  Container,
  Button,
} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppBar position="relative">
        <StyledToolbar>
          <BookIcon />
          <h2>Minha lista de desejados na Amazon</h2>
        </StyledToolbar>
      </AppBar>
      <main style={{ textAlign: "center", paddingTop: "30px" }}>
        <div>
          <Container maxWidth="sm">
            <h1>Livros</h1>
            <h3 style={{ padding: "28px", marginBottom: "13px", fontSize: "20px"}}>
              Esta é uma seleção dos livros que estão na minha Wishlist
            </h3>
          </Container>
        </div>
        <StyledGrid maxWidth="md">
          <Grid container spacing={2} xs={12} sm={6} md={8}>
            {content.map((item, id) => {
              return (
                <StyledCard key={id}>
                  <StyledCardMedia>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                  </StyledCardMedia>
                  <StyledCardContent>
                    <p>{item.body}</p>
                  </StyledCardContent>
                  <CardActions>
                    <Button>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Compre aqui
                      </a>
                    </Button>
                  </CardActions>
                </StyledCard>
              );
            })}
          </Grid>
        </StyledGrid>
      </main>
    </>
  );
};

export default App;
