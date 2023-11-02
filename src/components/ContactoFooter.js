import React from 'react';
import './ContactoFooter.css'

const ContactoFooter = () => {
  return (
    <div>
      <section id="contact" className="add-padding border-top-color2">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-6 col-md-5 text-right scrollimation fade-up d1">
              <h1 className="big-text">Contact Me</h1>
              <p className="lead">Software Engineer. Lawyer.<br />Experienced Manager. Entrepreneur.</p>
              <p>
                Sinatra, Ruby on Rails, JavaScript, Node.js, Express.js, Backbone.js, Handlebars.js, jQuery, AJAX, HTML5, CSS3, SASS, SQL, APIs, Git, GitHub/Bitbucket, WordPress, Heroku, Responsive/Mobile Development.
              </p>
              <p>Please feel free to contact me with questions, comments, or collaborations.</p>
              <p>For more information, <a href="http://korenlc.com" target="_blank" rel="noopener noreferrer">visit my blog.</a></p>
            </div>

            <form id="contact-form" className="col-sm-6 col-md-offset-1 scrollimation fade-left d3" action="contact.php" method="post" noValidate>
              <div className="form-group">
                <label className="control-label" htmlFor="contact-name">Name</label>
                <div className="controls">
                  <input
                    id="contact-name"
                    name="contactName"
                    placeholder="Your name"
                    className="form-control requiredField"
                    data-new-placeholder="Your name"
                    type="text"
                    data-error-empty="Please enter your name"
                  />
                  <i className="fa fa-user" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label" htmlFor="contact-mail">Email</label>
                <div className="controls">
                  <input
                    id="contact-mail"
                    name="email"
                    placeholder="Your email"
                    className="form-control requiredField"
                    data-new-placeholder="Your email"
                    type="email"
                    data-error-empty="Please enter your email"
                    data-error-invalid="Invalid email address"
                  />
                  <i className="fa fa-envelope" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label" htmlFor="contact-message">Message</label>
                <div className="controls">
                  <textarea
                    id="contact-message"
                    name="comments"
                    placeholder="Your message"
                    className="form-control requiredField"
                    data-new-placeholder="Your message"
                    rows="6"
                    data-error-empty="Please enter your message"
                  />
                  <i className="fa fa-comment" />
                </div>
              </div>

              <p>
                <button
                  name="submit"
                  type="submit"
                  className="btn btn-color2 btn-block"
                  data-error-message="Error!"
                  data-sending-message="Sending..."
                  data-ok-message="Message Sent"
                >
                  <i className="fa fa-paper-plane" /> Send Message
                </button>
              </p>
              <input type="hidden" name="submitted" id="submitted" value="true" />
            </form>
          </div>
        </div>
      </section>

      <footer id="main-footer" className="add-padding border-top-color2">
        <div className="container">
          <p><a href="http://korenlc.com" target="_blank" rel="noopener noreferrer">VISIT MY BLOG</a></p><br />
          <ul className="social-links text-center">
            <li><a href="https://twitter.com/korenlc" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-fw" /></a></li>
            <li><a href="https://plus.google.com/u/0/+KLCohen/posts/p/pub" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus fa-fw" /></a></li>
            <li><a href="https://www.linkedin.com/in/korenlesliecohen" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-fw" /></a></li>
          </ul>
          <p className="text-center">&copy; 2014 - Koren Leslie Cohen</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactoFooter;
