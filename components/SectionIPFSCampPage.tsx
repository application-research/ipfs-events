'use client';

import styles from '@components/SectionIPFSCampPage.module.scss';

import { Ratio } from '@root/common/types';
import { VideoPlayer } from './VideoPlayer';
import { MarkdownToJSX } from './Markdown';
import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, TypeName } from '@root/common/types';

import TracksSVG from './svgs/TracksSVG';

import GutterContainer from '@root/components/GutterContainer';
import IPFSCampFooter from './IPFSCampFooter';
import Link from './Link';
import React, { useState } from 'react';
import ScheduleIPFSCamp2024 from './ScheduleIPFSCamp2024';
import BlockBuilder from './BlockBuilder';
import TicketCard from '@root/components/TicketCard';

export default function SectionCamppage({ upcomingEvents, scheduleData }) {
  const [expandedFaqLeft, setExpandedFaqLeft] = useState(null);
  const [expandedFaqRight, setExpandedFaqRight] = useState(null);

  const toggleFaq = (side, index) => {
    if (side === 'left') {
      if (expandedFaqLeft === index) {
        setExpandedFaqLeft(null);
      } else {
        setExpandedFaqLeft(index);
      }
    } else {
      if (expandedFaqRight === index) {
        setExpandedFaqRight(null);
      } else {
        setExpandedFaqRight(index);
      }
    }
  };

  const sponsorBlock = {
    id: '2',
    subtitle: 'Sponsors',
    direction: BlockDirectionEnum.COLUMN,
    cta: {
      type: CallToActionVariantEnum.SPONSOR,
      target: '_blank',
      buttonColor: 'linear-gradient(to left, #E01633, #CDB235, #4FD3CD, #0098C9)',
      textColor: 'black',
      text: 'Sponsor IPFS Camp 2024',
      link: 'https://airtable.com/appM094R1Ma5HG757/shrXTUagRUI1aC4G1',
    },
    block: [
      {
        id: 'participating-teams',
        type: BlockTypeEnum.LOGO_GRID,
        logosLarge: [
          {
            src: '/media/IPFS_logo.png',
            href: '',
          },
          {
            src: '/media/pl-logo.png',
            href: '',
          },
        ],
      },
    ],
  };

  const faqsLeft = [
    {
      question: 'What is IPFS Camp and who is it for?',
      answer:
        "IPFS Camp is for those who want to bend the arc of the Internet to be more open, efficient, and secure. It's a gathering for the entire IPFS community: builders, operators, researchers… and you! There will be talks, workshops, discussion circles, hacking time, and more — all focused on celebrating and advancing IPFS.",
    },
    {
      question: 'What does the ticket include?',
      answer: 'All tickets include entry to the full 3-day event with coffee, morning pastries, and lunch each day, plus the opening dinner party on Day 1.',
    },
    {
      question: 'Accommodations',
      answer:
        'The venue is located in the heart of Brussels. If you would like to stay at the Radisson, a limited number of rooms are available via a room block at Є199 per night. Booking details will be provided in your confirmation email.',
    },
    {
      question: 'Childcare',
      answer:
        'Childcare will be provided onsite to make this event more accessible to parents and caregivers. Please fill out the optional questions when you purchase your ticket on Luma. We will reach out to you for final RSVP by June 21.',
    },
  ];

  const faqsRight = [
    {
      question: 'Sounds great! How can I participate?',
      answer:
        "If you don't have a ticket yet, head to the Tickets section to purchase a ticket or apply for a discounted one. This is a decentralized event, with over 15 tracks across 3 days. Explore the track descriptions and schedules, and choose your own adventures depending on your interests! You can: [Submit a track or talk](https://airtable.com/appM094R1Ma5HG757/shrWn6XaRgUkYWPm3), [Sponsor](https://airtable.com/appM094R1Ma5HG757/shrXTUagRUI1aC4G1), [Apply as an IPFS Scholar](https://airtable.com/appM094R1Ma5HG757/shrQGQ8gH7OUXdUuc), [Volunteer](mailto:camp@ipfs.io?subject=Volunteer), or tell a friend!",
    },
    { question: 'How can I reach out to the organizers?', answer: 'Please reach out to camp@ipfs.io with any questions or suggestions.' },
    {
      question: 'What is the COVID / sick policy?',
      answer:
        "Masks will be provided at event entrances and throughout the venue. If you are presenting any symptoms of respiratory illness or have come in contact with someone who has presented symptoms or tested positive in the last five days, please do not attend the event for your own and all other attendees' health and safety. You may email camp@ipfs.io for a refund. Rest up and feel better!",
    },
    {
      question: 'Code of Conduct',
      answer: 'This event will follow the [IPFS Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).',
    },
  ];

  return (
    <div className={styles.pageContainer} style={{ overflow: 'hidden' }}>
      <img src="/media/squares.svg" className={styles.squaresClass} />
      <GutterContainer>
        <div style={{ display: 'grid', rowGap: '8rem' }}>
          <section>
            <div className={styles.imageWrapper}>
              <img src="/media/ipfscamp-2024.svg" alt="IPFS Camp 2024" className={styles.imageStyle} />
            </div>
            <header className={styles.header} style={{ paddingBottom: '4rem' }}>
              <div className={styles.headerText}>
                <h2 className={styles.h2}>IPFS Camp is for those who want to bend the arc of the Internet to be more open, efficient, and secure.</h2>
                <p className={styles.p}>
                  It's a gathering for the entire community: builders, operators, researchers… and you! Talks, workshops, discussion circles, hacking time, and more — all focused
                  on celebrating and advancing a better web. Connecting builders and real-world users, organized by thematic tracks, and inspired by both the in-depth conversations
                  and unbounded energy of previous IPFS gatherings, it will be an event to remember.
                </p>
                <div className={styles.rainbowBorderWrapper}>
                  <div className={styles.innerContent}>
                    <div className={styles.diptychHalf}>
                      <Link href={'https://lu.ma/ipfscamp24'} target="_blank">
                        <div className={styles.rainbowButton}>
                          <span className={styles.boldText}>GET TICKETS</span>
                        </div>
                      </Link>
                    </div>
                    <div className={styles.diptychHalf}>
                      <div className={styles.centerTextContainer}>
                        <span className={styles.boldText}>
                          Brussels, Belgium <br /> <br /> July 11-13, 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.topSquiggleContainer}>
                <svg className={styles.topSquiggleStyle} xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 564 457" fill="none">
                  <path
                    d="M120.782 32.3641C120.782 32.3641 1.58132 63 40.1581 119.934C78.7345 176.868 422.805 132.753 447.428 218.508C459.666 261.127 410.739 275.773 364.08 289.127C316.63 302.709 273.007 352.037 295.73 390.707C340.904 467.586 466.655 329.914 531.557 424.09"
                    stroke="url(#paint0_linear_778_2)"
                    strokeWidth="63.9167"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="paint0_linear_778_2" x1="554.599" y1="466.891" x2="47.6704" y2="4.44691" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#08ADE3" />
                      <stop offset="0.5" stopColor="#CDAB37" />
                      <stop offset="1" stopColor="#E01C33" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </header>
            <div className={styles.videoTitle}>
              <h2 className={styles.centeredSectionTitle}> IPFS Camp 2022 - Recap </h2>
            </div>
            <div className={styles.mediaContainer}>
              <VideoPlayer src={'/media/ipfs-camp-2022-highlights.mp4'} autoPlay muted ariaLabel="video" ratio={Ratio.ORIGINAL} />
            </div>
            {/* <div className={styles.videoSquiggleContainer}>
              <svg className={styles.videoSquiggleStyle} width="560" height="390" viewBox="0 0 560 390" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M85.7689 32.7635C85.7689 32.7635 -0.535029 83.9408 46.8507 130.949C94.2358 177.956 356.248 72.3749 400.875 149.369C423.055 187.636 388.233 210.611 354.847 231.94C320.897 253.631 300.406 308.606 329.812 341.178C388.272 405.932 448.657 251.756 527.911 329.311"
                  stroke="url(#paint0_linear_924_1095)"
                  stroke-width="63.9167"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="paint0_linear_924_1095" x1="566.574" y1="358.265" x2="-20.8976" y2="107.673" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#08ADE3" />
                    <stop offset="0.5" stop-color="#CDAB37" />
                    <stop offset="1" stop-color="#E01C33" />
                  </linearGradient>
                </defs>
              </svg>
            </div> */}
          </section>
        </div>
      </GutterContainer>
      <div style={{ position: 'relative' }}>
        <section id="about">
          <div className={styles.whatToExpectSection}>
            <div className={styles.twoColumns}>
              <div className={styles.imageWrapper}>
                <img src="/media/about-collage.jpg" alt="What to Expect at IPFS Camp" className={styles.imageStyle} />
              </div>
              <div>
                <div className={styles.expectationsContainer}>
                  <h1 className={styles.h3} style={{ paddingBottom: '1rem' }}>
                    What to Expect
                  </h1>
                  <p className={styles.p}>
                    IPFS is more than just a 'conference'; it's a global movement of builders, experts, problem-solvers, and visionaries immersed in creating a better web. Expect
                    hands-on workshops, in-depth discussions, and networking opportunities that will help you better understand how to apply the latest advancements in
                    decentralized technologies to solving your real-world challenges.
                  </p>
                  <h1>Past Participants Say...</h1>
                  <ul className={styles.tracksList} style={{ display: 'grid', rowGap: '0.5rem' }}>
                    <li className={styles.p}>"Talking with extremely talented and committed people helped me learn a lot."</li>
                    <li className={styles.p}>"Great sessions and interactive discussions left me feeling inspired and excited for the future."</li>
                    <li className={styles.p}>"Everyone was open-minded to newbie questions, challenges, and having a general goal of curiosity and learning."</li>
                    <li className={styles.p}>"We found similar projects that closely align, to learn from, to integrate with."</li>
                    <li className={styles.p}>"My questions got answered quickly from folks with expert knowledge of IPFS and the ecosystem."</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tracks">
          <GutterContainer>
            <div className={styles.trackHeading}>Tracks</div>
            <div className={styles.tracksSVGContainer}>
              <TracksSVG />
            </div>
            <div className={styles.tracksSection}>
              <div className={styles.trackColumns}>
                <div className={styles.trackContent}>
                  <h3 className={styles.trackTitle} style={{ paddingBottom: '1rem' }}>
                    Opening Keynotes
                  </h3>
                  <p className={styles.trackDescription}>
                    A warm and wonderful kickoff to IPFS Camp with keynote speakers, fireside chats, and a sampling of community talks and perspectives on the present and future of
                    IPFS.
                  </p>
                </div>
                <div className={styles.trackContent}>
                  <h3 className={styles.trackTitle} style={{ paddingBottom: '1rem' }}>
                    Decentralized Apps and Publishing
                  </h3>
                  <p className={styles.trackDescription}>
                    Explore the latest tools, frameworks, and best practices for building and deploying dApps that are resilient and put users in control of their data.
                  </p>
                </div>

                <div className={styles.trackContent}>
                  <h3 className={styles.trackTitle} style={{ paddingBottom: '1rem' }}>
                    Public Records and Human Rights
                  </h3>
                  <p className={styles.trackDescription}>Discover how IPFS is being used to protect public records and support human rights initiatives worldwide.</p>
                </div>
                <div className={styles.trackContent}>
                  <h3 className={styles.trackTitle} style={{ paddingBottom: '1rem' }}>
                    AI in 2024: Ethics, Ownership, and Data
                  </h3>
                  <p className={styles.trackDescription}>
                    In this track, we'll explore urgent topics of attribution, ethics, and payment in the age of AI-generated art, music, and text. Then, we’ll dive into how
                    content-addressed data can forge new opportunities for creators and developers.
                  </p>
                </div>
                <div className={styles.trackContent}>
                  <h3 className={styles.trackTitle} style={{ paddingBottom: '1rem' }}>
                    Climate Resilience and IPFS
                  </h3>
                  <p className={styles.trackDescription}>
                    In the face of the growing climate crisis, reliable and transparent environmental data is more crucial than ever. This track explores real-world applications of
                    IPFS in environmental monitoring, climate modeling, and disaster response.
                  </p>
                </div>
                <div className={styles.trackContent}>
                  <h3 className={styles.trackTitle} style={{ paddingBottom: '1rem' }}>
                    Syncing Bytes at Scale
                  </h3>
                  <p className={styles.trackDescription}>
                    Dive into the latest techniques and tools for efficiently syncing bytes at scale with IPFS. Learn how to optimize data transfer, ensure data integrity, and
                    reduce bandwidth costs. Whether you're working with scientific, media, or enterprise data, this track has something for anyone working with large-scale data.
                  </p>
                </div>
                <div className={styles.trackContent}>
                  <h3 className={styles.trackTitle} style={{ paddingBottom: '1rem' }}>
                    Libp2p Day
                  </h3>
                  <p className={styles.trackDescription}>
                    Join us for a full day dedicated to libp2p, the modular networking stack that powers IPFS, Ethereum, and other decentralized protocols. Learn about the latest
                    developments in libp2p, including new transports, improved NAT traversal, and enhanced security features. Hear from the core developers and researchers behind
                    libp2p, and discover how you can use this powerful library to build your own networks and applications.
                  </p>
                </div>
                <div className={styles.trackContent}>
                  <h3 className={styles.trackTitle} style={{ paddingBottom: '1rem' }}>
                    IPLD, Databases, and the People Who Love Them
                  </h3>
                  <p className={styles.trackDescription}>
                    Meet the passionate developers and researchers pushing the boundaries of what's possible with IPLD. Learn how experts are IPLD to build more efficient,
                    interoperable databases and data structures, and join the efforts to push IPLD forward.
                  </p>
                </div>
                <div className={styles.trackContent}>
                  <h3 className={styles.trackTitle} style={{ paddingBottom: '1rem' }}>
                    Startup Showcase
                  </h3>
                  <p className={styles.trackDescription}>
                    Lightning talks from projects and startups using IPFS to solve real-world problems, plus roundtables on how to solve shared challenges.
                  </p>
                </div>
              </div>
            </div>
          </GutterContainer>
        </section>
      </div>
      <section>
        <GutterContainer>
          <div className={styles.tracksSection}>
            <div className="">
              <div>Keynotes</div>
              <div>
                A warm and wonderful kickoff to IPFS Camp with keynote speakers, fireside chats, and a sampling of community talks and perspectives on the present and future of
                IPFS.
              </div>
            </div>
          </div>
        </GutterContainer>
      </section>
      <section id="tickets">
        <div className={styles.ticketSection}>
          <div className={styles.ticketTitle}>Tickets</div>
          <p className={styles.description}>
            All tickets include entry to the full 3-day event with coffee, <br /> morning pastries, and lunch each day, plus an opening dinner.
          </p>
          <div className={styles.ticketCardContainer}>
            <TicketCard name={'Early Bird'} price={'$395'} description={'Early Bird Ticket Wave 1, enjoy a 40% discount!'} ctaLink={'https://lu.ma/ipfscamp24'}></TicketCard>
            <TicketCard name={'Standard'} price={'$650'} description={'Available starting March 19.'} ctaLink={'https://lu.ma/ipfscamp24'}></TicketCard>
            <TicketCard
              name={'Supporter'}
              price={'$2,500'}
              description={'You love IPFS and want (and are able!) to support yourself + 1 Scholar to attend. Thank you!'}
              ctaLink={'https://lu.ma/ipfscamp24'}
            ></TicketCard>
          </div>
        </div>
      </section>
      <GutterContainer>
        <section>
          <h2 className={styles.centeredSectionTitle}>Get Involved</h2>
          <div className={styles.getInvolvedColumns}>
            <div className={styles.involvementColumn}>
              <div className={styles.rainbowBorderWrapper}>
                <Link href={'https://airtable.com/appM094R1Ma5HG757/shrWn6XaRgUkYWPm3'} target="_blank">
                  <div className={styles.involvementContent}>
                    <h4 className={styles.involvementText}>Submit a Track or Talk</h4>
                  </div>
                </Link>
              </div>
              <div className={styles.rainbowBorderWrapper}>
                <Link href={'https://airtable.com/appM094R1Ma5HG757/shrXTUagRUI1aC4G1'} target="_blank">
                  <div className={styles.involvementContent}>
                    <h4 className={styles.involvementText}>Become a Sponsor</h4>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.involvementColumn}>
              <div className={styles.rainbowBorderWrapper}>
                <Link href={'https://airtable.com/appM094R1Ma5HG757/shrQGQ8gH7OUXdUuc'} target="_blank">
                  <div className={styles.involvementContent}>
                    <h4 className={styles.involvementText}>Apply as an IPFS Scholar</h4>
                  </div>
                </Link>
              </div>
              <div className={styles.rainbowBorderWrapper}>
                <Link href={'mailto:camp@ipfs.io&subject=Volunteer'} target="_blank">
                  <div className={styles.involvementContent}>
                    <h4 className={styles.involvementText}>Volunteer</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <h1 className={styles.h3} id="schedule" style={{ paddingBottom: '2rem', color: 'var(--color-white)' }}>
          Schedule
        </h1>

        <ScheduleIPFSCamp2024 scheduleData={scheduleData} /> */}

        <div style={{ display: 'grid', rowGap: '8rem' }}>
          <div style={{ display: 'grid', rowGap: '2rem' }}>
            <div className={styles.headerWrapper}>
              <h2 className={styles.sectionTitle}>Past Camp Events</h2>
              <div className={styles.imageAndTextWrapper}>
                <img src="/media/ipfs-camp-2024.png" alt="IPFS Camp" />
                <div className={styles.impactText}>2022 Impact</div>
              </div>
            </div>
            <section className={styles.campEvents}>
              <div className={styles.statsColumnLeft}>
                <div className={styles.lineOne}>
                  <h2 className={styles.campEventsStatsPartOne}>
                    <span className={styles.greaterRainbowText}>17 </span> <span className={styles.whiteText}>Tracks</span>
                  </h2>
                  <h2 className={styles.campEventsStatsPartOne}>
                    <span className={styles.greaterRainbowText}>100+ </span> <span className={styles.whiteText}>Speakers</span>
                  </h2>
                </div>
                <div className={styles.lineTwo}>
                  <h2 className={styles.campEventsStatsPartOne}>
                    <span className={styles.greaterRainbowText}>540 </span> <span className={styles.whiteText}>Participants</span>
                  </h2>
                </div>
              </div>
              <div className={styles.statsColumnRight}>
                <h4 className={styles.campEventsStatsPartTwo}>
                  <span className={styles.lesserRainbowText}>34 </span> <span className={styles.whiteText}>IPFS Scholars</span>
                </h4>
                <h4 className={styles.campEventsStatsPartTwo}>
                  <span className={styles.lesserRainbowText}>30 </span> <span className={styles.whiteText}>Countries</span>
                </h4>
                <h4 className={styles.campEventsStatsPartTwo}>
                  <span className={styles.lesserRainbowText}>20 </span> <span className={styles.whiteText}>Volunteers</span>
                </h4>
              </div>
            </section>
          </div>
          <section className={styles.faqSection} id="faq">
            <h1 className={styles.sectionTitle} style={{ paddingBottom: '2rem' }}>
              FAQs
            </h1>
            <div className={styles.faqColumns}>
              <div className={styles.faqLeft}>
                {faqsLeft.map((faq, index) => (
                  <div className={styles.faqBorderWrapper} key={index} onClick={() => toggleFaq('left', index)}>
                    <div className={`${styles.faqContent} ${expandedFaqLeft === index ? styles.open : ''}`}>
                      <h4>{faq.question}</h4>
                      <div className={styles.plusSymbol}>{expandedFaqLeft === index ? '-' : '+'}</div>
                    </div>
                    {expandedFaqLeft === index && (
                      <div className={styles.faqAnswer}>
                        <MarkdownToJSX>{faq.answer}</MarkdownToJSX>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.faqRight}>
                {faqsRight.map((faq, index) => (
                  <div className={styles.faqBorderWrapper} key={index} onClick={() => toggleFaq('right', index)}>
                    <div className={`${styles.faqContent} ${expandedFaqRight === index ? styles.open : ''}`}>
                      <h4>{faq.question}</h4>
                      <div className={styles.plusSymbol}>{expandedFaqRight === index ? '-' : '+'}</div>
                    </div>
                    {expandedFaqRight === index && (
                      <div className={styles.faqAnswer}>
                        <MarkdownToJSX>{faq.answer}</MarkdownToJSX>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* <div className={styles.bottomSquiggleContainer}>
              <svg className={styles.bottomSquiggleStyle} width="498" height="305" viewBox="0 0 498 305" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36.4165 187.05C36.4165 187.05 15.1919 277.772 66.9163 271.843C118.641 265.914 209.641 19.5789 275.813 33.115C308.7 39.842 301.378 77.8058 293.984 113.795C286.466 150.395 304.275 196.955 338.187 195.263C405.607 191.898 419.559 52.4113 505.5 41.8714"
                  stroke="url(#paint0_linear_924_2294)"
                  stroke-width="63.9167"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="paint0_linear_924_2294" x1="480.044" y1="48.2646" x2="-7.94242" y2="226.323" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#08ADE3" />
                    <stop offset="0.5" stop-color="#CDAB37" />
                    <stop offset="1" stop-color="#E01C33" />
                  </linearGradient>
                </defs>
              </svg>
            </div> */}
          </section>
          <section>
            <BlockBuilder {...sponsorBlock} />
          </section>
          <section></section>
        </div>
      </GutterContainer>

      <IPFSCampFooter />
    </div>
  );
}
