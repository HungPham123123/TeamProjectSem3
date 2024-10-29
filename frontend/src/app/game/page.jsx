import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Movies() {
  return (
    <>
      <Head>
        <title>Waves - Movie & Games Collections</title>
      </Head>

      <div style={styles.container}>
        {/* Navigation Tabs */}
        <nav style={navContainerStyle}>
        <ul style={navMenuStyle}>
          <li style={navItemStyle}><a href="#" style={linkStyle}>MUSIC</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>MOVIE</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>GAME</a></li>
        </ul>
      </nav>

        {/* Popular Movie DVDs Section */}
        <section id="popular-movie-dvds" style={styles.section}>
          <h2 style={styles.sectionTitle}>Popular Movie DVDs</h2>
          <div style={styles.cardContainer}>
            {[...Array(4)].map((_, i) => (
              <div key={i} style={styles.card}>
                <Image src="/placeholder-image.jpg" alt="Movie DVD Item" width={200} height={150} />
                <p style={styles.cardLabel}>SCARY</p>
                <p style={styles.cardRating}>★ 9.1</p>
                <p style={styles.cardDescription}>Terrifier 3</p>
              </div>
            ))}
          </div>
        </section>

        {/* Action Section */}
        <section id="action" style={styles.section}>
          <h2 style={styles.sectionTitle}>Action</h2>
          <div style={styles.cardContainer}>
            {[...Array(3)].map((_, i) => (
              <div key={i} style={styles.card}>
                <Image src="/placeholder-image.jpg" alt="Action Movie Item" width={200} height={150} />
                <p style={styles.cardLabel}>ACTION</p>
                <p style={styles.cardRating}>★ 8.9</p>
                <p style={styles.cardDescription}>Top Action Hits</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comedy Section */}
        <section id="comedy" style={styles.section}>
          <h2 style={styles.sectionTitle}>Comedy</h2>
          <div style={styles.cardContainer}>
            {[...Array(3)].map((_, i) => (
              <div key={i} style={styles.card}>
                <Image src="/placeholder-image.jpg" alt="Comedy Movie Item" width={200} height={150} />
                <p style={styles.cardLabel}>COMEDY</p>
                <p style={styles.cardRating}>★ 8.5</p>
                <p style={styles.cardDescription}>Best Comedies</p>
              </div>
            ))}
          </div>
        </section>

        {/* Most Popular Actor Section */}
        <section id="popular-actor" style={styles.section}>
          <h2 style={styles.sectionTitle}>Most Popular Actor</h2>
          <div style={styles.artistContainer}>
            {[...Array(5)].map((_, i) => (
              <div key={i} style={styles.artistCard}>
                <div style={styles.artistImage}></div>
                <p style={styles.artistName}>Luis Damilton</p>
              </div>
            ))}
          </div>
        </section>

        {/* Family Section */}
        <section id="family" style={styles.section}>
          <h2 style={styles.sectionTitle}>Family</h2>
          <div style={styles.cardContainer}>
            {[...Array(3)].map((_, i) => (
              <div key={i} style={styles.card}>
                <Image src="/placeholder-image.jpg" alt="Family Movie Item" width={200} height={150} />
                <p style={styles.cardLabel}>FAMILY</p>
                <p style={styles.cardRating}>★ 8.7</p>
                <p style={styles.cardDescription}>Heartwarming Tales</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Games DVDs Section */}
        <section id="popular-games-dvds" style={styles.section}>
          <h2 style={styles.sectionTitle}>Popular Games DVDs</h2>
          <div style={styles.cardContainer}>
            {[...Array(4)].map((_, i) => (
              <div key={i} style={styles.card}>
                <Image src="/placeholder-image.jpg" alt="Games DVD Item" width={200} height={150} />
                <p style={styles.cardLabel}>SHOOTER GAME</p>
                <p style={styles.cardRating}>★ 9.0</p>
                <p style={styles.cardDescription}>Call of Duty</p>
              </div>
            ))}
          </div>
        </section>

        {/* Games Section */}
        <section id="games" style={styles.section}>
          <h2 style={styles.sectionTitle}>Games</h2>
          <div style={styles.cardContainer}>
            {[...Array(4)].map((_, i) => (
              <div key={i} style={styles.card}>
                <Image src="/placeholder-image.jpg" alt="Games Item" width={200} height={150} />
                <p style={styles.cardLabel}>TRENDING</p>
                <p style={styles.cardRating}>★ 8.8</p>
                <p style={styles.cardDescription}>5 New Games to Play</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fighting Games Section */}
        <section id="fighting-games" style={styles.section}>
          <h2 style={styles.sectionTitle}>Fighting Games</h2>
          <div style={styles.cardContainer}>
            {[...Array(3)].map((_, i) => (
              <div key={i} style={styles.card}>
                <Image src="/placeholder-image.jpg" alt="Fighting Games Item" width={200} height={150} />
                <p style={styles.cardLabel}>FIGHTING GAME</p>
                <p style={styles.cardRating}>★ 8.6</p>
                <p style={styles.cardDescription}>Top Fighters</p>
              </div>
            ))}
          </div>
        </section>

        {/* Adventure Games Section */}
        <section id="adventure-games" style={styles.section}>
          <h2 style={styles.sectionTitle}>Adventure Games</h2>
          <div style={styles.cardContainer}>
            {[...Array(3)].map((_, i) => (
              <div key={i} style={styles.card}>
                <Image src="/placeholder-image.jpg" alt="Adventure Games Item" width={200} height={150} />
                <p style={styles.cardLabel}>ADVENTURE GAME</p>
                <p style={styles.cardRating}>★ 8.7</p>
                <p style={styles.cardDescription}>Adventure Awaits</p>
              </div>
            ))}
          </div>
        </section>

        {/* Most Popular Genre of Games Section */}
        <section id="popular-genre-games" style={styles.section}>
          <h2 style={styles.sectionTitle}>Most Popular Genre of Games</h2>
          <div style={styles.artistContainer}>
            {[...Array(5)].map((_, i) => (
              <div key={i} style={styles.artistCard}>
                <div style={styles.artistImage}></div>
                <p style={styles.artistName}>Luis Damilton</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

const navContainerStyle = {
    backgroundColor: '#262146',
    padding: '16px 0',
    maxWidth: '1000px',
    margin: '40px 180px 100px',
    borderRadius: '12px'
  };

  const linkStyle = {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
  };
  
  const navItemStyle = {
    margin: '0 20px',
  };
  
  const navMenuStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  };

const styles = {
  container: {
    backgroundColor: '#ffff',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  tabsWrapper: {
    backgroundColor: '#004080', // Dark blue wrapper around all tabs
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  tabs: {
    display: 'flex',
    gap: '15px',
  },
  tabItem: {
    fontSize: '16px',
    cursor: 'pointer',
    color: '#fff',
  },
  tabLink: {
    textDecoration: 'none',
  },
  section: {
    padding: '20px 0',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '20px',
    color: '#ff0055',
    marginBottom: '20px',
    textTransform: 'uppercase',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#ffff',
    padding: '15px',
    textAlign: 'center',
    borderRadius: '8px',
    width: '200px',
    minHeight: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  cardLabel: {
    fontSize: '12px',
    color: '#ff0055',
    fontWeight: 'bold',
  },
  cardRating: {
    color: '#ffcc00',
    fontSize: '14px',
    margin: '5px 0',
  },
  cardDescription: {
    fontSize: '13px',
    color: '#fff',
  },
  artistContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  artistCard: {
    textAlign: 'center',
    width: '150px',
  },
  artistImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    marginBottom: '10px',
  },
  artistName: {
    fontSize: '14px',
    color: '#fff',
    fontWeight: 'bold',
  },
};
