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

  const faqsLeft = [
    {
      question: 'What is IPFS Camp and who is it for?',
      answer:
        "IPFS Camp is more than just a 'conference'; it's a global movement of builders and visionaries committed to creating a better web. Over the course of three days, we will host hundreds of talks, workshops, and hacking sessions, all focused on the latest advancements in decentralized technologies and the future of the internet. IPFS Camp provides the ideal platform to exchange ideas, collaborate, and co-create solutions for the real-world challenges that the web is currently facing.",
    },
    {
      question: 'What does the ticket include?',
      answer: 'All tickets include entry to the full 3-day event with coffee, morning pastries, lunch, and dinner at the IPFS Camp venue.',
    },
  ];

  const faqsRight = [
    { question: 'How can I participate?', answer: 'You can: Submit a track or talk, Sponsor, Apply as an IPFS Scholar, Become a key organizer, Volunteer, Apply for Expo Space' },
    { question: 'How can I reach out to the organizers', answer: 'Please reach out to miwa@protocol.ai with any questions or suggestions' },
  ];

  return (
    <div className={styles.pageContainer} style={{ overflow: 'hidden' }}>
    <svg className={styles.squaresClass} width="1920" height="2258" viewBox="0 0 1920 2258" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="46.9922" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="582.167" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="145.542" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="727.708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="72.7708" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="654.937" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="218.312" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="800.479" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="291.083" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="873.25" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="436.625" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="1018.79" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="363.854" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="946.021" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="509.396" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="1091.56" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="1164.33" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="1746.5" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="1309.87" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="1892.04" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="1237.1" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="1819.27" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="1382.65" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="1964.81" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="1455.42" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="2037.58" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="1600.96" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="2183.12" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="1528.19" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="2110.35" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="1673.73" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="46.9922" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="119.991" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="192.989" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="265.987" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="338.986" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="411.984" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="484.982" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="557.981" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="630.979" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="703.978" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="776.976" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="849.975" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1433.96" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="922.973" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1506.96" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="995.971" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1579.96" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1068.97" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1652.96" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1141.97" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1725.96" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1214.97" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1798.95" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1287.96" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1871.95" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    <rect x="1360.96" y="2255.9" width="2.04988" height="2.04988" fill="white" fill-opacity="0.5"/>
    </svg>
      <GutterContainer>
        <div style={{ display: 'grid', rowGap: '8rem' }}>
          <section>
            <img src="/media/ipfs-camp-2024.png" alt="IPFS Camp 2024" className={styles.imageClass}/>
            <header className={styles.header} style={{ paddingBottom: '4rem' }}>
              <div className={styles.headerText}>
                <h2 className={styles.h2}>IPFS is more than just a ‘conference’; it’s a global movement of builders and visionaries committed to creating a better web. </h2>
                <p className={styles.p}>
                  Over the course of three days, we will host hundreds of talks, workshops, and hacking sessions, all focused on the latest advancements in decentralized
                  technologies and the future of the internet. IPFS Camp provides the ideal platform to exchange ideas, collaborate, and co-create solutions for the real-world
                  challenges that the web is currently facing.
                </p>
                <div className={styles.rainbowBorderWrapper}>
                  <div className={styles.innerContent}>
                    <div className={styles.diptychHalf}>
                      <div className={styles.rainbowButton}>
                        <span className={styles.boldText}>PRE-REGISTER</span>
                      </div>
                    </div>
                    <div className={styles.diptychHalf}>
                      <div className={styles.centerTextContainer}>
                        <span className={styles.boldText}>SPRING 2024</span>
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
              <VideoPlayer src={'/media/ipfs-camp-2022.mp4'} autoPlay muted ariaLabel="video" ratio={Ratio.ORIGINAL} />
            </div>
            <div className={styles.videoSquiggleContainer}>
              <svg className={styles.videoSquiggleStyle} width="560" height="390" viewBox="0 0 560 390" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M85.7689 32.7635C85.7689 32.7635 -0.535029 83.9408 46.8507 130.949C94.2358 177.956 356.248 72.3749 400.875 149.369C423.055 187.636 388.233 210.611 354.847 231.94C320.897 253.631 300.406 308.606 329.812 341.178C388.272 405.932 448.657 251.756 527.911 329.311"
                  stroke="url(#paint0_linear_924_1095)"
                  stroke-width="63.9167"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient id="paint0_linear_924_1095" x1="566.574" y1="358.265" x2="-20.8976" y2="107.673" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#08ADE3" />
                    <stop offset="0.5" stop-color="#CDAB37" />
                    <stop offset="1" stop-color="#E01C33" />
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
                  <Link href={'https://airtable.com/appM094R1Ma5HG757/shrWn6XaRgUkYWPm3'} target="_blank">
                    <div className={styles.involvementContent}>
                      <h4 className={styles.involvementText}>Submit a track or talk</h4>
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
          <div style={{ display: 'grid', rowGap: '2rem' }}>
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
          <section className={styles.faqSection}>
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
                    {expandedFaqLeft === index && <div className={styles.faqAnswer}>{faq.answer}</div>}
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
