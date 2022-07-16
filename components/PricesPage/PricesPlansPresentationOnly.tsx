import { FC } from 'react';

import { Group } from '@mantine/core';
import { CardPrice } from './CardPrice';

interface IProps {}

export const PricesPlansPresentationOnly: FC<IProps> = () => (

    <Group direction="row">
        <Group spacing={65} align="flex-end" noWrap>
            <CardPrice
                linkUrl="/auth/signup"
                cardTitle="Formule Étudiante"
                price="0"
                labelBtn="Je m'inscris"
                listData={[
                    'Accès à son profil',
                    'Mettre à jour ses informations',
                    'Profil vérifé par nos experts',
                    'Gratuité',
                ]}
            />
            <CardPrice
                linkUrl="/prices"
                cardTitle="Formule Entreprise"
                price="200-800"
                labelBtn="Voir les tarifs"
                listData={[
                    'Accès aux profils (complets)',
                    '2 à 6 nouveaux profils par jour',
                    'Accompagnement personnalisé',
                    'Contrats en ligne',
                    'Paiement à 45 jours',
                ]}
            />
        </Group>
    </Group>
);
