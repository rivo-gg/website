import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

export function Testimonials() {
  return (
    <section className="my-20 flex w-full max-w-6xl flex-col gap-20">
      <span className="text-center text-6xl">
        Hear it from <span className="text-primary">Others</span>
      </span>
      <div className="flex flex-wrap justify-between gap-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            className="my-auto h-fit w-full"
          />
        ))}
      </div>
    </section>
  )
}

interface Testimonial {
  author: string
  job: string
  avatar: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    author: 'Shulker craft',
    job: 'YouTube Creator',
    avatar:
      'https://s3-alpha-sig.figma.com/img/35c1/7af6/fae9ef814c73afbce6628f46143bc7d0?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VpYFi~fcMu~IU5vcDnOx3gBulTsM9-il3IY4zm0kYpfcnWpphDFxsYpZG5NqMzCra8eX-KTHZvKAIqKG6LF2GPERcs-j~ApcsbOyMlqijaTK2Vt4gQkcmkZMNP65CkdqzHxcOZWyc8Agb-RolXBbhXaq6iwrY-HptEzDrILTQ6CczcaeePQi0vT9tkPlVNRbSN1-f5-U7L5OmpwKEnJWPLkbHA8PE--Zh43tx3XFsFCoQ7vnreNKDK2yEbFd0egwvijOCoS5n14-aByWXFUTAf5Wcl94POrHbpmSNqAajKj4qYYOYhhXIrbxY9OlNfO2ZYbfD8NUpqXFUK5wVADWLQ__',
    content: `In the last 2 years Rivo helped my channel get one of the longest lasting brand sponsorships, which helped my brand to grow and be financially stable. They are always quick to solve any problems, which is important in the creator space where everything moves fast.`
  },
  {
    author: 'Dylan',
    job: 'Community Manager at Universal Music Group',
    avatar:
      'https://s3-alpha-sig.figma.com/img/3282/d067/580b7915a9f698d7abbc07391e7fbed7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3KW4Z6mRI1EgLVUvFRCNsBAkcApEZQircAkaOaa-Y~MHTkANGEYlliiGolK2gujG5QBr7vOeIhJMVwk0GLmETj5rTHyvwEhMX3Ek3HjyFbtJBDaJGyq07JJC9cYnlZYRzvIiaor5lqiousZLGJytuBy1C9sg5RQOMPSVKon4iDlu04aqQXF6c3y-fRBUJAOouSTi25AtxHYi3pMSXYZekSeymHe9UDdfSS2DYmLwI5X0c4sDuI4ZLFKPrmnGOlQ7T-archqaSFmuQALCj8rUiWxH5nMOCfu0cPWngyUl6tlXK1uHD-gEDqiIsSOE2iTgsTuoQ5zA9P1ZU4IWYa9XQ__',
    content: `Working with the team at Rivo has been an opportunity I did not expect. Rivo kindly worked on a tight deadline to rigorously create & develop an interactive application for a world leading talent in music - the experience now being enjoyed in one of the largest gaming communities in Discord! Couldn't recommend their innovative solutions enough!`
  },
  {
    author: 'Tsundown',
    job: 'Game Developer',
    avatar:
      'https://s3-alpha-sig.figma.com/img/172d/7301/9dfc3d79170542f35c1d95a67b3ec5e1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SaE5oNwBfW5YTEg6C0DQrwx9Cgp-1~fQArykAY65p6mbDUzGdHhFwrY1g0edgmuN1VtzgWv6WyVEw7G6uwXODlor5n27oF0RHgo6E6BlEG2hh5nKGSemn3Gnn32TyH72XHxIfbrmQdsXaVcmohb34g83rtFU9~JG03ZTtsA7MP0s8CgA9pirh2TtnGdFW8Gk3gEVt6XEWwErKS2TlKfvSRcMSZ2EGdW7F59JRI~ddBfcIoCd62d18ZBI2fFd-ktvNYnnhwfuRih1ez84JYjk-WWfIcvb4L1NBHSl0Xnv9SN3TepItyTIhm-z05HRgOyYQZ9JO5h3WZubXTOfJJsRYA__',
    content: `Rivo made sure to help out my channel and game every step of the way! They not only made things easy and simple, but made sure I knew what the best things moving forward were. I cannot say enough good things about all thay they have done for me, and how they made growth simpler and more effective.`
  }
]

interface TestimonialCardProps {
  author: string
  job: string
  avatar: string
  content: string
  className?: string
}

const TestimonialCard = ({
  author,
  job,
  avatar,
  content,
  className
}: TestimonialCardProps) => (
  <div
    className={cn(
      'flex max-w-xs flex-col gap-2 rounded-xl border-2 border-foreground/5 bg-foreground/[0.0125] px-8 py-6',
      className
    )}
  >
    <span
      className="text-lg font-extralight"
      dangerouslySetInnerHTML={{
        __html: `<span class="text-xl text-primary">&quot;</span>${highlightRivo(content)}<span class="text-xl text-primary">&quot;</span>`
      }}
    />
    <div className="flex items-center gap-2">
      <Avatar className="h-12 w-12 select-none">
        <AvatarImage src={avatar} />
        <AvatarFallback>
          {/* Prints the first letter of each name, and a maximum of 2 letters. */}
          {author
            .split(' ')
            .map(
              (name, index) => index < 2 && <span key={index}>{name[0]}</span>
            )}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="font-bold">{author}</span>
        <span className="text-sm text-foreground/50">{job}</span>
      </div>
    </div>
  </div>
)

const highlightRivo = (text: string) => {
  const regex = /Rivo/g
  return text.replace(regex, '<span class="text-primary">Rivo</span>')
}
