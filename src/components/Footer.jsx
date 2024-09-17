
function Footer () {
    

    return (
        <footer style={styles.footer}>
        <div style={styles.section}>
                <h3>Contact Information</h3>
          <hr />
          <br/>
          <p><a href="mailto:vivekyadav.shc@gmail.com"  style={styles.email}>Email:vivekyadav.shc@gmail.com</a></p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 1234 Example St, City, Country</p>
        </div>
        <div style={styles.section}>
                <h3>Follow Us</h3>
          <hr />
          <br/>
          <p><a href="https://www.facebook.com/login/"  style={styles.email}>Facebook</a></p>
          <p><a href="https://www.instagram.com/"  style={styles.email}>Instagram</a></p>
          <p><a href="https://x.com/?lang=en"  style={styles.email}>Twitter</a></p>
        
        </div>
        <div style={styles.section}>
                <h3>Policies</h3>
          <hr />
          <br/>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Refund Policy</p>
        </div>
      </footer>
    );
};
const styles = {
 
  footer: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-around',
    flexWrap: 'wrap',
    },
  section: {
      flex: 1,
        margin: '10px',
        minWidth: '250px',
  },
  email: {
    color: 'white',
    textDecoration:'none',
  },
 
  };
export default  Footer