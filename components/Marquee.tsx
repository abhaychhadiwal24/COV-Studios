import Image from "next/image";

interface MarqueeProps {
    images: string[];                   // image paths (relative to /public)
    speed?: number;                    // animation speed in seconds
    direction?: "left" | "right";     // flow direction
}

export default function Marquee({ images, speed = 20, direction = "left" }: MarqueeProps) {
    return (
        <div className="marquee">
            <div
                className={`marquee__inner ${direction === "right" ? "reverse" : ""}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {images.concat(images).map((src, i) => (
                    <div className="marquee__item" key={i}>
                        <Image src={src} alt={`marquee-img-${i}`} width={200} height={120} />
                    </div>
                ))}
            </div>
        </div>
    );
}
