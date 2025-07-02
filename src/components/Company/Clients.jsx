const Clients = () => {
  return (
    <div className="bg-white py-20 px-4 md:px-20 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        
        {/* Title */}
        <div className="mb-8 md:mb-0 md:mr-12 w-full md:w-1/4">
          <h2 className="text-lg font-normal">Clients</h2>
        </div>

        {/* Clients Lists */}
        <div className="flex flex-col sm:flex-row justify-between w-full md:w-3/4 gap-10 sm:gap-4 text-sm text-gray-500">
          
          {/* Column 1 */}
          <ul className="space-y-2">
            {["CHR", "Hotel Chautari Nagarkot", "Sikali Resort", "Hetel Yechu"].map((name, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:underline transition duration-150 ease-in-out"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="hidden sm:block border-l border-gray-200 h-24"></div>

          {/* Column 2 */}
          <ul className="space-y-2">
            {["Yogdan Consumer Coop.", "Bhaktapur12", "Banepa Municipaltiy Ward-1", "Hotel Ashirbad - Pokhara"].map((name, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:underline transition duration-150 ease-in-out"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="hidden sm:block border-l border-gray-200 h-24"></div>

          {/* Column 3 */}
          <ul className="space-y-2">
            {["Dk River Overseas", "KhojSansar", "Personal Portfolio", "Aalish"].map((name, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:underline transition duration-150 ease-in-out"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Clients;
