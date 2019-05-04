import React from "react"
import styled from "styled-components"
import { Box, Flex, Text } from "@primer/components"
import Octicon, { MarkGithub } from "@githubprimer/octicons-react"

export default function Nav() {
  return (
    <Box bg="gray.9" py={3} px={5}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flex="auto">
          <a
            style={{ color: "inherit" }}
            href="https://github.com/thomaswangio"
          >
            <Flex color="blue.2" alignItems="center">
              <Octicon
                icon={MarkGithub}
                ariaLabel="Primer home"
                size="medium"
              />
              <NoWrapText
                mx={3}
                fontSize="2"
                fontWeight="bold"
                lineHeight="condensed"
              >
                Thomas Wang
              </NoWrapText>
            </Flex>
          </a>
        </Flex>
        <Flex color="blue.2" alignItems="center">
          <a href="https://github.com/thomaswangio?tab=repositories">
            <NoWrapText
              mx={3}
              fontSize="2"
              fontWeight="bold"
              lineHeight="condensed"
            >
              What's new?
            </NoWrapText>
          </a>
        </Flex>
      </Flex>
    </Box>
  )
}

const NoWrapText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
