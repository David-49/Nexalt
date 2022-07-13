import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import {
  Title,
  Text,
  Container,
  createStyles,
  List,
  Group,
} from '@mantine/core';
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

const PrivacyPolicy: PageWithLayout = () => {
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
          Politique de confidentialité
        </Title>
        <Text className={classes.textBlockH1}>
          Cette charte décrit les moyens mis en œuvre par Nexalt afin de
          protéger vos données personnelles, la façon dont nous procédons à la
          collecte de celles-ci, ainsi que l'utilisation que nous sommes amenés
          à en faire. Nexalt respecte l’ensemble des dispositions réglementaires
          et législatives françaises et européennes relatives à la protection
          des données personnelles.
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
            Responsable de la collecte des données personnelles
          </Title>
          <Text className={classes.textSpacing}>
            Pour les Données Personnelles collectées dans le cadre de la
            création de votre compte personnel et de votre navigation sur le
            site, le responsable du traitement des Données Personnelles est :
            Nexalt. Représenté par Lilian BEILLARD, son représentant légal.
            Contact :{' '}
            <a href="mailto:contact@lilianbeillard.fr" className={classes.link}>
              contact@lilianbeillard.fr
            </a>
          </Text>

          <Text className={classes.textSpacing}>
            En tant que responsable du traitement des données collectées, nous
            nous engageons à respecter le cadre des dispositions légales en
            vigueur.
          </Text>
          <Text>
            Vous fournissez ces informations en toute connaissance de cause,
            notamment lorsque vous procédez par vous-même à la saisie. Il vous
            est alors précisé l’obligation ou non de fournir ces informations.
          </Text>
        </div>
        <div>
          <Title className={classes.h2} order={2}>
            Finalité des données collectées
          </Title>
          <Text className={classes.textSpacing}>
            Sur notre site Nexalt, vos données personnelles sont principalement
            traitées par le service de gestion de notre service client à des
            fins statistiques et d’analyses.
          </Text>
          <Text>
            Nous somme susceptible de traiter tout ou partie des données :
          </Text>
          <List type="unordered" className={classes.list}>
            <List.Item>
              pour générer et améliorer la navigation sur le site, (données de
              connexion et d’utilisation du Site)
            </List.Item>
            <List.Item>
              pour prévenir et lutter contre la fraude informatique (spamming,
              hacking…) : matériel informatique utilisé pour la navigation,
              l’adresse IP, le mot de passe (hashé)
            </List.Item>
            <List.Item>
              pour mener des enquêtes de satisfaction facultatives et des
              campagnes de communication (sms, mail)
            </List.Item>
          </List>
        </div>
        <div>
          <Title className={classes.h2} order={2}>
            DROIT D'ACCÈS, DE RECTIFICATION D'OPPOSITION
          </Title>
          <Text>
            Conformément à la réglementation européenne en vigueur, vous
            disposez des droits suivants, concernant vos données personnelles :
          </Text>
          <List
            type="unordered"
            className={`${classes.list} ${classes.textSpacing}`}
          >
            <List.Item>Le droit d’accéder à vos Données Personnelles</List.Item>
            <List.Item>
              Le droit de les rectifier, de les compléter, ou de mettre à jour
              les données inexactes, incomplètes, équivoques, ou périmées
            </List.Item>
            <List.Item>
              Le droit de demander leurs effacements dans les cas prévus par la
              réglementation
            </List.Item>
            <List.Item>
              Le droit de demander la limitation de leurs traitements, de rendre
              temporairement inaccessibles certaines de vos données
            </List.Item>
            <List.Item>
              Le droit à la portabilité de vos Données Personnelles
            </List.Item>
            <List.Item>
              Le droit d'opposition, leurs traitement pour des finalités de
              prospection commerciale
            </List.Item>
            <List.Item>
              Le droit de communiquer des instructions (en cas de décès)
            </List.Item>
          </List>
          <Text className={classes.textSpacing}>
            Pour toute demande, contactez-nous par mail à cette adresse :{' '}
            <a href="mailto:contact@nexalt.fr" className={classes.link}>
              contact@nexalt.fr
            </a>
            .
          </Text>
          <Text>
            Nous conservons vos Données Personnelles pendant toute la durée de
            votre adhésion à Nexalt ou le cas échéant à compter de votre dernier
            contact avec nous. En outre, Nous nous réservons le droit d'archiver
            vos Données Personnelles pour les durées de prescription
            applicables. En ce qui concerne les informations relatives à la
            mesure d'audience, collectées sur notre site via des cookies, nous
            les conservons pour une durée de cinq ans.
          </Text>
        </div>
        <div>
          <Title className={classes.h2} order={2}>
            Non-communication des données personnelles
          </Title>
          <Text className={classes.textSpacing}>
            Nous nous engageons à prendre toutes les précautions nécessaires
            afin de préserver la sécurité des Informations et notamment qu’elles
            ne soient pas communiquées à des personnes non autorisées.
          </Text>
          <Text className={classes.textSpacing}>
            Cependant, si un incident impactant l’intégrité ou la
            confidentialité de vos informations, est portée à notre
            connaissance. Celui-ci devra vous être signalé dans les meilleurs
            délais et les mesures de corrections prises suite à cet incident
            vous seront indiquées.
          </Text>
          <Text className={classes.textSpacing}>
            Par ailleurs nous ne collectons aucune « données sensibles ».
          </Text>
          <Text className={classes.textSpacing}>
            Vos Données Personnelles peuvent être traitées par des filiales de
            notre site et des sous-traitants (prestataires de services),
            exclusivement afin de réaliser les finalités de la présente
            politique.
          </Text>
          <Text>
            Dans la limite de leurs attributions respectives et pour les
            finalités rappelées ci-dessus, les principales personnes
            susceptibles d’avoir accès aux données des Utilisateurs de
            www.nexalt.fr sont principalement la direction, et les responsables
            de notre service client.
          </Text>
        </div>
        <div>
          <Title className={classes.h2} order={2}>
            INFORMATIONS PERSONNELLES ET MINEURS
          </Title>
          <Text className={classes.textSpacing}>
            Les mineurs de moins de 16 ans ou incapables doivent obtenir le
            consentement de leur responsable légal préalablement à la saisie de
            leurs Données Personnelles sur notre site Nexalt. Sauf obligation
            légale de confidentialité, nous pourrons directement informer ce
            responsable (i) des catégories spécifiques de Données Personnelles
            recueillies auprès de la personne mineure (ii) de la possibilité de
            s’opposer à la collecte, l’utilisation ou la conservation de
            celles-ci.
          </Text>
          <Text>
            L’âge de 16 ans peut être abaissé jusqu’à 13 ans en fonction de la
            réglementation locale de la résidence habituelle de l’Utilisateur,
            en vertu de l’article 8 du RGPD.
          </Text>
        </div>
        <div>
          <Title className={classes.h2} order={2}>
            LOI APPLICABLE
          </Title>
          <Text className={classes.textSpacing}>
            Les présentes conditions d’utilisation du site sont régies par la
            loi française et soumise à la compétence des tribunaux du siège
            social de l’éditeur, sous réserve d’une attribution de compétence
            spécifique découlant d’un texte de loi ou réglementaire particulier.
          </Text>
          <Text className={classes.textSpacing}>
            Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n°
            2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et
            aux libertés.
          </Text>
          <Text>
            Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie
            numérique.
          </Text>
        </div>
        <div>
          <Title className={classes.h2} order={2}>
            CONTACTEZ-NOUS
          </Title>
          <Text>
            Pour toute question, information sur le produits présentés sur notre
            site, ou concernant le site lui-même, vous pouvez nous laisser un
            message à l’adresse suivante :{' '}
            <a href="mailto:contact@nexalt.fr">contact@nexalt.fr</a>
          </Text>
        </div>
      </Group>
    </Container>
  );
};

PrivacyPolicy.getLayout = function getLayout(page: ReactElement) {
  return <NewLayout>{page}</NewLayout>;
};

export default PrivacyPolicy;
