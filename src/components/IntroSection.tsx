import React from "react";

const IntroSection: React.FC = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="flex items-center gap-6 w-full">
        <img
          src="https://avatars.githubusercontent.com/u/42904962?v=4"
          className="h-30 w-30 rounded-lg object-cover"
          alt="Meowphetamine Logo"
        />
        <div className="text-left">
          <h1 className="text-white text-2xl font-bold">Welcome to meowphetamine</h1>
          <p className="text-zinc-400 mt-2 max-w-md">
            Your personal portal for photography, code, and curiosity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
