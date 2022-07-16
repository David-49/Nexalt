import { FC } from 'react';

import { createStyles, Text, } from '@mantine/core';
import Image from "next/image";
import Link from "next/link";
import {colors} from "../../theme";

interface IProps {}

const useStyles = createStyles(() => ({
  title: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: 40,
    marginBottom: 50,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 1052,
  },
  missionDescription: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 20,
    marginBottom: 50,
    textAlign: 'center',
    width: '100%',
  },
  teams: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  column1: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: 40,
    gridAutoRows: 'minmax(100px, auto)',
    marginBottom: 40,
  },
  column2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 40,
    gridAutoRows: 'minmax(100px, auto)',
    '@media (max-width: 1580px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  teamCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.secondaryBackgroundColor,
    borderRadius: 50,
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
    paddingTop: 25,
    paddingRight: 20,
    paddingBottom: 25,
    paddingLeft: 20,
    width: 480,
    transform: 'scale(1)',
    transition: 'transform .3s',
    ':hover': {
      transform: 'scale(1.02)',
      transition: 'transform .3s',
    },
  },
  teamPicture: {
    width: 444,
    height: 375,
    borderRadius: 30,
    backgroundColor: colors.primaryBackgroundColor,
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
  },
  teamName: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 800,
    fontSize: 30,
    textAlign: 'center',
    color: colors.blackText,
  },
  teamJob: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: 20,
    opacity: '50%',
    textAlign: 'center',
    marginTop: 15,
    color: colors.blackText,
  },
  socialNetworks: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '45%',
    marginTop: 40,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    padding: 0,
  },
  network: {
    listStyle: 'none',
  },
  networkLink: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.secondaryBackgroundColor,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    transition: 'background-color .2s',
    ':hover': {
      backgroundColor: colors.primaryBlue,
      transition: 'background-color .2s',
      svg: {
        fill: colors.secondaryBackgroundColor,
        transition: 'fill .2s',
      }
    }
  },
  svgNetwork: {
    width: 15,
    fill: colors.blackText,
    transition: 'fill .2s',
  },


}));

