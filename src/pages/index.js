import React from "react"
import styled from "styled-components"
import { Box, Heading, Text, Link, Flex } from "@primer/components"
import Octicon, {
  Package,
  Repo,
  Heart,
  Octoface,
  Mail,
  Megaphone,
} from "@githubprimer/octicons-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Image from "../components/image"

const TwitterIcon = () => (
  <path d="M6.28976 18C13.8373 18 17.9648 11.845 17.9648 6.50756C17.9648 6.33274 17.9611 6.1587 17.9532 5.98546C18.7544 5.41531 19.4507 4.70382 20 3.89388C19.2648 4.21557 18.4736 4.43213 17.6436 4.52978C18.4908 4.02972 19.1412 3.23869 19.448 2.2957C18.6552 2.75835 17.7772 3.09461 16.8424 3.27615C16.0936 2.49105 15.0276 2 13.8472 2C11.5812 2 9.74363 3.80889 9.74363 6.03861C9.74363 6.35557 9.77963 6.66387 9.85003 6.9596C6.43968 6.79068 3.41563 5.18341 1.39176 2.73945C1.03936 3.33636 0.836164 4.02974 0.836164 4.76959C0.836164 6.17093 1.56058 7.40804 2.66218 8.13177C1.98897 8.1113 1.35656 7.92938 0.803816 7.62659C0.803212 7.64354 0.80321 7.66006 0.80321 7.67817C0.80321 9.63432 2.21762 11.2675 4.09518 11.6376C3.75038 11.7302 3.38761 11.7798 3.01318 11.7798C2.74918 11.7798 2.49198 11.7542 2.24198 11.7069C2.76438 13.3118 4.2792 14.4797 6.07515 14.5123C4.67074 15.5959 2.90157 16.2413 0.97878 16.2413C0.647979 16.2413 0.321182 16.2228 -1.71715e-06 16.1854C1.81601 17.3312 3.97236 17.9997 6.28998 17.9997" />
)

TwitterIcon.size = [20, 20]

