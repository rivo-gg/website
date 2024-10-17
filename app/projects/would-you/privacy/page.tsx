import { Metadata } from "next";
import {
  Button,
  Container,
  Heading,
  ImageWrapper,
  Text,
  Title,
} from "@/app/projects/components/elements";
import { PageWrapper } from "@/app/projects/components/PageWrapper";

export const metadata: Metadata = {
  title: "My Next Page",
};

export default function Privacy() {
  return (
    <PageWrapper goBack>
      <Heading>Privacy Notice</Heading>
      <Container>
        <Title>Topic 1</Title>
        <Text>Lorem Ipsum Dolor</Text>
      </Container>
      <Container>
        <Title>Topic 1</Title>
        <Text>Lorem Ipsum Dolor</Text>
      </Container>
      <Container>
        <Title>Topic 1</Title>
        <Text>Lorem Ipsum Dolor</Text>
      </Container>
      <ImageWrapper
        src="/projects/would-you/showcase.png"
        alt="Would You Bot Showcase"
        size="large"
      />
      <Button>Accept</Button>
    </PageWrapper>
  );
}
