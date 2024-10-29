export function Schema({ json }: { json: string }): JSX.Element {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
