import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@chakra-ui/react";
import NumberFormat from "react-number-format";
function Money() {
  const Money = useSelector((state) => state.product.totalMoney);

  return (
    <Container
      maxW="90%"
      height="50px"
      mt="3"
      centerContent
      bgColor="green.400"
      color="white"
      fontSize={30}
    >
      <NumberFormat value={Money} displayType='text' thousandSeparator={true} prefix={'$'} />
    </Container>
  );
}

export default Money;
