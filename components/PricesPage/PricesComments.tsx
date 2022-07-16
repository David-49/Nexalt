import { FC } from 'react';

import { createStyles, Text } from '@mantine/core';
import Image from 'next/image';
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
  },
  subtitleDescription: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 20,
    marginBottom: 50,
    textAlign: 'center',
    width: '70%',
  },
  comments: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: 30,
    gridAutoRows: 'minmax(100px, auto)',
    '@media (max-width: 1350px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    }

  },
  comment: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: colors.secondaryBackgroundColor,
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
    paddingTop: 55,
    paddingRight: 35,
    paddingBottom: 55,
    paddingLeft: 35,
    width: 608,
    marginTop: 0,
  },
  starsRank: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  starSvg: {
    fill: '#D4B622',
    width: 30,
    marginLeft: 15,
    ':nth-of-type(1)': {
      marginLeft: 0,
    }
  },
  commentDescription: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    textAlign: 'left',
  },
  profileContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 100,
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
  },
  name: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    textAlign: 'left',
  },
  job: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    textAlign: 'left',
  },
  quote: {
    fill: colors.primaryBlue,
    width: 55,
  },
}));

export const PricesComments: FC<IProps> = () => {
  const { classes } = useStyles();
  return (
      <div className={classes.container}>
        <Text className={classes.title}>
          Ce que disent les entreprises
        </Text>
        <p className={classes.subtitleDescription}>Retrouvez les avis des entreprises qui nous ont fait confiance !</p>
        <div className={classes.comments}>
          <div className={classes.comment}>
            <div className={classes.starsRank}>
              <svg className={classes.starSvg} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 30 30" xmlSpace="preserve">
              <path id="Icon_material-star" d="M15,23.7l9.3,5.6l-2.5-10.5l8.2-7.1l-10.8-0.9L15,0.8l-4.2,9.9L0,11.6l8.2,7.1L5.7,29.2L15,23.7z"
              />
              </svg>
              <svg className={classes.starSvg} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 30 30" xmlSpace="preserve">
                <path id="Icon_material-star" d="M15,23.7l9.3,5.6l-2.5-10.5l8.2-7.1l-10.8-0.9L15,0.8l-4.2,9.9L0,11.6l8.2,7.1L5.7,29.2L15,23.7z"
                />
              </svg>
              <svg className={classes.starSvg} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 30 30" xmlSpace="preserve">
                <path id="Icon_material-star" d="M15,23.7l9.3,5.6l-2.5-10.5l8.2-7.1l-10.8-0.9L15,0.8l-4.2,9.9L0,11.6l8.2,7.1L5.7,29.2L15,23.7z"
                />
              </svg>
              <svg className={classes.starSvg} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 30 30" xmlSpace="preserve">
                <path id="Icon_material-star" d="M15,23.7l9.3,5.6l-2.5-10.5l8.2-7.1l-10.8-0.9L15,0.8l-4.2,9.9L0,11.6l8.2,7.1L5.7,29.2L15,23.7z"
                />
              </svg>
              <svg className={classes.starSvg} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 30 30" xmlSpace="preserve">
                <path id="Icon_material-star" d="M15,23.7l9.3,5.6l-2.5-10.5l8.2-7.1l-10.8-0.9L15,0.8l-4.2,9.9L0,11.6l8.2,7.1L5.7,29.2L15,23.7z"
                />
              </svg>
            </div>
            <p className={classes.commentDescription}>Une efficacité comme du jamais vu ! Rapide et efficace, j’ai souscris à la formule pour les entreprises et j’ai trouvé mon alternant au bout de 2 semaines, avec toutes les compétences rêvées ! </p>
            <div className={classes.profileContent}>
              <div className={classes.profile}>
                <div className={classes.profileImg}>
                  <Image
                      src="/assets/images/commentProfil_1.jpg" alt=''
                      width='200'
                      height='200'
                  />
                </div>
                <div className={classes.content}>
                  <span className={classes.name}>Nicole BABICKI</span>
                  <span className={classes.job}>Dirigeante | SOMADEM</span>
                </div>
              </div>
              <svg className={classes.quote} version="1.1" id="quote" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 56.4 44.9" xmlSpace="preserve">
              <g>
                  <path id="Tracé_48" d="M0,4.4c-0.2-2.2,1.4-4.1,3.6-4.3c0.1,0,0.2,0,0.3,0c4-0.3,18,0,20.1,0c0.2,0,0.4,0.1,0.6,0.2
                      c0.6,0.4,0.9,1.1,0.8,1.9v26.4c0,0,0.2,15.6-24.3,16.2c-0.6,0-1.2-0.5-1.2-1.1c0,0,0,0,0,0v-5.5c0-0.6,0.5-1.1,1.1-1.1
                      c2.5-0.1,8.7-1,11.1-6.9c0.2-0.6-0.1-1.2-0.6-1.5c-0.1-0.1-0.3-0.1-0.4-0.1c-4.5,0-8.2,0-10,0c-0.6,0-1.1-0.5-1.1-1.1L0,4.4z"/>
                <path id="Tracé_49" d="M31,4.4c-0.2-2.2,1.4-4.1,3.6-4.3c0.1,0,0.2,0,0.3,0c4-0.3,18,0,20.1,0c0.2,0,0.4,0.1,0.6,0.2
                      c0.6,0.4,0.9,1.1,0.8,1.9v26.4c0,0,0.2,15.6-24.3,16.2c-0.6,0-1.2-0.5-1.2-1.1c0,0,0,0,0,0v-5.5c0-0.6,0.5-1.1,1.1-1.1
                      c2.5-0.1,8.7-1,11.1-6.9c0.2-0.6-0.1-1.2-0.6-1.5c-0.1-0.1-0.3-0.1-0.4-0.1c-4.5,0-8.2,0-10,0c-0.6,0-1.1-0.5-1.1-1.1L31,4.4z"/>
              </g>
              </svg>
            </div>
          </div>
          <div className={classes.comment}>
            <div className={classes.starsRank}>
              <svg className={classes.starSvg} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 30 30" xmlSpace="preserve">
                <path id="Icon_material-star" d="M15,23.7l9.3,5.6l-2.5-10.5l8.2-7.1l-10.8-0.9L15,0.8l-4.2,9.9L0,11.6l8.2,7.1L5.7,29.2L15,23.7z"
                />
              </svg>
              <svg className={classes.starSvg} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 30 30" xmlSpace="preserve">
                <path id="Icon_material-star" d="M15,23.7l9.3,5.6l-2.5-10.5l8.2-7.1l-10.8-0.9L15,0.8l-4.2,9.9L0,11.6l8.2,7.1L5.7,29.2L15,23.7z"
                />
              </svg>
              <svg className={classes.starSvg} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 30 30" xmlSpace="preserve">
                <path id="Icon_material-star" d="M15,23.7l9.3,5.6l-2.5-10.5l8.2-7.1l-10.8-0.9L15,0.8l-4.2,9.9L0,11.6l8.2,7.1L5.7,29.2L15,23.7z"
                />
              </svg>
              <svg className={classes.starSvg} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 30 30" xmlSpace="preserve">
                <path id="Icon_material-star" d="M15,23.7l9.3,5.6l-2.5-10.5l8.2-7.1l-10.8-0.9L15,0.8l-4.2,9.9L0,11.6l8.2,7.1L5.7,29.2L15,23.7z"
                />
              </svg>
              <svg className={classes.starSvg} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 30 30" xmlSpace="preserve">
                <path id="Icon_material-star" d="M15,23.7l9.3,5.6l-2.5-10.5l8.2-7.1l-10.8-0.9L15,0.8l-4.2,9.9L0,11.6l8.2,7.1L5.7,29.2L15,23.7z"
                />
              </svg>
            </div>
            <p className={classes.commentDescription}>Créer un outil permettant de mettre en contact facilement les employeurs et les futurs alternants est un beau projet ! Un gain de temps pour tous !</p>
            <div className={classes.profileContent}>
              <div className={classes.profile}>
                <div className={classes.profileImg}>
                  <Image
                      src="/assets/images/commentProfil_2.jpg" alt=''
                      width='200'
                      height='200'
                  />
                </div>
                <div className={classes.content}>
                  <span className={classes.name}>Mickael BODET</span>
                  <span className={classes.job}>Gérant | BODET Services</span>
                </div>
              </div>
              <svg className={classes.quote} version="1.1" id="quote" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 56.4 44.9" xmlSpace="preserve">
                <g>
                  <path id="Tracé_48" d="M0,4.4c-0.2-2.2,1.4-4.1,3.6-4.3c0.1,0,0.2,0,0.3,0c4-0.3,18,0,20.1,0c0.2,0,0.4,0.1,0.6,0.2
                      c0.6,0.4,0.9,1.1,0.8,1.9v26.4c0,0,0.2,15.6-24.3,16.2c-0.6,0-1.2-0.5-1.2-1.1c0,0,0,0,0,0v-5.5c0-0.6,0.5-1.1,1.1-1.1
                      c2.5-0.1,8.7-1,11.1-6.9c0.2-0.6-0.1-1.2-0.6-1.5c-0.1-0.1-0.3-0.1-0.4-0.1c-4.5,0-8.2,0-10,0c-0.6,0-1.1-0.5-1.1-1.1L0,4.4z"/>
                  <path id="Tracé_49" d="M31,4.4c-0.2-2.2,1.4-4.1,3.6-4.3c0.1,0,0.2,0,0.3,0c4-0.3,18,0,20.1,0c0.2,0,0.4,0.1,0.6,0.2
                      c0.6,0.4,0.9,1.1,0.8,1.9v26.4c0,0,0.2,15.6-24.3,16.2c-0.6,0-1.2-0.5-1.2-1.1c0,0,0,0,0,0v-5.5c0-0.6,0.5-1.1,1.1-1.1
                      c2.5-0.1,8.7-1,11.1-6.9c0.2-0.6-0.1-1.2-0.6-1.5c-0.1-0.1-0.3-0.1-0.4-0.1c-4.5,0-8.2,0-10,0c-0.6,0-1.1-0.5-1.1-1.1L31,4.4z"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
  );
};