const IndexPage = () => (
  <Layout>
    <SEO
      title="Mona Lisa Octocat"
      image="https://gatsby-starter-primer.netlify.com/share.jpg"
    />
    <Hero pt={[4, 2, 5]}>
      <Grid
        my={[6, 6, 12]}
        flexDirection={["row", "row", "row-reverse"]}
        alignItems="end"
      >
        <ImageContainer px={5} mx={"auto"}>
          <Image />
        </ImageContainer>
        <div style={{ maxWidth: "700px", margin: "auto" }}>
          <Flex.Item px={5} my={[4, 3, 0]} width={[1, 1, 1, 7 / 12]}>
            <Heading
              color="blue.4"
              mb={2}
              fontSize={[48, 56, 84]}
              fontWeight="700"
            >
              Mona L. Octocat
            </Heading>
            <Text color="blue.2" fontSize={[4, 5, 5, 7]} lineHeight={1.25}>
              Showcasing all of your open source projects, made available on
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
              as="p"
              color="blue.3"
              mt={5}
            >
              <LinkLight
                fontSize={[0, 1, 2]}
                href="https://github.com/monatheoctocat"
              >
                GitHub
              </LinkLight>{" "}
              ・
              <LinkLight
                style={{ marginLeft: "8px" }}
                fontSize={[0, 1, 2]}
                href="https://codepen.io/monatheoctocat"
              >
                CodePen
              </LinkLight>{" "}
              ・
              <LinkLight
                style={{ marginLeft: "8px" }}
                fontSize={[0, 1, 2]}
                href="https://stackoverflow.com/users/id"
              >
                Stack Overflow
              </LinkLight>{" "}
            </Text>
          </Flex.Item>
        </div>
      </Grid>
    </Hero>
    <Divider my={[9, 12]} />
    <Body>
      <Grid>
        <Grid.Item mt={[3, 2, 2]} mb={5} pb={2}>
          <Text fontWeight={500} fontSize={5} color="blue.2" lineHeight={1.25}>
            Featured open-source packages and projects.
          </Text>
        </Grid.Item>
      </Grid>
      <Box px={5} className="container-xl">
        <Flex mx={-5} flexWrap="wrap" alignItems="start">
          <StyledFlex size={[1, 6 / 12, 6 / 12]} px={5} mb={[3, 4, 4, 2]}>
            <Flex.Item color="blue.3" mr={3}>
              <Octicon icon={Package} height={40} verticalAlign="middle" />
            </Flex.Item>
            <Flex.Item>
              <LinkLight
                style={{ marginBottom: "1.45rem" }}
                fontSize={2}
                href="https://github.com/primer/css"
              >
                primer
              </LinkLight>
              <Text as="p" color="blue.2" mb={5} fontSize={3}>
                This package includes all 30 Primer modules from the core,
                product, and marketing packages
              </Text>
            </Flex.Item>
          </StyledFlex>
          <StyledFlex size={[1, 6 / 12, 6 / 12]} px={5} mb={[3, 4, 4, 2]}>
            <Flex.Item color="blue.3" mr={3}>
              <Octicon icon={Repo} height={40} verticalAlign="middle" />
            </Flex.Item>
            <Flex.Item>
              <LinkLight
                style={{ marginBottom: "1.45rem" }}
                fontSize={2}
                href="https://github.com/facebook/react"
              >
                react
              </LinkLight>
              <Text as="p" color="blue.2" mb={5} fontSize={3}>
                A declarative, efficient, and flexible JavaScript library for
                building user interfaces.
              </Text>
            </Flex.Item>
          </StyledFlex>
          <StyledFlex size={[1, 6 / 12, 6 / 12]} px={5} mb={[3, 4, 4, 2]}>
            <Flex.Item color="blue.3" mr={3}>
              <Octicon icon={Heart} height={40} verticalAlign="middle" />
            </Flex.Item>
            <Flex.Item>
              <LinkLight
                style={{ marginBottom: "1.45rem" }}
                fontSize={2}
                href="https://github.com/gatsbyjs/gatsby"
              >
                gatsby
              </LinkLight>
              <Text as="p" color="blue.2" mb={5} fontSize={3}>
                Build blazing fast, modern apps and websites with React.
              </Text>
            </Flex.Item>
          </StyledFlex>
        </Flex>
      </Box>
      <Divider my={[9, 12]} />
    </Body>
    <Box bg="blue.2" pt={12} mt={6}>
      <Grid justifyContent="center">
        <Grid.Item style={{ margin: "auto" }}>
          <Heading
            lineHeight="1.25"
            color="black"
            mb={3}
            fontSize={7}
            fontWeight="800"
          >
            Keep in touch
          </Heading>
          <LinkDark
            pt={1}
            fontSize={2}
            mb={3}
            display="block"
            href="https://twitter.com/monatheoctocat"
          >
            <Octicon icon={TwitterIcon} size={20} verticalAlign="top" />
            <Text ml={2} fontWeight="400" fontSize={2}>
              Follow me on Twitter
            </Text>
          </LinkDark>
          <LinkDark
            fontSize={2}
            mb={3}
            display="block"
            href="https://github.com/github"
          >
            <Octicon icon={Octoface} size={20} verticalAlign="text-top" />
            <Text ml={2} fontWeight="400" fontSize={2}>
              Follow me on Github
            </Text>
          </LinkDark>
          <LinkDark
            fontSize={2}
            mb={3}
            display="block"
            href="https://github.com"
          >
            <Octicon icon={Megaphone} size={20} verticalAlign="text-top" />
            <Text ml={2} fontWeight="400" fontSize={2}>
              Check out my personal site
            </Text>
          </LinkDark>
          <LinkDark
            fontSize={2}
            mb={3}
            display="block"
            href="mailto:youremail@domain.com"
          >
            <Octicon icon={Mail} size={20} verticalAlign="text-top" />
            <Text style={{ marginLeft: "12px" }} fontWeight="400" fontSize={2}>
              Email me anything
            </Text>
          </LinkDark>
        </Grid.Item>
      </Grid>
      <FooterBox color="black" px={5} mx="auto" className="container-xl">
        <Box
          style={{
            borderTop: "2px solid",
            borderColor: "#1b1f23",
          }}
          mt={12}
          py={5}
        >
          <Text pr={1} as="span" fontSize={2} fontWeight={500}>
            Created using GitHub&#8217;s
          </Text>
          <LinkDark
            display="inline-block"
            fontWeight="bold"
            href="https://primer.style/"
          >
            Primer design system and website
          </LinkDark>
          <Text>.</Text>
          <Text as="p" fontSize={2} fontWeight={500} mt={3}>
            &copy; Mona Lisa Octocat {new Date().getFullYear()}.
          </Text>
        </Box>
      </FooterBox>
    </Box>
  </Layout>
)

export default IndexPage

const Hero = styled(Box)`
  margin: auto;
  max-width: 1280px;
`

const ImageContainer = styled(Flex.Item)`
  position: relative;
  max-width: 464px;
  width: 83.33333333333334%;
  margin-bottom: 32px;

  @media screen and (min-width: 544px) {
    width: 66.66666666666666%;
  }

  @media screen and (min-width: 1012px) {
    width: 41.66666666666667%;
  }
`

const Divider = styled(Box)`
  border-top: 2px solid #79b8ff;
  opacity: 0.15;
  width: 10%;
  margin-right: auto;
  margin-left: auto;
`

const LinkLight = styled(Link)`
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

const LinkDark = styled(Link)`
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  display: ${props => props.display || "block"};

  &:hover {
    text-decoration: underline;
    text-decoration-color: #000000;
  }
`

const Body = styled(Box)`
  margin: auto;
  max-width: 1280px;
`

const StyledFlex = styled(Flex)`
  max-width: 640px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

const FooterBox = styled(Box)`
  margin: auto;
  max-width: 1280px;
`
