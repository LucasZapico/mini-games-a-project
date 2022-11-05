import React from 'react'
import { Box, Flex, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import moment from 'moment'

const SubFooter = () => {
  return (
    <Box
      borderWidth="1px"
      borderColor="red.100"
      display={{ base: 'flex' }}
      alignItems="center"
      paddingX="1rem"
      paddingY=".5rem"
    >
      <NextLink href="" passHref>
        <Link variant="" paddingX=".5rem">
          Privacy Policy
        </Link>
      </NextLink>
      <NextLink href="" passHref>
        <Link variant="" paddingX=".5rem">
          Terms of Use
        </Link>
      </NextLink>
      <Text mb={0} paddingX=".5rem">
        &copy;Blue Monkey Makes {moment().format('YYYY')}
      </Text>
    </Box>
  )
}

export default SubFooter
