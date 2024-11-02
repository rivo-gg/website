import type { Metadata, Viewport } from "next";
import {
  Heading,
  Text,
  Title,
  PageWrapper,
  Grid,
  GridItem,
  ImageWrapper,
} from "@paulos-ui";

export const metadata: Metadata = {
  metadataBase: new URL("https://rivo.gg"),
  alternates: {
    canonical: "/",
  },
  title: "Stream Tracker- Rivo Projects",
  description:
    "Universal Music Group and Polydor Records partnered with the Roblox game 'Pls Donate' and their discord server for their popular band Glass Animals. Rivo built the Spotify stream tracker that was used to distribute rewards to the community and track the progress of the album.",
  openGraph: {
    title: "Stream Tracker- Rivo Projects",
    description:
      "Universal Music Group and Polydor Records partnered with the Roblox game 'Pls Donate' and their discord server for their popular band Glass Animals. Rivo built the Spotify stream tracker that was used to distribute rewards to the community and track the progress of the album.",
    type: "website",
  },
  twitter: {
    title: "Stream Tracker- Rivo Projects",
    description:
      "Universal Music Group and Polydor Records partnered with the Roblox game 'Pls Donate' and their discord server for their popular band Glass Animals. Rivo built the Spotify stream tracker that was used to distribute rewards to the community and track the progress of the album.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  maximumScale: 5,
  themeColor: "#7AAA52",
};

export default function StreamTracker() {
  return (
    <PageWrapper goBack>
      <Heading>Stream Tracker (Glass Animals)</Heading>
      <Text>
      Universal Music Group and Polydor Records partnered with the Roblox game 'Pls Donate' and their discord server for their popular band Glass Animals. Rivo built the Spotify stream tracker that was used to distribute rewards to the community and track the progress of the album.
      </Text>
      <Title>What is Stream Tracker?</Title>
      <Text>
      Stream Tracker was a discord bot that listened to discord status changes and tracked the progress of the new Glass Animals album "I Love You So Fucking Much". Once a user listened to 5 songs they got a code for the limited Roblox UGC "Glass Animals Turquoise Eye Head"
      </Text>
      <Grid>
          <GridItem>
            <ImageWrapper
              src="/projects/stream-tracker/ugc.webp"
              alt="Glass Animals Roblox UGC"
              size="small"
            />
          </GridItem>
          </Grid>
        <Title>Challenges</Title>
      <Text>
      Due to the huge size of the Hazem Discord Server the bot had to listen to hundrets of thousands of events by discord to 
      </Text>
      <Grid>
          <GridItem>
            <ImageWrapper
              src="/projects/stream-tracker/Screenshot_1.png"
              alt="Glass Animals Bot Screenshot 1"
              size="auto"
              zoom
            />
          </GridItem>
          <GridItem>
            <ImageWrapper
              src="/projects/stream-tracker/Screenshot_2.png"
              alt="Glass Animals Bot Screenshot 2"
              size="auto"
              zoom
            />
          </GridItem>
          <GridItem>
            <ImageWrapper
              src="/projects/stream-tracker/Screenshot_3.png"
              alt="Glass Animals Bot Screenshot 3"
              size="auto"
              zoom
            />
          </GridItem>
          <GridItem>
            <ImageWrapper
              src="/projects/stream-tracker/Screenshot_4.png"
              alt="Glass Animals Bot Screenshot 4"
              size="auto"
              zoom
            />
          </GridItem>
          </Grid>
    </PageWrapper>
  );
}
