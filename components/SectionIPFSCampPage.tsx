'use client';

import styles from '@components/SectionIPFSCampPage.module.scss';

import { Ratio } from '@root/common/types';
import { VideoPlayer } from './VideoPlayer';
import Link from './Link';
import React, { useState } from 'react';
import GutterContainer from '@root/components/GutterContainer';

/* TODOS:
 * Fix mobile view for squiggles
 * Work on the dropdown functionality
 * Refactor this code into something more componentized
 */

export default function SectionCamppage({ upcomingEvents }) {
  const [expandedFaqLeft, setExpandedFaqLeft] = useState(null);
  const [expandedFaqRight, setExpandedFaqRight] = useState(null);

  const toggleFaq = (side, index) => {
    if (side === "left") {
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
 
  const faqsLeft = [
    { question: "What is IPFS Camp and who is it for?", answer: "IPFS Camp is more than just a 'conference'; it's a global movement of builders and visionaries committed to creating a better web. Over the course of three days, we will host hundreds of talks, workshops, and hacking sessions, all focused on the latest advancements in decentralized technologies and the future of the internet. IPFS Camp provides the ideal platform to exchange ideas, collaborate, and co-create solutions for the real-world challenges that the web is currently facing."},
    { question: "What does the ticket include?", answer: "All tickets include entry to the full 3-day event with coffee, morning pastries, lunch, and dinner at the IPFS Camp venue."}
  ];
  
  const faqsRight = [
    { question: "How can I participate?", answer: "You can: Submit a track or talk, Sponsor, Apply as an IPFS Scholar, Become a key organizer, Volunteer, Apply for Expo Space"},
    { question: "How can I reach out to the organizers", answer: "Please reach out to miwa@protocol.ai with any questions or suggestions"}
  ];
  
  return (
    <div className={styles.pageContainer}>
      <GutterContainer>
        <div style={{ display: 'grid', rowGap: '8rem' }}>
          <section>
            <img src="/media/ipfs-camp-2024.png" alt="IPFS Camp 2024" className={styles.imageClass} style={{ paddingBottom: '2rem' }} />
            <header className={styles.header} style={{ paddingBottom: '4rem' }}>
              <div className={styles.headerText}>
                <h3 className={styles.h3}>IPFS is more than just a ‘conference’; it’s a global movement of builders and visionaries committed to creating a better web. </h3>
                <p>
                  Over the course of three days, we will host hundreds of talks, workshops, and hacking sessions, all focused on the latest advancements in decentralized
                  technologies and the future of the internet. IPFS Camp provides the ideal platform to exchange ideas, collaborate, and co-create solutions for the real-world
                  challenges that the web is currently facing.
                </p>
                <div className={styles.rainbowBorderWrapper}>
                  <div className={styles.innerContent}>
                    <div className={styles.diptychHalf}>
                      <div className={styles.centerTextContainer}>
                        <span className={styles.boldText}>CAMP 2024</span>
                        <span className={styles.newlineText}>Tokyo, Japan</span>
                      </div>
                    </div>
                    <div className={styles.diptychHalf}>
                      <div className={styles.centerTextContainer}>
                        <span className={styles.boldText}>October 10 - 20,</span>
                        <span className={styles.newlineBoldText}>2024</span>
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
              <VideoPlayer src={'/media/ipfs-camp-2022.mp4'} autoPlay muted ariaLabel="video" ratio={Ratio.SIXTEEN_BY_NINE} />
            </div>
            <div className={styles.videoSquiggleContainer}>
              <svg className={styles.videoSquiggleStyle} xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 564 457" fill="none">
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
          </section>
          <section>
            <h2 className={styles.centeredSectionTitle}>Get Involved</h2>
            <div className={styles.getInvolvedColumns}>
              <div className={styles.involvementColumn}>
                <div className={styles.rainbowBorderWrapper}>
                  <Link href={'https://airtable.com/appM094R1Ma5HG757/shrXTUagRUI1aC4G1'} target="_blank">
                    <div className={styles.involvementContent}>
                      <h4 className={styles.involvementText}>Become a Sponsor</h4>
                    </div>
                  </Link>
                </div>
                <div className={styles.rainbowBorderWrapper}>
                  <Link href={'https://airtable.com/appM094R1Ma5HG757/shrXTUagRUI1aC4G1'} target="_blank">
                    <div className={styles.involvementContent}>
                      <h4 className={styles.involvementText}>Submit a track or talk</h4>
                    </div>
                  </Link>
                </div>
              </div>
              <div className={styles.involvementColumn}>
                <div className={styles.rainbowBorderWrapper}>
                  <Link href={'https://airtable.com/appM094R1Ma5HG757/shrXTUagRUI1aC4G1'} target="_blank">
                    <div className={styles.involvementContent}>
                      <h4 className={styles.involvementText}>Apply as an IPFS Scholar</h4>
                    </div>
                  </Link>
                </div>
                <div className={styles.rainbowBorderWrapper}>
                  <Link href={'https://airtable.com/appM094R1Ma5HG757/shrk7f2pNpNHkFGld'} target="_blank">
                    <div className={styles.involvementContent}>
                      <h4 className={styles.involvementText}>Apply for Expo Space</h4>
                    </div>
                  </Link>
                </div>
              </div>
              <div className={styles.involvementColumn}>
                <div className={styles.rainbowBorderWrapper}>
                  <Link href={'mailto:miwa@protocol.ai'} target="_blank">
                    <div className={styles.involvementContent}>
                      <h4 className={styles.involvementText}>Become a Key Organizer</h4>
                    </div>
                  </Link>
                </div>
                <div className={styles.rainbowBorderWrapper}>
                  <Link href={'mailto:miwa@protocol.ai'} target="_blank">
                    <div className={styles.involvementContent}>
                      <h4 className={styles.involvementText}>Volunteer</h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div className={styles.headerWrapper}>
            <h1 className={styles.sectionTitle}>Past Camp Events</h1>
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
                  <span className={styles.greaterRainbowText}>5400 </span> <span className={styles.whiteText}>Participants</span>
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
          <section className={styles.faqSection}>
          <h1 className={styles.sectionTitle} style={{ paddingBottom: '2rem' }}>FAQs</h1>
            <div className={styles.faqColumns}>
                <div className={styles.faqLeft}>
                  {faqsLeft.map((faq, index) => (
                    <div className={styles.faqBorderWrapper} key={index} onClick={() => toggleFaq('left', index)}>
                      <div className={`${styles.faqContent} ${expandedFaqLeft === index ? styles.open : ''}`}>
                        <h4>{faq.question}</h4>
                        <div className={styles.plusSymbol}>{expandedFaqLeft === index ? "-" : "+"}</div>
                      </div>
                      {expandedFaqLeft === index && <div className={styles.faqAnswer}>{faq.answer}</div>}
                    </div>
                  ))}
                </div>
                <div className={styles.faqRight}>
                  {faqsRight.map((faq, index) => (
                    <div className={styles.faqBorderWrapper} key={index} onClick={() => toggleFaq('right', index)}>
                      <div className={`${styles.faqContent} ${expandedFaqRight === index ? styles.open : ''}`}>
                        <h4>{faq.question}</h4>
                        <div className={styles.plusSymbol}>{expandedFaqRight === index ? "-" : "+"}</div>
                      </div>
                      {expandedFaqRight === index && <div className={styles.faqAnswer}>{faq.answer}</div>}
                    </div>
                  ))}
                </div>
              </div>
            <div className={styles.bottomSquiggleContainer}>
              <svg className={styles.bottomSquiggleStyle} width="498" height="305" viewBox="0 0 498 305" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36.4165 187.05C36.4165 187.05 15.1919 277.772 66.9163 271.843C118.641 265.914 209.641 19.5789 275.813 33.115C308.7 39.842 301.378 77.8058 293.984 113.795C286.466 150.395 304.275 196.955 338.187 195.263C405.607 191.898 419.559 52.4113 505.5 41.8714"
                  stroke="url(#paint0_linear_924_2294)"
                  stroke-width="63.9167"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient id="paint0_linear_924_2294" x1="480.044" y1="48.2646" x2="-7.94242" y2="226.323" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#08ADE3" />
                    <stop offset="0.5" stop-color="#CDAB37" />
                    <stop offset="1" stop-color="#E01C33" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </section>
        </div>
      </GutterContainer>
      <section className={styles.campYearbookSection}>
        <div className={styles.yearbookTitle}>Camp Yearbook</div>
        <div className={styles.buttonsContainer}>
          <Link href={'https://2022.ipfs.camp/'} target="_blank">
            <button className={styles.yearButton}>Camp 2022</button>
          </Link>
          <Link href={'https://2019.ipfs.camp/'} target="_blank">
            <button className={styles.yearButton}>Camp 2019</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
