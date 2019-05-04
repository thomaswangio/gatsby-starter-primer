import React from "react"
import styled from "styled-components"
import { Box, Heading, Text, Flex, Relative } from "@primer/components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero pt={[4, 2, 5]}>
      <Grid
        my={[6, 6, 12]}
        flexDirection={["row", "row", "row-reverse"]}
        alignItems="end"
      >
        <Flex.Item px={5} width={[10 / 12, 8 / 12, 8 / 12, 5 / 12]} mx={"auto"}>
          <Relative mt={[2, 3, 5]}>
            <img
              src="./thomas.jpeg"
              style={{ maxWidth: "400px", width: "100%" }}
              alt="thomas"
            />
          </Relative>
        </Flex.Item>
        <div style={{ maxWidth: "700px", margin: "auto" }}>
          <Flex.Item px={5} my={[4, 3, 0]} width={[1, 1, 1, 7 / 12]}>
            <Heading
              color="blue.4"
              mb={2}
              fontSize={[48, 56, 84]}
              fontWeight="700"
            >
              Thomas Wang
            </Heading>
            <Text color="blue.2" fontSize={[4, 5, 5, 7]} lineHeight={1.25}>
              Featuring all of my open source projects, made available on
              Github.
            </Text>
          </Flex.Item>
          <Flex.Item
            px={5}
            my={[4, 3, 0]}
            width={[1, 1, 1, 7 / 12]}
            style={{ marginTop: "1em" }}
          >
            <Text
              style={{ color: "#79b8ff", marginTop: "24px" }}
              fontFamily="mono"
              is="p"
              color="blue.3"
              mt={5}
            >
              <LinkLight
                fontSize={[0, 1, 2]}
                href="https://github.com/thomaswangio"
              >
                GitHub
              </LinkLight>{" "}
              ・
              <LinkLight
                style={{ marginLeft: "8px" }}
                fontSize={[0, 1, 2]}
                href="https://codepen.io/thomaswangio"
              >
                CodePen
              </LinkLight>{" "}
              ・
              <LinkLight
                style={{ marginLeft: "8px" }}
                fontSize={[0, 1, 2]}
                href="https://stackoverflow.com/users/7948880/thomas-wang"
              >
                Stack Overflow
              </LinkLight>{" "}
            </Text>
          </Flex.Item>
        </div>
      </Grid>
    </Hero>
    <Divider my={[9, 12]} />
  </Layout>
)

export default IndexPage

const Hero = styled(Box)`
  margin: auto;
  max-width: 1280px;
`

const Divider = styled(Box)`
  border-top: 2px solid #79b8ff;
  opacity: 0.15;
  width: 10%;
  margin-right: auto;
  margin-left: auto;
`

const LinkLight = styled.a`
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
  color: #79b8ff;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #79b8ff;
  }
`
