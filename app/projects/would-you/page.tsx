import { Metadata } from "next";
import {
  Button,
  Container,
  Heading,
  ImageWrapper,
  Text,
  Title,
} from "../components/elements";

export const metadata: Metadata = {
  title: "My Next Page",
};

export default function WouldYou() {
  return (
    <>
      <Heading>Heading Component</Heading>
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
      />
    </>
  );
}
