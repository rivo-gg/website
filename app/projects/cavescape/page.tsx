import type { Metadata, Viewport } from "next";
import {
  Heading,
  ImageWrapper,
  Text,
  Title,
  PageWrapper,
  Grid,
  GridItem,
  List,
  ListItem,
  SystemRequirementsWrapper,
  type SystemRequirements,
  SteamWishlistButton,
} from "@paulos-ui";
import { Schema } from "@/components/Schema";

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

const requirements: SystemRequirements = {
  minimum: {
    info: "Requires a 64-bit processor and operating system",
    os: " Windows 10 or later (64-Bit)",
    processor: "i5-3570 3.4 Ghz 4 Core",
    memory: "8 GB RAM",
    graphics:
      "NVIDIA GeForce GTX 1660/GTX 1050-Ti, or AMD RX 470/RX 570, or equivalent performance & VRAM",
    storage: "20 GB available space",
    additional: "Internet connection required for multiplayer.",
  },
  recommended: {
    info: "Requires a 64-bit processor and operating system",
    os: " Windows 11 or later (64-Bit)",
    processor:
      "Ryzen 5 5600X or i5-12400 or equivalent performance, 6 physical cores minimum",
    memory: "16 GB RAM",
    graphics: "NVIDIA RTX 2070 or RX 5700, or equivalent performance & VRAM",
    storage: "20 GB available space",
    additional: "Internet connection required for multiplayer.",
  },
};

export default function Cavescape() {
  return (
    <>
      <Schema
        json={`
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Cavescape",
          "description": "Cavescape is a co-op survival adventure game with one of the most fun mechanics around: Grappling Hooks! You play as Fred, a miner on a mission to make it back up the cave to be reunited with his best friend, Rocky the puppy, who was violently taken from him by Gorgath, the big ugly worm monster.",
          "operatingSystem": "ANDROID, IOS, WINDOWS",
          "applicationCategory": "GameApplication"
        }
      `}
      />
      <PageWrapper goBack>
        <Heading>Cavescape</Heading>
        <Text>
          The indie world is getting a fresh new entry in the realm of
          destructive procedurally-generated environments from an exciting new
          talent. Founded in 2024 by Viktor Anschütz, GargantuaGames is now home
          to his son Joshua Anschütz&apos;s dream project, Cavescape. The game
          is also in good hands with publisher Rivo, an indie company founded in
          2023 by Dominik Koch. With a track record of working with major brands
          like Universal Music Group and earning recognition on platforms like
          Discord, Koch brings valuable experience and credibility to the
          project.
        </Text>

        <Title>Key Features of Cavescape:</Title>
        <List>
          <ListItem>● Engaging co-op gameplay </ListItem>
          <ListItem>● Unique grappling hook mechanics </ListItem>
          <ListItem>
            ● Innovative checkpoint system for strategic choices
          </ListItem>
          <ListItem>● Fully destructible environments</ListItem>
        </List>

        <Title>Man&apos;s Best Friend </Title>
        <Text>
          Let&apos;s get to the biggest selling point of Cavescape: the game has
          a dog. Players can grab a friend in engaging co-op gameplay and take
          on the role of Fred, a determined miner whose best friend, Rocky, has
          been snatched by the terrifying Gorgath, adding an emotional layer to
          the adventure. This mission to rescue Rocky fuels the journey, driving
          players to race upward through the dangerous caves, master the unique
          grappling hook mechanics, and outsmart the cave&apos;s many
          threats—all for man&apos;s best friend.
        </Text>
        <Title>A Unique Checkpoint System</Title>
        <Text>
          It isn&apos;t enough to rescue a beloved dog and dig a way up.
          Cavescape features a unique checkpoint system designed to add an
          exciting, albeit anxiety-inducing, twist to the game. Players must
          make the treacherous climb to the top deciding whether to claim a
          respawn point or destroy it for cash to upgrade their weapons. Having
          a unique checkpoint system encourages players to develop their own
          cave-climbing strategies. Will survival be the priority, or will the
          thrill of risk for more power? Do players prefer hardcore gameplay
          that involves taking big risks, or is it safer to play cautiously and
          secure an easy respawn? The choice is in their hands.
        </Text>
        <Title>Grappling Hooks</Title>
        <Text>
          What cave exploration game is complete without a grappling hook?
          Cavescape lets players combine the grappling hook with other tools and
          weapons, enabling creative strategies and endless possibilities while
          traversing the cave system.
        </Text>
        <Title>Fully Destructible Environments</Title>
        <Text>
          Cavescape takes immersion to a whole new level with its fully
          destructible environments, allowing players to shape the cave&apos;s
          landscape as they explore. This feature not only enhances gameplay but
          also encourages creativity, as players can use destruction to their
          advantage—or for a bit of playful griefing with their friends. Each
          playthrough offers a fresh experience, as no two adventures are ever
          the same.
        </Text>
        <Title>Screenshots</Title>
        <Grid>
          <GridItem>
            <ImageWrapper
              src="/projects/cavescape/Screenshot_1.png"
              alt="Cavescape Showcase 1"
              size="auto"
              zoom
            />
          </GridItem>
          <GridItem>
            <ImageWrapper
              src="/projects/cavescape/Screenshot_2.png"
              alt="Cavescape Showcase 2"
              size="auto"
              zoom
            />
          </GridItem>
          <GridItem>
            <ImageWrapper
              src="/projects/cavescape/Screenshot_3.png"
              alt="Cavescape Showcase 3"
              size="auto"
              zoom
            />
          </GridItem>
          <GridItem>
            <ImageWrapper
              src="/projects/cavescape/Screenshot_4.png"
              alt="Cavescape Showcase 4"
              size="auto"
              zoom
            />
          </GridItem>
          <GridItem>
            <ImageWrapper
              src="/projects/cavescape/Screenshot_5.png"
              alt="Cavescape Showcase 5"
              size="auto"
              zoom
            />
          </GridItem>
          <GridItem>
            <ImageWrapper
              src="/projects/cavescape/Screenshot_6.png"
              alt="Cavescape Showcase 6"
              size="auto"
              zoom
            />
          </GridItem>
        </Grid>

        <Title>Wishlist on Steam</Title>
        <Text>
          Cavescape is currently in development and will be available on Steam
          soon. Wishlist the game on Steam to get notified when it&apos;s
          released!
        </Text>
        <SteamWishlistButton url="https://store.steampowered.com/app/3094540/Cavescape/" />

        <SystemRequirementsWrapper requirements={requirements} />
      </PageWrapper>
    </>
  );
}
