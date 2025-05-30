import React from 'react';

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Our E-commerce Product Catalog Management CMS</h1>
      <p style={styles.description}>
        Welcome to our powerful E-commerce Product Catalog Management CMS (Content Management System), designed to help online store owners manage their product listings effortlessly. Whether you are a small business or a large enterprise, our CMS provides a seamless solution to organize, update, and display your products online.
      </p>

      <h2 style={styles.subTitle}>Key Features</h2>
      <ul style={styles.featureList}>
        <li style={styles.featureItem}>🔹 Easy-to-use Dashboard: Manage your products, categories, and inventory with a few clicks.</li>
        <li style={styles.featureItem}>🔹 Bulk Upload: Quickly upload large numbers of products through CSV or Excel files.</li>
        <li style={styles.featureItem}>🔹 Product Variants: Manage multiple product variants (size, color, etc.) for each listing.</li>
        <li style={styles.featureItem}>🔹 Inventory Management: Track stock levels and receive low-stock notifications.</li>
        <li style={styles.featureItem}>🔹 Real-time Updates: Sync your product information in real-time to keep your catalog always up-to-date.</li>
        <li style={styles.featureItem}>🔹 Multi-Language Support: Offer your catalog in different languages to cater to global customers.</li>
      </ul>

      <h2 style={styles.subTitle}>Why Choose Our CMS?</h2>
      <p style={styles.description}>
        Our CMS is designed with flexibility and scalability in mind. We understand that managing a product catalog can be time-consuming and complex, especially as your business grows. Our solution streamlines product management, increases efficiency, and allows you to focus on what truly matters: growing your business.
      </p>

      <h2 style={styles.subTitle}>Get Started Today!</h2>
      <p style={styles.description}>
        Ready to take control of your product catalog? Start using our CMS today and experience the convenience of managing your e-commerce store with ease.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    color: '#333',
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '20px',
    textAlign: 'justify',
  },
  subTitle: {
    fontSize: '1.8rem',
    marginTop: '20px',
    marginBottom: '10px',
  },
  featureList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  featureItem: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    paddingLeft: '20px',
  },
};

export default AboutPage;