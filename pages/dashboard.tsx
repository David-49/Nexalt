import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import {AppLayout} from "../components/AppLayout";
import {createStyles} from "@mantine/core";
import {colors} from "../theme";

type HomePageWithLayout = NextPage & {
    getLayout: (page: ReactElement) => ReactNode;
};

const useStyles = createStyles((theme) => ({
    containerHeader: {
        paddingLeft: 150,
        paddingRight: 150,
    },
    main: {
        position: 'relative',
    },
    blueShapeTrick: {
        position: 'absolute',
        height: 800,
        bottom: 0,
        left: 0,
        width: 200,
        backgroundColor: colors.secondaryBlue,
        zIndex: -1,
    },
    containterFooter: {
        backgroundColor: colors.secondaryBlue,
        width: '95%',
        paddingTop: 60,
        borderTopRightRadius: 50,
        paddingBottom: 40,
    },
}));

const Blog: HomePageWithLayout = () => {
    const {classes} = useStyles();
    return <h1>Hello, c'est la page du blog</h1>
};

Blog.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <AppLayout>
            {page}
            </AppLayout>
        </>
    );
};

export default Blog;