export const OurTeam: FC<IProps> = () => {
  const { classes } = useStyles();
  return (
      <div className={classes.container}>
          <Text className={classes.title}>
            Notre équipe de choc
          </Text>
        <div className={classes.teams}>
          <div className={classes. column1}>
            <div className={classes.teamCard}>
              <div className={classes.teamPicture}>
                <Image src='/assets/images/photo_lilian.png'
                       width={3555}
                       height={3842}
                       priority
                />
              </div>
              <div className={classes.content}>
                <span className={classes.teamName}>Lilian BEILLARD</span>
                <span className={classes.teamJob}>Backelor Webdesigner</span>
              </div>
              <ul className={classes.socialNetworks}>
                <li className={classes.network}>
                  <Link href="https://www.linkedin.com/in/lilian-beillard/">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork}  version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-linkedin-in" d="M6.7,30H0.5V10h6.2V30z M3.6,7.3C1.6,7.3,0,5.7,0,3.7S1.6,0.1,3.6,0c2,0,3.6,1.6,3.6,3.6
                        C7.2,5.6,5.6,7.3,3.6,7.3z M30,30h-6.2v-9.7c0-2.3,0-5.3-3.2-5.3c-3.2,0-3.7,2.5-3.7,5.1V30h-6.2V10h6v2.7h0.1
                        c1.2-2.1,3.5-3.3,5.9-3.2c6.3,0,7.4,4.1,7.4,9.5V30z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li className={classes.network}>
                  <Link href="https://www.instagram.com/lilian.bld/">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork}  version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-instagram" d="M15,7.3c-4.2,0-7.7,3.4-7.7,7.7c0,4.2,3.4,7.7,7.7,7.7s7.7-3.4,7.7-7.7c0,0,0,0,0,0
                        C22.7,10.8,19.3,7.3,15,7.3C15,7.3,15,7.3,15,7.3z M15,20c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S17.8,20,15,20z M24.8,7
                        c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8C24,5.2,24.8,6,24.8,7C24.8,7,24.8,7,24.8,7L24.8,7z M29.9,8.8
                        c0-2.3-0.8-4.6-2.4-6.3c-1.7-1.6-4-2.5-6.3-2.4C18.7,0,11.3,0,8.8,0.1c-2.3,0-4.6,0.8-6.3,2.4c-1.6,1.7-2.5,4-2.4,6.3
                        C0,11.3,0,18.7,0.1,21.2c0,2.3,0.8,4.6,2.4,6.3c1.7,1.6,4,2.5,6.3,2.4c2.5,0.1,9.9,0.1,12.4,0c2.3,0,4.6-0.8,6.3-2.4
                        c1.6-1.7,2.5-4,2.4-6.3C30,18.7,30,11.3,29.9,8.8L29.9,8.8z M26.7,23.8c-0.5,1.3-1.5,2.3-2.9,2.9c-2.9,0.6-5.9,0.8-8.8,0.6
                        c-3,0.2-5.9,0-8.8-0.6c-1.3-0.5-2.3-1.5-2.9-2.9C2.7,20.9,2.5,18,2.7,15c-0.2-3,0-5.9,0.6-8.8c0.5-1.3,1.5-2.3,2.8-2.8
                        C9.1,2.7,12,2.5,15,2.7c3-0.2,5.9,0,8.8,0.6c1.3,0.5,2.3,1.5,2.8,2.8c0.6,2.9,0.8,5.9,0.6,8.8C27.5,18,27.3,20.9,26.7,23.8
                        L26.7,23.8z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li className={classes.network}>
                  <Link href="https://www.facebook.com/lilian.beillard/">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-facebook-f" d="M22,16.9l0.8-5.4h-5.2V7.9c-0.1-1.5,1-2.8,2.5-2.9c0.2,0,0.4,0,0.6,0H23V0.4
                        C21.6,0.2,20.2,0,18.8,0c-3.6-0.3-6.8,2.5-7.1,6.1c0,0.4,0,0.8,0,1.2v4.1H7v5.4h4.8V30h5.9V16.9H22z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={classes.teamCard}>
              <div className={classes.teamPicture}>
                <Image src='/assets/images/photo_bastien.png'
                       width={3555}
                       height={3842}
                       priority
                />
              </div>
              <div className={classes.content}>
                <span className={classes.teamName}>Bastien ROBERT</span>
                <span className={classes.teamJob}>Backelor Webdesigner</span>
              </div>
              <ul className={classes.socialNetworks}>
                <li className={classes.network}>
                  <Link href="https://www.linkedin.com/in/bastien-r/">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork}  version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-linkedin-in" d="M6.7,30H0.5V10h6.2V30z M3.6,7.3C1.6,7.3,0,5.7,0,3.7S1.6,0.1,3.6,0c2,0,3.6,1.6,3.6,3.6
                        C7.2,5.6,5.6,7.3,3.6,7.3z M30,30h-6.2v-9.7c0-2.3,0-5.3-3.2-5.3c-3.2,0-3.7,2.5-3.7,5.1V30h-6.2V10h6v2.7h0.1
                        c1.2-2.1,3.5-3.3,5.9-3.2c6.3,0,7.4,4.1,7.4,9.5V30z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li className={classes.network}>
                  <Link href="https://www.instagram.com/nastiib/">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork}  version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-instagram" d="M15,7.3c-4.2,0-7.7,3.4-7.7,7.7c0,4.2,3.4,7.7,7.7,7.7s7.7-3.4,7.7-7.7c0,0,0,0,0,0
                        C22.7,10.8,19.3,7.3,15,7.3C15,7.3,15,7.3,15,7.3z M15,20c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S17.8,20,15,20z M24.8,7
                        c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8C24,5.2,24.8,6,24.8,7C24.8,7,24.8,7,24.8,7L24.8,7z M29.9,8.8
                        c0-2.3-0.8-4.6-2.4-6.3c-1.7-1.6-4-2.5-6.3-2.4C18.7,0,11.3,0,8.8,0.1c-2.3,0-4.6,0.8-6.3,2.4c-1.6,1.7-2.5,4-2.4,6.3
                        C0,11.3,0,18.7,0.1,21.2c0,2.3,0.8,4.6,2.4,6.3c1.7,1.6,4,2.5,6.3,2.4c2.5,0.1,9.9,0.1,12.4,0c2.3,0,4.6-0.8,6.3-2.4
                        c1.6-1.7,2.5-4,2.4-6.3C30,18.7,30,11.3,29.9,8.8L29.9,8.8z M26.7,23.8c-0.5,1.3-1.5,2.3-2.9,2.9c-2.9,0.6-5.9,0.8-8.8,0.6
                        c-3,0.2-5.9,0-8.8-0.6c-1.3-0.5-2.3-1.5-2.9-2.9C2.7,20.9,2.5,18,2.7,15c-0.2-3,0-5.9,0.6-8.8c0.5-1.3,1.5-2.3,2.8-2.8
                        C9.1,2.7,12,2.5,15,2.7c3-0.2,5.9,0,8.8,0.6c1.3,0.5,2.3,1.5,2.8,2.8c0.6,2.9,0.8,5.9,0.6,8.8C27.5,18,27.3,20.9,26.7,23.8
                        L26.7,23.8z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li className={classes.network}>
                  <Link href="https://www.facebook.com/Bastien.Rbrt">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-facebook-f" d="M22,16.9l0.8-5.4h-5.2V7.9c-0.1-1.5,1-2.8,2.5-2.9c0.2,0,0.4,0,0.6,0H23V0.4
                        C21.6,0.2,20.2,0,18.8,0c-3.6-0.3-6.8,2.5-7.1,6.1c0,0.4,0,0.8,0,1.2v4.1H7v5.4h4.8V30h5.9V16.9H22z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes. column2}>
            <div className={classes.teamCard}>
              <div className={classes.teamPicture}>
                <Image src='/assets/images/photo_naomi.png'
                       width={3555}
                       height={3842}
                       priority
                />
              </div>
              <div className={classes.content}>
                <span className={classes.teamName}>Naomi GRÉGOIRE</span>
                <span className={classes.teamJob}>Bachelor WebMarketing</span>
              </div>
              <ul className={classes.socialNetworks}>
                <li className={classes.network}>
                  <Link href="https://www.linkedin.com/in/naomi-gregoire/">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork}  version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-linkedin-in" d="M6.7,30H0.5V10h6.2V30z M3.6,7.3C1.6,7.3,0,5.7,0,3.7S1.6,0.1,3.6,0c2,0,3.6,1.6,3.6,3.6
                        C7.2,5.6,5.6,7.3,3.6,7.3z M30,30h-6.2v-9.7c0-2.3,0-5.3-3.2-5.3c-3.2,0-3.7,2.5-3.7,5.1V30h-6.2V10h6v2.7h0.1
                        c1.2-2.1,3.5-3.3,5.9-3.2c6.3,0,7.4,4.1,7.4,9.5V30z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li className={classes.network}>
                  <Link href="https://www.instagram.com/naomig.pro/">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork}  version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-instagram" d="M15,7.3c-4.2,0-7.7,3.4-7.7,7.7c0,4.2,3.4,7.7,7.7,7.7s7.7-3.4,7.7-7.7c0,0,0,0,0,0
                        C22.7,10.8,19.3,7.3,15,7.3C15,7.3,15,7.3,15,7.3z M15,20c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S17.8,20,15,20z M24.8,7
                        c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8C24,5.2,24.8,6,24.8,7C24.8,7,24.8,7,24.8,7L24.8,7z M29.9,8.8
                        c0-2.3-0.8-4.6-2.4-6.3c-1.7-1.6-4-2.5-6.3-2.4C18.7,0,11.3,0,8.8,0.1c-2.3,0-4.6,0.8-6.3,2.4c-1.6,1.7-2.5,4-2.4,6.3
                        C0,11.3,0,18.7,0.1,21.2c0,2.3,0.8,4.6,2.4,6.3c1.7,1.6,4,2.5,6.3,2.4c2.5,0.1,9.9,0.1,12.4,0c2.3,0,4.6-0.8,6.3-2.4
                        c1.6-1.7,2.5-4,2.4-6.3C30,18.7,30,11.3,29.9,8.8L29.9,8.8z M26.7,23.8c-0.5,1.3-1.5,2.3-2.9,2.9c-2.9,0.6-5.9,0.8-8.8,0.6
                        c-3,0.2-5.9,0-8.8-0.6c-1.3-0.5-2.3-1.5-2.9-2.9C2.7,20.9,2.5,18,2.7,15c-0.2-3,0-5.9,0.6-8.8c0.5-1.3,1.5-2.3,2.8-2.8
                        C9.1,2.7,12,2.5,15,2.7c3-0.2,5.9,0,8.8,0.6c1.3,0.5,2.3,1.5,2.8,2.8c0.6,2.9,0.8,5.9,0.6,8.8C27.5,18,27.3,20.9,26.7,23.8
                        L26.7,23.8z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li className={classes.network}>
                  <Link href="https://www.facebook.com/naomi.gregoire.5">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-facebook-f" d="M22,16.9l0.8-5.4h-5.2V7.9c-0.1-1.5,1-2.8,2.5-2.9c0.2,0,0.4,0,0.6,0H23V0.4
                        C21.6,0.2,20.2,0,18.8,0c-3.6-0.3-6.8,2.5-7.1,6.1c0,0.4,0,0.8,0,1.2v4.1H7v5.4h4.8V30h5.9V16.9H22z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={classes.teamCard}>
              <div className={classes.teamPicture}>
                <Image src='/assets/images/photo_sandy.png'
                       width={3800}
                       height={3842}
                       priority
                />
              </div>
              <div className={classes.content}>
                <span className={classes.teamName}>Sandy MARTIN</span>
                <span className={classes.teamJob}>Backelor E-Business</span>
              </div>
              <ul className={classes.socialNetworks}>
                <li className={classes.network}>
                  <Link href="https://www.linkedin.com/in/sandymartin-communicationdigitale/">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork}  version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-linkedin-in" d="M6.7,30H0.5V10h6.2V30z M3.6,7.3C1.6,7.3,0,5.7,0,3.7S1.6,0.1,3.6,0c2,0,3.6,1.6,3.6,3.6
                        C7.2,5.6,5.6,7.3,3.6,7.3z M30,30h-6.2v-9.7c0-2.3,0-5.3-3.2-5.3c-3.2,0-3.7,2.5-3.7,5.1V30h-6.2V10h6v2.7h0.1
                        c1.2-2.1,3.5-3.3,5.9-3.2c6.3,0,7.4,4.1,7.4,9.5V30z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li className={classes.network}>
                  <Link href="https://www.instagram.com/daviddognin/">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork}  version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-instagram" d="M15,7.3c-4.2,0-7.7,3.4-7.7,7.7c0,4.2,3.4,7.7,7.7,7.7s7.7-3.4,7.7-7.7c0,0,0,0,0,0
                        C22.7,10.8,19.3,7.3,15,7.3C15,7.3,15,7.3,15,7.3z M15,20c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S17.8,20,15,20z M24.8,7
                        c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8C24,5.2,24.8,6,24.8,7C24.8,7,24.8,7,24.8,7L24.8,7z M29.9,8.8
                        c0-2.3-0.8-4.6-2.4-6.3c-1.7-1.6-4-2.5-6.3-2.4C18.7,0,11.3,0,8.8,0.1c-2.3,0-4.6,0.8-6.3,2.4c-1.6,1.7-2.5,4-2.4,6.3
                        C0,11.3,0,18.7,0.1,21.2c0,2.3,0.8,4.6,2.4,6.3c1.7,1.6,4,2.5,6.3,2.4c2.5,0.1,9.9,0.1,12.4,0c2.3,0,4.6-0.8,6.3-2.4
                        c1.6-1.7,2.5-4,2.4-6.3C30,18.7,30,11.3,29.9,8.8L29.9,8.8z M26.7,23.8c-0.5,1.3-1.5,2.3-2.9,2.9c-2.9,0.6-5.9,0.8-8.8,0.6
                        c-3,0.2-5.9,0-8.8-0.6c-1.3-0.5-2.3-1.5-2.9-2.9C2.7,20.9,2.5,18,2.7,15c-0.2-3,0-5.9,0.6-8.8c0.5-1.3,1.5-2.3,2.8-2.8
                        C9.1,2.7,12,2.5,15,2.7c3-0.2,5.9,0,8.8,0.6c1.3,0.5,2.3,1.5,2.8,2.8c0.6,2.9,0.8,5.9,0.6,8.8C27.5,18,27.3,20.9,26.7,23.8
                        L26.7,23.8z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li className={classes.network}>
                  <Link href="https://www.facebook.com/SandyMartin28">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-facebook-f" d="M22,16.9l0.8-5.4h-5.2V7.9c-0.1-1.5,1-2.8,2.5-2.9c0.2,0,0.4,0,0.6,0H23V0.4
                        C21.6,0.2,20.2,0,18.8,0c-3.6-0.3-6.8,2.5-7.1,6.1c0,0.4,0,0.8,0,1.2v4.1H7v5.4h4.8V30h5.9V16.9H22z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={classes.teamCard}>
              <div className={classes.teamPicture}>
                <Image src='/assets/images/photo_david.png'
                       width={3555}
                       height={3842}
                       priority
                />
              </div>
              <div className={classes.content}>
                <span className={classes.teamName}>David DOGNIN</span>
                <span className={classes.teamJob}>Bachelor WebDéveloppement</span>
              </div>
              <ul className={classes.socialNetworks}>
                <li className={classes.network}>
                  <Link href="https://www.linkedin.com/in/daviddognin/">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork}  version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-linkedin-in" d="M6.7,30H0.5V10h6.2V30z M3.6,7.3C1.6,7.3,0,5.7,0,3.7S1.6,0.1,3.6,0c2,0,3.6,1.6,3.6,3.6
                        C7.2,5.6,5.6,7.3,3.6,7.3z M30,30h-6.2v-9.7c0-2.3,0-5.3-3.2-5.3c-3.2,0-3.7,2.5-3.7,5.1V30h-6.2V10h6v2.7h0.1
                        c1.2-2.1,3.5-3.3,5.9-3.2c6.3,0,7.4,4.1,7.4,9.5V30z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li className={classes.network}>
                  <Link href="https://www.facebook.com/david.dognin">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork}  version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-instagram" d="M15,7.3c-4.2,0-7.7,3.4-7.7,7.7c0,4.2,3.4,7.7,7.7,7.7s7.7-3.4,7.7-7.7c0,0,0,0,0,0
                        C22.7,10.8,19.3,7.3,15,7.3C15,7.3,15,7.3,15,7.3z M15,20c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S17.8,20,15,20z M24.8,7
                        c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8C24,5.2,24.8,6,24.8,7C24.8,7,24.8,7,24.8,7L24.8,7z M29.9,8.8
                        c0-2.3-0.8-4.6-2.4-6.3c-1.7-1.6-4-2.5-6.3-2.4C18.7,0,11.3,0,8.8,0.1c-2.3,0-4.6,0.8-6.3,2.4c-1.6,1.7-2.5,4-2.4,6.3
                        C0,11.3,0,18.7,0.1,21.2c0,2.3,0.8,4.6,2.4,6.3c1.7,1.6,4,2.5,6.3,2.4c2.5,0.1,9.9,0.1,12.4,0c2.3,0,4.6-0.8,6.3-2.4
                        c1.6-1.7,2.5-4,2.4-6.3C30,18.7,30,11.3,29.9,8.8L29.9,8.8z M26.7,23.8c-0.5,1.3-1.5,2.3-2.9,2.9c-2.9,0.6-5.9,0.8-8.8,0.6
                        c-3,0.2-5.9,0-8.8-0.6c-1.3-0.5-2.3-1.5-2.9-2.9C2.7,20.9,2.5,18,2.7,15c-0.2-3,0-5.9,0.6-8.8c0.5-1.3,1.5-2.3,2.8-2.8
                        C9.1,2.7,12,2.5,15,2.7c3-0.2,5.9,0,8.8,0.6c1.3,0.5,2.3,1.5,2.8,2.8c0.6,2.9,0.8,5.9,0.6,8.8C27.5,18,27.3,20.9,26.7,23.8
                        L26.7,23.8z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li className={classes.network}>
                  <Link href="">
                    <a className={classes.networkLink}>
                      <svg className={classes.svgNetwork} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 30 30" xmlSpace="preserve">
                        <path id="Icon_awesome-facebook-f" d="M22,16.9l0.8-5.4h-5.2V7.9c-0.1-1.5,1-2.8,2.5-2.9c0.2,0,0.4,0,0.6,0H23V0.4
                        C21.6,0.2,20.2,0,18.8,0c-3.6-0.3-6.8,2.5-7.1,6.1c0,0.4,0,0.8,0,1.2v4.1H7v5.4h4.8V30h5.9V16.9H22z"/>
                      </svg>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


  );
};
