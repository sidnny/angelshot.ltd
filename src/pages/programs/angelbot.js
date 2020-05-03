import React from "react"
import Layout from "../../components/layout"
import Intro from "../../components/intro"
import Floral from "../../components/floral"
import Hero from "../../components/hero"
import InputText from "../../components/InputText"
import InputCheckbox from "../../components/InputCheckbox"
import Button from "../../components/Button"
import Cite from "../../components/cite"
import { Link } from "gatsby"

import styles from "./angelbot.module.css"

export default () => (
  <Layout>
    <Hero className={styles.hero}>
      <Intro
        quoteStyles={styles.quote}
        quote="The greatness of a community is most accurately measured by the compassionate actions of its members."
        quoteAuthor="Coretta Scott King"
      >
        Our Programs
      </Intro>
      <Cite
        author="Toimetaja tõlkebüroo"
        authorURL="https://unsplash.com/@toimetaja?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        site="Unsplash"
        siteURL="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      />
    </Hero>
    <Floral withHero className={styles.grid}>
      <section className={styles.intro}>
        <h2 className="title">AngelBot</h2>
        <p>
          AngelBot encourages you to remove yourself from situations you
          perceive to be dangerous by sending you text messages as your friend,
          Angel.
        </p>
      </section>
      <picture className={styles.logo}>
        <source
          media="(max-width: 1023px)"
          srcSet="../images/angelbot.png, ../images/angelbot@2x.png 2x"
        />
        <img src="../images/angelbot.png" alt="AngelBot logo" />
      </picture>

      <section className={styles.form}>
        <h3 className="subtitle">Join the Beta</h3>
        <p>
          Have you ever needed an out? Do you want to help improve the future of
          women's safety? Sign up to be a part of the AngelBot Beta program!
        </p>
        <form>
          <h4 className="subheader2">Required fields:</h4>
          <InputText
            type="tel"
            name="PHONE"
            placeholder="Phone number"
            required
            labelBody="Phone number"
            tooltip="Used to add you to Angel's contacts"
          />
          <InputText
            type="email"
            name="EMAIL"
            placeholder="Email"
            required
            labelBody="Email"
          />
          <InputCheckbox
            value="1"
            name="EULA"
            required
            labelBody={
              <span>
                I have ready and agree to the{" "}
                <Link to="/terms">End User License Agreement</Link>.
              </span>
            }
          />
          <h4 className="subheader2">Demographics (Optional):</h4>
          <p>
            In order to ensure that we are able to provide this service to a
            diverse group of individuals, please share with us the following
            information. We will never share this with anyone.
          </p>
          <InputText
            type="number"
            name="AGE"
            placeholder="Age"
            labelBody="Age"
          />
          <InputText
            type="text"
            name="GENDER"
            placeholder="Gender"
            labelBody="Gender"
          />
          <InputText
            type="number"
            name="ZIP"
            placeholder="Zip Code"
            labelBody="Zip Code"
          />
          <InputText
            type="text"
            name="SEXUALORIENTATION"
            placeholder="Sexual Orientation"
            labelBody="Sexual Orientation"
          />
          <InputText
            type="text"
            name="OCCUPATION"
            placeholder="Occupation (student/other)"
            labelBody="Occupation (student/other)"
          />
          <Button
            buttonType="button2"
            type="submit"
            tagName="button"
            children="Join the Beta"
          />
        </form>
      </section>
      <section className={styles.howItWorks}>
        <h4 className="subheader">How it works</h4>
        <p>
          AngelBot is an AI text messaging service that, to the outside
          observer, is your friend Angel who needs you to go help her deal with
          various unforeseen circumstances. Through some short Q&amp;A texts,
          AngelBot will try to figure out if you are in immediate need for an
          excuse to leave or if it needs to check in on you after a period of
          time. When it is time for you to leave, use your conversation with
          Angel as an excuse to remove yourself from potential danger.
        </p>
        <p classname="bottom">
          <strong>Interested in working with your community?</strong>
          <br />
          Sign up for the{" "}
          <Link to="/programs/wings">AngelShot WINGS Program</Link>.
        </p>
      </section>
    </Floral>
  </Layout>
)