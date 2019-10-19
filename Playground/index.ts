import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const graphiqlAzureFunctions = require('graphiql-azure-functions');

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest): Promise<void> {

    graphiqlAzureFunctions({
        graphqlUrl: '/api/graphql',
      })(context);
};

export default httpTrigger;
