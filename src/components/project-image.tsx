import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /** Use inside `relative` + `overflow-hidden` containers (project cards). */
  fill?: boolean;
};

export default function ProjectImage({
  src,
  alt,
  priority = false,
  className = "",
  fill = true,
}: ProjectImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 80vw, 50vw"
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1280}
      height={720}
      sizes="(max-width: 768px) 80vw, 50vw"
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={className}
    />
  );
}
