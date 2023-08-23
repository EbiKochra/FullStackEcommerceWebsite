import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact Page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.269064359545!2d-79.38963172408434!3d43.64257005311862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2s!4v1692784832815!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">
            <form 
              action="https://formspree.io/f/mdoraqrq"
              method="POST" 
              className="contact-inputs">
              <input 
                type="text" 
                placeholder="username" 
                name="username"
                required
                autoComplete="off"
                
              />

              <input 
                type="email" 
                placeholder="Email" 
                name="Email"
                required
                autoComplete="off"
                
              />

              <textarea 
                name="Message"
                cols="30"
                rows="10"
                autoComplete="off"
                required
                placeholder="Enter yor message"
              ></textarea>

            <input
                type="submit"
                value="send"
            />

            </form>
        </div>
      </div>

  </Wrapper>;
};

export default Contact;
