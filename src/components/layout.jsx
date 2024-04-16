function Layout({ children }) {
  return (
    <div className="bg-texture h-screen flex justify-between">
      {/* left */}
      <div className="h-full w-full xl:w-1/2">
        <div className="flex bg-primary-green h-screen w-1/2  border rounded-r-full absolute"></div>
        {children}
      </div>
      {/* right */}
      <div className="p-60 items-center h-full z-50 ">
        <img
          src="../src/assets/images/TWC-Logo.png"
          className=""
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

export default Layout;
