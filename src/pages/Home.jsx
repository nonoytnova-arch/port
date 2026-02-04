import About from "./About";
import Dashboard from "./Dashboard";
import Contact from "./Contact";

function Home() {
  return (
    <div className="main home-container">
      {/* HERO */}
      <section id="home" className="home-section">
        <h1>Hi, I’m a React Developer 👋</h1>
        <p>
          𝐌𝐲 𝐧𝐚𝐦𝐞 𝐢𝐬 𝐕𝐢𝐤𝐚𝐬, 𝐚𝐧𝐝 𝐈 𝐚𝐦 𝐜𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 𝐩𝐮𝐫𝐬𝐮𝐢𝐧𝐠 𝐚 𝐁𝐚𝐜𝐡𝐞𝐥𝐨𝐫'𝐬 𝐝𝐞𝐠𝐫𝐞𝐞 𝐢𝐧 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬 (𝐁𝐂𝐀) 𝐟𝐫𝐨𝐦 𝐆𝐨𝐯𝐭 𝐜𝐨𝐥𝐥𝐞𝐠𝐞 𝐨𝐟 𝐅𝐚𝐫𝐢𝐝𝐚𝐛𝐚𝐝. 𝐈 𝐡𝐚𝐯𝐞 𝐚 𝐬𝐭𝐫𝐨𝐧𝐠 𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭 𝐢𝐧 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐚𝐧𝐝 𝐬𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭, 𝐚𝐧𝐝 𝐈’𝐦 𝐰𝐨𝐫𝐤𝐢𝐧𝐠 𝐨𝐧 𝐛𝐮𝐢𝐥𝐝𝐢𝐧𝐠 𝐦𝐲 𝐬𝐤𝐢𝐥𝐥𝐬 𝐢𝐧 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 𝐥𝐚𝐧𝐠𝐮𝐚𝐠𝐞𝐬 𝐬𝐮𝐜𝐡 𝐚𝐬 𝐰𝐞𝐛 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬 𝐥𝐢𝐤𝐞 𝐇𝐓𝐌𝐋, 𝐂𝐒𝐒, 𝐚𝐧𝐝 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭.

𝐈 𝐚𝐦 𝐚𝐥𝐬𝐨 𝐞𝐱𝐩𝐥𝐨𝐫𝐢𝐧𝐠 𝐚𝐫𝐞𝐚𝐬 𝐥𝐢𝐤𝐞 𝐝𝐚𝐭𝐚 𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞𝐬, 𝐝𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬, 𝐚𝐧𝐝 𝐬𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐞𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠 𝐚𝐬 𝐩𝐚𝐫𝐭 𝐨𝐟 𝐦𝐲 𝐬𝐭𝐮𝐝𝐲. 𝐈𝐧 𝐚𝐝𝐝𝐢𝐭𝐢𝐨𝐧 𝐭𝐨 𝐚𝐜𝐚𝐝𝐞𝐦𝐢𝐜𝐬, 𝐈 𝐞𝐧𝐣𝐨𝐲 𝐰𝐨𝐫𝐤𝐢𝐧𝐠 𝐨𝐧 𝐬𝐦𝐚𝐥𝐥 𝐩𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐚𝐧𝐝 𝐩𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐭𝐢𝐧𝐠 𝐢𝐧 𝐭𝐞𝐜𝐡 𝐞𝐯𝐞𝐧𝐭𝐬 𝐭𝐨 𝐠𝐚𝐢𝐧 𝐩𝐫𝐚𝐜𝐭𝐢𝐜𝐚𝐥 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞.

𝐌𝐲 𝐠𝐨𝐚𝐥 𝐢𝐬 𝐭𝐨 𝐛𝐞𝐜𝐨𝐦𝐞 𝐚 𝐬𝐤𝐢𝐥𝐥𝐞𝐝 𝐬𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐚𝐧𝐝 𝐜𝐨𝐧𝐭𝐫𝐢𝐛𝐮𝐭𝐞 𝐭𝐨 𝐫𝐞𝐚𝐥-𝐰𝐨𝐫𝐥𝐝 𝐩𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐭𝐡𝐚𝐭 𝐬𝐨𝐥𝐯𝐞 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐬 𝐚𝐧𝐝 𝐚𝐝𝐝 𝐯𝐚𝐥𝐮𝐞. 𝐈’𝐦 𝐚𝐥𝐰𝐚𝐲𝐬 𝐞𝐚𝐠𝐞𝐫 𝐭𝐨 𝐥𝐞𝐚𝐫𝐧, 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐞, 𝐚𝐧𝐝 𝐠𝐫𝐨𝐰 𝐢𝐧 𝐭𝐡𝐞 𝐟𝐢𝐞𝐥𝐝 𝐨𝐟 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="home-section">
        <About />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="home-section">
        <Dashboard />
      </section>

      {/* CONTACT */}
      <section id="contact" className="home-section">
        <Contact />
      </section>
    </div>
  );
}

export default Home;