import type { Metadata, Viewport } from "next";
import {
  Button,
  Container,
  Heading,
  ImageWrapper,
  Text,
  Title,
  PageWrapper,
  List,
  ListItem,
  Grid,
  GridItem,
  ImageGallery,
  AccordionWrapper,
  SteamWishlistButton,
} from "@paulos-ui";

export const metadata: Metadata = {
  metadataBase: new URL("https://rivo.gg"),
  alternates: {
    canonical: "/",
  },
  title: "Would You - Rivo Projects",
  description:
  "Would you lets you play Would You Rather, Never Have I Ever, Higher or Lower, Truth or Dare and What Would You Do on Discord!",
  openGraph: {
    title: "Would You - The Discord Bot",
    description:
      "Would you lets you play Would You Rather, Never Have I Ever, Higher or Lower, Truth or Dare and What Would You Do on Discord!",
    type: "website",
  },
  twitter: {
    title: "Would You - The Discord Bot",
    description:
      "Would you lets you play Would You Rather, Never Have I Ever, Higher or Lower, Truth or Dare and What Would You Do on Discord!",
    site: "@WouldYouBot",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  maximumScale: 5,
  themeColor: "#0598f4",
};

const images = [
  { src: "/projects/would-you/showcase.png", alt: "Would You Bot Showcase" },
  { src: "/projects/would-you/showcase.png", alt: "Would You Bot Showcase" },
  { src: "/projects/would-you/showcase.png", alt: "Would You Bot Showcase" },
  { src: "/projects/would-you/showcase.png", alt: "Would You Bot Showcase" },
  { src: "/projects/would-you/showcase.png", alt: "Would You Bot Showcase" },
  { src: "/projects/would-you/showcase.png", alt: "Would You Bot Showcase" },
  { src: "/projects/would-you/showcase.png", alt: "Would You Bot Showcase" },
  { src: "/projects/would-you/showcase.png", alt: "Would You Bot Showcase" },
];

export default function WouldYou() {
  return (
    <PageWrapper goBack>
      <Heading>Would You - Discord Bot</Heading>
      <Title>This is a medium title</Title>
      <Text>
        The default title size is <code>"medium"</code>
      </Text>
      <Container>
        <Title size="small">This is a small title</Title>
        <Text>This a text inside a container with spacing between items</Text>
      </Container>
      <Container orientation="horizontal">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </Container>
      <ImageWrapper
        src="/projects/would-you/showcase.png"
        alt="Would You Bot Showcase"
        size="large"
        zoom
      />
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
      </List>
      <Grid>
        <GridItem>
          <ImageWrapper
            src="/projects/would-you/showcase.png"
            alt="Would You Bot Showcase"
            size="auto"
            zoom
          />
        </GridItem>
        <GridItem>
          <ImageWrapper
            src="/projects/would-you/showcase.png"
            alt="Would You Bot Showcase"
            size="auto"
            zoom
          />
        </GridItem>
        <GridItem>
          <ImageWrapper
            src="/projects/would-you/showcase.png"
            alt="Would You Bot Showcase"
            size="auto"
            zoom
          />
        </GridItem>
      </Grid>
      <ImageGallery images={images} />
      <AccordionWrapper
        title="Frequently Asked Questions"
        questions={[
          {
            question: "Who is more handsome, Paulos or Dominik?",
            answer: "It's a tough question but I'd say it's Dominik.",
          },
          {
            question: "Who is more handsome, Paulos or Dominik?",
            answer: "Logically it's Paulos.",
          },
          {
            question: "Who is more handsome, Paulos or Dominik?",
            answer: "Well to be honest, i believe it's Paulos.",
          },
          {
            question: "Who is more handsome, Paulos or Dominik?",
            answer:
              "Now you got me there, but in my most honest opinion, it's not Dominik.",
          },
        ]}
      />
      <SteamWishlistButton url="" />
    </PageWrapper>
  );
}
