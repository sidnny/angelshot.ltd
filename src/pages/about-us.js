import React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Cite from "../components/cite"
import Hero from "../components/hero"
import {
  CardWithOverlay,
  CardBody,
  Overlay,
  OverlayItem,
  Image,
  Title,
} from "../components/cardWithOverlay"
import SectionHeader from "../components/sectionHeader"
import Floral from "../components/floral"
import styles from "./about-us.module.css"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO
      title="About Us - AngelShot"
      description="AngelShot is a nonprofit working on a mission of providing free and accessible tools to prevent sexual violence. Learn more about our goals, milestones and founders."
    />
    <Hero className={styles.hero}>
      <Intro
        quoteStyles={styles.quote}
        quote="The goal of sexual violence prevention is to stop it from happening in
        the first place."
      >
        About Us
      </Intro>
      <Cite
        author="Toimetaja tõlkebüroo"
        authorURL="https://unsplash.com/@toimetaja?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        site="Unsplash"
        siteURL="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      />
    </Hero>

    <SectionHeader className={styles.goalsHeader}>Our Goals</SectionHeader>
    <CardWithOverlay id="community_engagement" className={styles.firstCard}>
      <Image
        srcset={[
          "/images/goal-community_engagement-small.jpg",
          "/images/goal-community_engagement-small@2x.jpg",
          "/images/goal-community_engagement-large.jpg",
          "/images/goal-community_engagement-large@2x.jpg",
        ]}
        alt="People at a food establishment"
      />
      <CardBody>
        <Title>Increase community engagement & accountability</Title>
        <p>
          <strong>Sexual violence affects everyone.</strong> According to the
          CDC, 1 in 3 women and 1 in 4 men experienced sexual violence involving
          physical contact during their lifetimes.<sup><a href = "#citations">1</a></sup> More 
          than half of sexual assault incidents occurs while the victim is 
          pursuing leisure activities away from home, and instances of rape within colleges are
          severely under-reported.<sup><a href = "#citations">2</a></sup>
        </p>
        <h3 className="subheader2">THIS IS NOT OKAY.</h3>
        <p>
          The AngelShot WINGS Program will reinforce social norms that protect
          against sexual violence to achieve our mission of creating safe
          environments.
        </p>
        <p>
          Our Ambassadors work with local establishments, student councils and
          school administrators to identify and address sexual violence by
          defining policies on prevention and intervention within their
          communities.
        </p>
        <p>
          To be designated as Havens, local establishments and schools are asked
          to take a pledge of accountability and transparency — self-assessing
          their current environment when it comes to sexual violence prevention
          and taking actions to make it safe.
        </p>
      </CardBody>
      <Overlay>
        <OverlayItem>
          51% of student rape and sexual assault{" "}
          <strong>victimizations occurred</strong> while the victim was pursuing
          leisure activities <strong>away from home</strong>.<sup><a href = "#citations">2</a></sup>
        </OverlayItem>
        <OverlayItem>
          College women are <strong>twice as likely</strong> to be
          sexually assaulted than robbed.<sup><a href = "#citations">3</a></sup>
        </OverlayItem>
      </Overlay>
    </CardWithOverlay>
    <CardWithOverlay alt id="seek_help">
      <Image
        srcset={[
          "/images/goal-seek_help-small.jpg",
          "/images/goal-seek_help-small@2x.jpg",
          "/images/goal-seek_help-large.jpg",
          "/images/goal-seek_help-large@2x.jpg",
        ]}
        alt="People sitting in a support circle"
      />
      <CardBody>
        <Title>Prevent incidents and encourage victims to seek help</Title>
        <p>
          As awareness becomes more prevalent, we are seeing an increased number
          of grassroots movements within individual establishments that help
          prevent people from becoming victims of sexual violence. While
          technology has enabled us to easily check in on our friends when
          they’re out on dates, it still requires relying on someone else. Not
          everyone will have that option and there is no guarantee someone will
          be around when you need them.
        </p>
        <h3 className="subheader2">THIS NEEDS TO BE BETTER.</h3>
        <p>
          AngelShot’s knowledge base will arm an individual with the information
          and knowledge to recognize when they’re in a potentially dangerous
          situation, and will provide them with the methodology to help
          themselves get out of it.
        </p>
        <p>
          Using a mobile phone, AngelBot provides an exit strategy for an
          individual when they need to be bailed out of an unwanted situation.
        </p>
        <p>
          Should someone become the victim of sexual violence, we will be there
          to provide the support and resources necessary for them to report the
          incident.
        </p>
      </CardBody>
      <Overlay>
        <OverlayItem>
          80% of rape and <strong>sexual assault victimizations</strong> of
          students and 67% of non-students go{" "}
          <strong>unreported to police</strong>.<sup><a href = "#citations">2</a></sup>
        </OverlayItem>
        <OverlayItem>
          <strong>Fewer</strong> than 1 in 5 female victims{" "}
          <strong>received assistance</strong> from a victim services agency.<sup><a href = "#citations">2</a></sup>
        </OverlayItem>
      </Overlay>
    </CardWithOverlay>
    <CardWithOverlay id="prevent_violence">
      <Image
        srcset={[
          "/images/goal-prevent_rape-small.jpg",
          "/images/goal-prevent_rape-small@2x.jpg",
          "/images/goal-prevent_rape-large.jpg",
          "/images/goal-prevent_rape-large@2x.jpg",
        ]}
        alt="Man holding a woman's hand down on a cafe table"
      />
      <CardBody>
        <Title>Prevent violence by ending “Rape Culture”</Title>
        <p>
          We live in a society where sexual violence is normalized and excused
          in the media. It is bolstered in popular culture by the
          objectification of women’s bodies, use of misogynistic language, and
          the romanticization of sexual violence. This encroaches on women’s
          civil liberties from personal interactions to governmental policies.
        </p>
        <h3 className="subheader2">THIS HAS TO CHANGE.</h3>
        <p>
          Women’s rights and safety should be a guarantee. AngelShot provides
          educational resources that will compel our society to shift its
          mindset on the unacceptable behaviors that perpetuate rape culture.
          Through shared stories and experiences, we provide an outlet for those
          who have been a victim of sexual violence.
        </p>
        <p>
          We must educate and empower our communities to identify and combat the
          culture of toxic behavior. This includes engaging allies on how to be
          respectful sexual partners, promoting healthy sexuality and intimate
          relationship skills.
        </p>
        <p>
          Events allow our program to grow and reach more women and communities
          so that they can take an active role to influence and ameliorate these
          cultural norms.
        </p>
      </CardBody>
      <Overlay>
        <OverlayItem>
          In about 80% of rape and sexual assault victimizations, the{" "}
          <strong>offender was known</strong> to the victim.<sup><a href = "#citations">2</a></sup>
        </OverlayItem>
        <OverlayItem>
          About a quarter of victims who did not report to police believed the
          incident was a personal matter, and 1 in 5 stated a{" "}
          <strong>fear of reprisal</strong>.<sup><a href = "#citations">2,3</a></sup>
        </OverlayItem>
      </Overlay>
    </CardWithOverlay>

    <div id="citations" className={styles.citations}>
          <p>
            <ol>
              <li>
                "Preventing Sexual Violence." <i>Centers for Disease Control and Prevention</i>, 17 January 2020, 
                <a href = "https://www.cdc.gov/violenceprevention/sexualviolence/fastfact.html" target = "_blank">
                  https://www.cdc.gov/violenceprevention/sexualviolence/fastfact.html
                  </a>.
                </li>
                <br/>
              <li>Sinozich, Sofi and Lynn Langton, Ph.D. “Rape And Sexual Assault Among College-Age Females, 1995-2013.” 
                <i>Bureau of Justice Statistics</i>, 11 December 2014, 
                <a href ="https://www.bjs.gov/index.cfm?ty=pbdetail&iid=5176" target ="_blank">
                  https://www.bjs.gov/index.cfm?ty=pbdetail&iid=5176
                  </a>.
                  </li>
                  <br/>
              <li>“Campus Sexual Violence: Statistics.” <i>Rape, Abuse, & Incest National Network</i>, 2020, 
              <a href = "https://www.rainn.org/statistics/campus-sexual-violence" target = "_blank">
                https://www.rainn.org/statistics/campus-sexual-violence
                </a>.
                </li>
            </ol>
          </p>
      </div>

    <SectionHeader className={styles.milestoneHeader}>Milestones</SectionHeader>
    <div className={styles.slider}>
      <div className={styles.milestones}>
        <div className={styles.milestone}>
          <h3>Spring 2020</h3>
          <p>Launch AngelShot Website & Donation Platform</p>
        </div>
        <div className={styles.milestone}>
          <h3>Summer 2020</h3>
          <p>Launch AngelBot invite-only beta program</p>
        </div>
        <div className={styles.milestone}>
          <h3>Fall 2020</h3>
          <p>Pilot WINGS Community Engagement Program</p>
        </div>
      </div>
    </div>
    <div className={styles.future}>
      <h4 className="subheader2">Future program expansion</h4>
      <ul>
        <li>
          <p>Expand to large colleges in major metropolitan areas</p>
          <ul>
            <li>> 15,000 students</li>
            <li>
              Ex: University of Southern California, New York University, and
              University of Pennsylvania, UCLA, Michigan State, University of
              Texas at Austin
            </li>
          </ul>
        </li>
        <li>
          <p>Expand to “medium” colleges</p>
          <ul>
            <li>5,000 - 15,000 students</li>
            <li>
              Ex: Yale, Brown, Howard, Duke, University of Arkansas, University
              of Montana, Binghamton University
            </li>
          </ul>
        </li>
        <li>
          <p>Expand to all colleges nation-wide</p>
        </li>
        <li>
          <p>Expand social media outreach</p>
          <ul>
            <li>Explore various platforms such as GroupMe and Snapchat</li>
            <li>
              Invite local establishments such as bars and coffee shops to
              participate in WINGS
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <Floral doubleSided className={styles.team}>
      <SectionHeader className={styles.teamHeader}>Meet the Team</SectionHeader>
      <section className={styles.teammate}>
        <div className={styles.photo}>
          <img src="/images/team-wendy.jpg" alt="Wendy" />
          <h4>Wendy Lau, Co-Founder</h4>
        </div>
        <p>
          Wendy is a Hong Kong native who immigrated to Canada at a very young
          age, and moved to NYC to further her career in technology. She enjoys
          leading engineering teams and the challenges around process,
          efficiency and problem solving. She has since applied these interests
          to her current role as a Data Product Manager. You’ll likely find her
          printing her photos in the darkroom or playing video games, while
          listening to podcasts about how to work happily.
        </p>
      </section>
      <section className={styles.teammate}>
        <div className={styles.photo}>
          <img src="/images/team-soraya.jpg" alt="Soraya" />
          <h4>Soraya Dib, Co-Founder</h4>
        </div>
        <p>
          A self-proclaimed challenger of the status-quo, Soraya is a
          first-generation American and NYC native. She studied art and science
          and has established herself as a technology leader, founding a Women
          in Tech employee resource group as well as Women Tech Leaders NYC. She
          loves inspiring creativity in others and using her talents to promote
          women’s safety. She loves experimenting with visual art, container
          gardening and hosting BBQs during the warmer seasons.
        </p>
      </section>
      <section className={styles.teammate}>
        <div className={styles.photo}>
          <img src="/images/team-aida.jpg" alt="Aida" />
          <h4>Aida DeWitt, Director</h4>
        </div>
        <p>
          A senior software architect hailing from Toronto, Aida is a Canadian
          living in the San Francisco bay area. As an enterprise Solutions
          Architect she leads product & engineering teams at Fortune 500
          companies on design of modern cloud based customer experience delivery
          platforms. She is passionate about democratizing access to information
          and using technology for positive social impact. She balances her time
          working with bytes by getting outdoors; biking, hiking and getting her
          hands dirty with sustainable backyard gardening.
        </p>
      </section>
    </Floral>
  </Layout>
)
