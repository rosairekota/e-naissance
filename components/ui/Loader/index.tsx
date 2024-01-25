import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-black-2/60 bg-cover" style={{ backgroundImage: "url('/images/login/acte.png')" }}>
      <div className="absolute inset-0 bg-black/50 w-full h-full left-0 top-0 bottom-0 right-0"></div>
      <div className="flex flex-col items-center gap-12  z-30">
      <Image
            src={"/images/logo/anicns.png"}
            className="animate-ping-once"
            width={100}
            height={100}
            alt="image"
          />
          <h1 className="text-white text-4xl font-extrabold z-30">Chargement <span className="animate-ping-once">...</span></h1>
      </div>
    </div>
  );
};

export default Loader;
