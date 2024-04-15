function layout() {
  return (
    <div className="bg-texture h-screen flex justify-between">
      {/* left */}
      <div className="h-full w-full">
        <div className="flex bg-primary-green h-screen w-1/2 border rounded-r-full absolute"></div>
        <div className="p-40 z-50 absolute">
          <h1 className="text-white font-poppins font-bold text-5xl">Hi there,</h1>
          <h2 className="text-white font-medium text-3xl">Welcome to our <br />contact portal</h2>
          <input className="h-10 w-96 p-3 rounded-3xl text-primary-green" type="text" placeholder="e-mail" />
        </div>
      </div>
      {/* right */}
      <div className="p-52 items-center h-full z-50">
        <img
          src="../src/assets/images/TWC-Logo.png"
          className="w-"
          alt="TW Logo"
        />
        <h1 className="text-primary-green font-bold font-poppins text-6xl">
          contacts
        </h1>
        <h1 className="text-primary-green font-medium font-poppins text-5xl">
          portal
        </h1>
      </div>
    </div>
  );
}

export default layout;
