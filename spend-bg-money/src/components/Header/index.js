import React from "react";
import { Image, Box, Container, Text } from "@chakra-ui/react";



function Header() {

  return (
    <div>
      <Container maxW="90%" mt="5" centerContent bgColor="white">
        <Box>
          <Image
            backgroundColor="white.300"
            borderRadius="full"
            boxSize="180px"
            src="https://neal.fun/spend/billgates.jpg"
            alt="Bill Gates"
          />
        </Box>
        <Text fontSize="44px" bgColor="white" mt="5" mb="5">
          Spend Bill Gates' Money
        </Text>
        <div></div>
      </Container>
    </div>
  );
}

export default Header;
