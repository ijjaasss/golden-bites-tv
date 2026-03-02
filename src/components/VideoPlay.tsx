

type VideoPlayProps = {
  src: string;
};

function VideoPlay({ src }: VideoPlayProps) {
  return (
    <section className="w-full h-screen overflow-hidden bg-black">
      <video
        className="w-full h-full object-cover"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </section>
  );
}

export default VideoPlay;