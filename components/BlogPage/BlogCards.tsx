import { FC } from 'react';

import { createStyles } from '@mantine/core';
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
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 40,
    gridAutoRows: 'minmax(100px, auto)',
    marginBottom: 40,
    '@media (max-width: 1720px)': {
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
}));

export const BlogCards: FC<IProps> = () => {
  const { classes } = useStyles();
  return (
      <div className={classes.container}>
        <div className={classes.teams}>
          <div className={classes. column1}>
            <article className={classes.teamCard}>
                <Link href="">
                  <a>
                    <div className={classes.teamPicture}>
                      <Image src='/assets/images/blog_1.jpg'
                             width={4032}
                             height={3842}
                             priority
                      />
                    </div>
                    <div className={classes.content}>
                      <span className={classes.teamName}>Les points clés pour avoir un CV qui déchiiiiiiiiire ! </span>
                      <p className={classes.teamJob}>Vous avez un doute sur ce que vous pouvez mettre dans votre CV, et… ce que vous ne devez absolument pas mettre ? Voici quelques petits points qui peuvent aider…</p>
                    </div>
                  </a>
                </Link>
            </article>
            <article className={classes.teamCard}>
              <Link href="">
                <a>
                <div className={classes.teamPicture}>
                  <Image src='/assets/images/blog_2.jpg'
                         width={3555}
                         height={3842}
                         priority
                  />
                </div>
                <div className={classes.content}>
                  <span className={classes.teamName}>Faire une lettre de motivation super motivante</span>
                  <p className={classes.teamJob}>Le moment tant attendu de la lettre de motivation arrive et vous paniquez ? Vous ne savez pas quoi mettre, vous avez peur de fourcher ? Voici quelques points clés pour vous !</p>
                </div>
              </a>
              </Link>
            </article>
            <article className={classes.teamCard}>
              <Link href="">
                  <a>
                    <div className={classes.teamPicture}>
                      <Image src='/assets/images/blog_3.jpg'
                             width={3555}
                             height={3842}
                             priority
                      />
                    </div>
                    <div className={classes.content}>
                      <span className={classes.teamName}>Prime d’activité</span>
                      <p className={classes.teamJob}>En tant que salarié, TNS, apprenti ou encore en congé parental, des droits peuvent vous être ouverts concernant la prime d’activité.
                        On vous en dit plus ! </p>
                    </div>
                </a>
              </Link>

            </article>
            <article className={classes.teamCard}>
              <Link href="">
                <a>
                <div className={classes.teamPicture}>
                  <Image src='/assets/images/blog_4.jpg'
                         width={3555}
                         height={3842}
                         priority
                  />
                </div>
                <div className={classes.content}>
                  <span className={classes.teamName}>Les différences dans les contrats </span>
                  <p className={classes.teamJob}>Il y a des différences (de dingue) entre les deux contrats d’alternance possibles pour vous.
                    On vous laisse vous rafraichir la mémoire !</p>
                </div>
              </a>
              </Link>

            </article>
            <article className={classes.teamCard}>
              <Link href="">
                <a>
                  <div className={classes.teamPicture}>
                <Image src='/assets/images/blog_5.jpg'
                       width={3555}
                       height={3842}
                       priority
                />
              </div>
                <div className={classes.content}>
                  <span className={classes.teamName}>Gérer sa e-réputation</span>
                  <p className={classes.teamJob}>L’ère du digital ne nous permet pas de faire de faux pas… L’e-réputation est essentiel dans le développement d’une entreprise. On vous présente quelques conseils.</p>
                </div>
                </a>
              </Link>
            </article>
            <article className={classes.teamCard}>
              <Link href="">
                <a>
                <div className={classes.teamPicture}>
                  <Image src='/assets/images/blog_6.jpg'
                         width={3555}
                         height={3842}
                         priority
                  />
                </div>
                <div className={classes.content}>
                  <span className={classes.teamName}>Quelques tips lors d’un entretien</span>
                  <p className={classes.teamJob}>Les entretiens ne sont pas toujours évidents… C’est pourquoi, il est très important de les préparer. Voici pourquoi et comment !</p>
                </div>
              </a>
              </Link>
            </article>
          </div>
        </div>
      </div>
  );
};
