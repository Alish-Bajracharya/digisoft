const Clients = () => {
  return (
    <section className="bg-white py-20 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          {/* Title */}
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-normal">Clients</h2>
          </div>

          {/* Clients Lists */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-gray-500">
            
            {/* Column 1 */}
            <ul className="space-y-2">
              {[
                "CHR",
                "Hotel Chautari Nagarkot",
                "Sikali Resort",
                "Hetel Yechu"
              ].map((name, i) => (
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

            {/* Column 2 */}
            <ul className="space-y-2">
              {[
                "Yogdan Consumer Coop.",
                "Bhaktapur12",
                "Banepa Municipaltiy Ward-1",
                "Hotel Ashirbad - Pokhara"
              ].map((name, i) => (
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

            {/* Column 3 */}
            <ul className="space-y-2">
              {[
                "Dk River Overseas",
                "KhojSansar",
                "Personal Portfolio",
                "Aalish"
              ].map((name, i) => (
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
    </section>
  );
};

export default Clients;
