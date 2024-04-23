import React from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Signup = () => {
  return (
    <Box p={4} maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <form>
        <FormControl isRequired>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input id='email' type='email' />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input id='password' type='password' />
        </FormControl>
        <Button mt={4} colorScheme='teal' type='submit'>Sign Up</Button>
      </form>
    </Box>
  );
};

export default Signup;
