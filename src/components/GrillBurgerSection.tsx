function GrillBurgerSection() {
  return (
    <section className="w-full h-screen overflow-hidden bg-black">
      <video
        className="w-full h-full object-cover"
        src="/video/burger video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
}

export default GrillBurgerSection;