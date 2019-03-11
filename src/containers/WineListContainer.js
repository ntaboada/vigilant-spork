import { graphql, compose, withApollo } from 'react-apollo';
import CREATE_WINE from "../graphql/mutations/CREATE_WINE";
import DELETE_WINE from "../graphql/mutations/DELETE_WINE";
import WINES from "../graphql/queries/WINES"
import WineList from "../components/WineList/index";


const createMutationOptions = {
  name: 'CreateWine',
  options: () => ({
    refetchQueries: [{
      query: WINES,
    }],
  }),
};

const queryOptions = {
    name: 'Wines',
    options: () => ({
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'no-cache',
    }),
    props: ({ Wines: { wines, loading, error } }) => ({
      wines,
      loading,
      error
    }),
};

export default compose(
    withApollo,
    graphql(WINES, queryOptions),
    graphql(DELETE_WINE, 'DeleteWine'),
    graphql(CREATE_WINE, createMutationOptions),
)(WineList);
  