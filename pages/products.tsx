import { NextPage } from 'next';

// import { pool } from '../config/database';

interface IProps {
  dateFormatted: string;
}

const Products: NextPage<IProps> = (props) => {
  const { dateFormatted } = props;

  return <h1>Hello {dateFormatted}</h1>;
};

export default Products;

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const query = 'SELECT NOW()';
//   const dateNow = (await pool.query(query)).rows;
//   const dateFormatted = dateNow[0].now.toString();
//   return {
//     props: { dateFormatted },
//   };
// };
