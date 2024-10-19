import type { Metadata, Viewport } from "next";
import { VideoGameJsonLd, SoftwareAppJsonLd } from "next-seo";
import {
  Heading,
  ImageWrapper,
  Text,
  Title,
  PageWrapper,
  Grid,
  GridItem,
} from "@paulos-ui";
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL("https://rivo.gg"),
  alternates: {
    canonical: "/",
  },
  title: "Cavescape - Rivo Projects",
  description:
   "Cavescape is a co-op survival adventure game with one of the most fun mechanics around: Grappling Hooks! You play as Fred, a miner on a mission to make it back up the cave to be reunited with his best friend, Rocky the puppy, who was violently taken from him by Gorgath, the big ugly worm monster.",
  twitter: {
    title: "Cavescape - Rivo Projects",
    card: "summary_large_image",
    description:
      "Cavescape is a co-op survival adventure game with one of the most fun mechanics around: Grappling Hooks! You play as Fred, a miner on a mission to make it back up the cave to be reunited with his best friend, Rocky the puppy, who was violently taken from him by Gorgath, the big ugly worm monster.",
  },
  openGraph: {
    title: "Cavescape - Rivo Projects",
    description:
      "Cavescape is a co-op survival adventure game with one of the most fun mechanics around: Grappling Hooks! You play as Fred, a miner on a mission to make it back up the cave to be reunited with his best friend, Rocky the puppy, who was violently taken from him by Gorgath, the big ugly worm monster.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  maximumScale: 5,
  themeColor: "#4876F2",
};

export default function Cavescape() {
  return (
    <><Head>
      <VideoGameJsonLd
        name="Cavescape"
        languageName={['English', 'German']}
        description="Cavescape is a co-op survival adventure game with one of the most fun mechanics around: Grappling Hooks! You play as Fred, a miner on a mission to make it back up the cave to be reunited with his best friend, Rocky the puppy, who was violently taken from him by Gorgath, the big ugly worm monster. "
        processorRequirements="2.8 GHz"
        memoryRequirements="8 Gb"
        playMode="MultiPlayer"
        applicationCategory="Game"
        url="https://rivo.gg/projects/cavescape/heading.jpg"
        platformName={['PC game', 'Android', 'Ios']}
        operatingSystemName="windows"
        keywords="cavescape, indie, action, adventure"
        datePublished="2025-06-16T00:00:00+00:00"
        image="https://example.com/photos/1x1/photo.jpg"
        publisherName="Rivo"
        producerName="Gargantua Games"
        producerUrl="https//www.example.com/producer" />
        <SoftwareAppJsonLd
      name="Cavescape"
      price="free"
      priceCurrency="USD"
      operatingSystem="ANDROID, WINDOWS, IOS"
      applicationCategory="GameApplication"
      keywords="cavescape, indie, action, adventure"
    />
    </Head><PageWrapper goBack>

        <Heading>Cavescape</Heading>
        <Text>
          Cavescape is a co-op survival adventure game with one of the most fun mechanics around: Grappling Hooks! You play as Fred, a miner on a mission to make it back up the cave to be reunited with his best friend, Rocky the puppy, who was violently taken from him by Gorgath, the big ugly worm monster.
        </Text>

        <Title>Screenshots</Title>
        <Grid>
          <GridItem>
            <ImageWrapper
              src="/projects/cavescape/Screenshot_1.png"
              alt="Would You Bot Showcase"
              size="auto"
              zoom />
          </GridItem>
          <GridItem>
            <ImageWrapper
              src="/projects/cavescape/Screenshot_2.png"
              alt="Would You Bot Showcase"
              size="auto"
              zoom />
          </GridItem>
          <GridItem>
            <ImageWrapper
              src="/projects/cavescape/Screenshot_3.png"
              alt="Would You Bot Showcase"
              size="auto"
              zoom />
          </GridItem>
          <GridItem>
            <ImageWrapper
              src="/projects/cavescape/Screenshot_4.png"
              alt="Would You Bot Showcase"
              size="auto"
              zoom />
          </GridItem>
          <GridItem>
            <ImageWrapper
              src="/projects/cavescape/Screenshot_5.png"
              alt="Would You Bot Showcase"
              size="auto"
              zoom />
          </GridItem>
          <GridItem>
            <ImageWrapper
              src="/projects/cavescape/Screenshot_6.png"
              alt="Would You Bot Showcase"
              size="auto"
              zoom />
          </GridItem>
        </Grid>
      </PageWrapper></>
  );
}
