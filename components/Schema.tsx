export function Schema({ json }: { json: string }) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
