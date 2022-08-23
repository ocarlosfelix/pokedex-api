import React from "react";
import AnimatedLottieView from "lottie-react-native";
import pokemonAnimado from "./pokemonanimado.json";

import * as S from "./styles";

export function Welcome() {
  return (
    <S.Container>
      <S.Content>
        <AnimatedLottieView autoPlay source={pokemonAnimado} loop />
      </S.Content>
      <S.Footer>
        <S.Title>Bem vindo</S.Title>
        <S.Subtitle>Encontre todos os pokémons em um só lugar</S.Subtitle>
      </S.Footer>
    </S.Container>
  );
}
