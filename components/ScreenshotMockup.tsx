import Image from 'next/image';

type ScreenshotMockupProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
};

export function ScreenshotMockup({ src, alt, caption, priority }: ScreenshotMockupProps) {
  return (
    <figure className="mockup">
      <div className="mockup-frame">
        <Image src={src} alt={alt} width={360} height={780} priority={priority} className="mockup-image" />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
