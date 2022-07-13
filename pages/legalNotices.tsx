import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import { Title, Text, Container, createStyles, Group } from '@mantine/core';
import { colors } from '../theme';
import { NewLayout } from '../components/NewLayout';

type PageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

const useStyles = createStyles((theme) => ({
  containerBlockH1: {
    width: '90%',
    padding: 80,
    backgroundColor: colors.primaryBlue,
    borderRadius: 50,
    margin: 'auto',
    marginTop: 90,
    marginBottom: 50,
  },
  h1: {
    textTransform: 'uppercase',
    fontSize: 40,
    color: '#fff',
    marginBottom: 25,
  },
  textBlockH1: {
    width: '60%',
    marginRight: 'auto',
    color: '#fff',
  },
  h2: {
    textTransform: 'uppercase',
    fontSize: 25,
    color: colors.primaryBlue,
    marginBottom: 15,
  },
  link: {
    fontWeight: 800,
  },
  list: {
    listStyle: 'inside',
  },
  textSpacing: {
    marginBottom: 15,
  },
}));

const LegalNotices: PageWithLayout = () => {
  const { classes } = useStyles();

  return (
    <Container
      fluid
      style={{
        width: '100%',
        paddingBottom: 150,
        backgroundColor: colors.primaryBackgroundColor,
        borderBottomLeftRadius: 50,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className={classes.containerBlockH1}>
        <Title className={classes.h1} order={1}>
          Mentions légales
        </Title>
        <Text className={classes.textBlockH1}>
          Conformément aux dispositions des articles 6-III et 19 de la Loi n°
          2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique,
          dite L.C.E.N., nous portons à la connaissance des utilisateurs et
          visiteurs du site : www.nexalt.fr les informations suivantes :
        </Text>
      </div>
      <Group
        direction="column"
        spacing={80}
        align="flex-start"
        pl={150}
        pr={150}
      >
        <div>
          <Title order={2} className={classes.h2}>
            éditeur
          </Title>
          <Text className={classes.textSpacing}>
            Le site www.nexalt.fr est la propriété exclusive de{' '}
            <strong>NEXALT</strong>, qui l'édite.
          </Text>

          <Text>
            <strong>8 Rue Joseph Fourier, 49070 Beaucouzé</strong>
          </Text>
          <Text className={classes.textSpacing}>
            Adresse de courrier électronique :{' '}
            <strong>contact@nexalt.fr</strong>
          </Text>

          <Text>
            Directeur de la publication : <strong>Lilian BEILLARD</strong>
          </Text>
          <Text>
            Contactez le responsable de la publication :{' '}
            <strong>
              <a href="mailto:contact@lilianbeillard.fr">
                contact@lilianbeillard.fr
              </a>
            </strong>
          </Text>
        </div>
        <div>
          <Title className={classes.h2} order={2}>
            Hébergement
          </Title>
          <Text className={classes.textSpacing}>
            Le site est hébergé par Vercel sur leur serveur européen.
          </Text>
        </div>
        <div>
          <Title className={classes.h2} order={2}>
            Description des services fournis
          </Title>
          <Text>
            Le site a pour objet de fournir une information concernant
            l’ensemble des activités de la société. Le proprietaire du site
            s’efforce de fournir sur le site des informations aussi précises que
            possible. Toutefois, il ne pourra être tenue responsable des
            omissions, des inexactitudes et des carences dans la mise à jour,
            qu’elles soient de son fait ou du fait des tiers partenaires qui lui
            fournissent ces informations. Tous les informations proposées sur le
            site sont données à titre indicatif, sont non exhaustives, et sont
            susceptibles d’évoluer. Elles sont données sous réserve de
            modifications ayant été apportées depuis leur mise en ligne.
          </Text>
        </div>
        <div>
          <Title className={classes.h2} order={2}>
            Propriété intellectuelle et contrefaçons
          </Title>
          <Text className={classes.textSpacing}>
            Le proprietaire du site est propriétaire des droits de propriété
            intellectuelle ou détient les droits d’usage sur tous les éléments
            accessibles sur le site, notamment les textes, images, graphismes,
            logo, icônes, sons, logiciels… Toute reproduction, représentation,
            modification, publication, adaptation totale ou partielle des
            éléments du site, quel que soit le moyen ou le procédé utilisé, est
            interdite, sauf autorisation écrite préalable à l'email :
            contact@nexalt.fr. Toute exploitation non autorisée du site ou de
            l’un quelconque de ces éléments qu’il contient sera considérée comme
            constitutive d’une contrefaçon et poursuivie conformément aux
            dispositions des articles L.335-2 et suivants du Code de Propriété
            Intellectuelle.
          </Text>
        </div>
        <div>
          <Title className={classes.h2} order={2}>
            Liens hypertextes et cookies
          </Title>
          <Text className={classes.textSpacing}>
            Le site contient un certain nombre de liens hypertextes vers
            d’autres sites (partenaires, informations …) mis en place avec
            l’autorisation de le proprietaire du site . Cependant, le
            proprietaire du site n’a pas la possibilité de vérifier le contenu
            des sites ainsi visités et décline donc toute responsabilité de ce
            fait quand aux risques éventuels de contenus illicites.
            L’utilisateur est informé que lors de ses visites sur le site un ou
            des cookies sont susceptible de s’installer automatiquement sur son
            ordinateur. Un cookie est un fichier de petite taille, qui ne permet
            pas l’identification de l’utilisateur, mais qui enregistre des
            informations relatives à la navigation d’un ordinateur sur un site.
            Les données ainsi obtenues visent à faciliter la navigation
            ultérieure sur le site, et ont également vocation à permettre
            diverses mesures de fréquentation. Le paramétrage du logiciel de
            navigation permet d’informer de la présence de cookie et
            éventuellement, de refuser de la manière décrite à l’adresse
            suivante : www.cnil.fr. Le refus d’installation d’un cookie peut
            entraîner l’impossibilité d’accéder à certains services.
            L’utilisateur peut toutefois configurer son ordinateur de la manière
            suivante, pour refuser l’installation des cookies : Sous Internet
            Explorer : onglet outil / options internet. Cliquez sur
            Confidentialité et choisissez Bloquer tous les cookies. Validez sur
            Ok. Sous Netscape : onglet édition / préférences. Cliquez sur
            Avancées et choisissez Désactiver les cookies. Validez sur Ok.
          </Text>
        </div>
        <div>
          <Title className={classes.h2} order={2}>
            Protection des biens et des personnes - Gestion des données
            personnelles
          </Title>
          <Text className={classes.textSpacing}>
            Utilisateur : Internaute se connectant, utilisant le site susnommé :
            www.nexalt.fr. En France, les données personnelles sont notamment
            protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801
            du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive
            Européenne du 24 octobre 1995.
          </Text>

          <Text className={classes.textSpacing}>
            Sur le site, le proprietaire du site ne collecte des informations
            personnelles relatives à l'utilisateur que pour le besoin de
            certains services proposés par le site. L'utilisateur fournit ces
            informations en toute connaissance de cause, notamment lorsqu'il
            procède par lui-même à leur saisie. Il est alors précisé à
            l'utilisateur du site l’obligation ou non de fournir ces
            informations. Conformément aux dispositions des articles 38 et
            suivants de la loi 78-17 du 6 janvier 1978 relative à
            l’informatique, aux fichiers et aux libertés, tout utilisateur
            dispose d’un droit d’accès, de rectification, de suppression et
            d’opposition aux données personnelles le concernant. Pour l’exercer,
            adressez votre demande à www.nexalt.fr par email : contact@nexalt.fr
            ou en effectuant sa demande écrite et signée, accompagnée d’une
            copie du titre d’identité avec signature du titulaire de la pièce,
            en précisant l’adresse à laquelle la réponse doit être envoyée.
          </Text>

          <Text className={classes.textSpacing}>
            Aucune information personnelle de l'utilisateur du site n'est
            publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou
            vendue sur un support quelconque à des tiers. Seule l'hypothèse du
            rachat du site à le proprietaire du site et de ses droits
            permettrait la transmission des dites informations à l'éventuel
            acquéreur qui serait à son tour tenu de la même obligation de
            conservation et de modification des données vis à vis de
            l'utilisateur du site.{' '}
          </Text>

          <Text className={classes.textSpacing}>
            Le site www.nexalt.fr est en conformité avec le RGPD voir notre
            politique RGPD.
          </Text>

          <Text>
            Les bases de données sont protégées par les dispositions de la loi
            du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996
            relative à la protection juridique des bases de données.
          </Text>
        </div>
      </Group>
    </Container>
  );
};

LegalNotices.getLayout = function getLayout(page: ReactElement) {
  return <NewLayout>{page}</NewLayout>;
};

export default LegalNotices;
