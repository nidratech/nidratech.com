import Link from 'next/link';
import Head from 'next/head';

function Home() {
  return (
    <div className="index__container">
      <div className="position-relative d-inline-block">
        <h1 className="display-5 nidratech__title">Web Consulting in Touch with Tomorrow</h1>
        <div className="highlight__line d-none d-lg-block"></div>
      </div>

      <p className="lead font-weight-normal nidratech__subtitle">
        We bring ideas to life and create products that people love. <br />
        Let us help you make something remarkable.
      </p>

      <div id="contact-container">
        <Link href="/contact">
          <a type="button" className="btn btn-primary">
            Contact Us
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Home;
